import { prisma } from '../database/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SECRET, JWT_EXPIRES_IN, ADMIN_CODE } from '../config/env.js';

const registerUser = async (req, res) => {
    const { email, password, confirmPassword, adminCode } = req.body;

    if (!email || !password || !confirmPassword || !adminCode) {
        return res.status(400).json({ status: "error", message: 'All fields are required', data: "All fields are required" });
    }

    if (password != confirmPassword) {
        return res.status(400).json({ status: "error", message: 'Invalid Password', data: "Invalid Password" });
    }

    if (adminCode != ADMIN_CODE) {
        return res.status(401).json({ status: "error", message: 'Unauthorized', data: "Unauthorized" });
    }

    try {
        const isExist = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if (isExist) {
            return res.status(401).json({ status: "error", message: 'Email Already Exist', data: "Email Already Exist" });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.users.create({
            data: {
                email,
                password: hashedPassword,
            }
        });

        if (!newUser) return res.status(500).json({ status: "error", message: 'Failed to register user' });

        res.status(201).json({
            status: "success",
            message: 'User registered successfully',
            user: {
                email: newUser.email,
            }
        });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: "error", message: 'Internal server error', data: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: "error", message: 'All fields are required' });
        }

        const user = await prisma.users.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ status: 'error', message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ status: 'error', message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
        });

        res.status(200).json({ status: 'success', message: 'Login successful', email: user.email, token });

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error', error: error.message });
    }
}

const logoutUser = async (req, res) => {
    res.send('Logout endpoint');
}

const validateToken = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Valid Token' });
}

export {
    registerUser,
    loginUser,
    logoutUser,
    validateToken,
};