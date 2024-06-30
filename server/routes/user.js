// routes/user.js
import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ status: false, message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    await newUser.save();
    return res.json({ status: true, message: "User registered" });
  } catch (error) {
    console.error('Signup Error:', error);
    return res.json({ status: false, message: "An error occurred during signup" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: false, message: "User not registered" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ status: false, message: "Password is incorrect" });
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
    return res.json({ status: true, message: "Login successful", token });
  } catch (error) {
    console.error('Login Error:', error);
    return res.json({ status: false, message: "An error occurred during login" });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ status: true, message: "Logout successful" });
});

export { router as UserRouter };
