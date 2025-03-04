"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { Box, Button, Container, Typography, Center, Card, CardContent } from "@mui/material";


const AuthSystem = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        confirmPassword: "",
        phone: "",
        rememberMe: false,
        terms: false
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!validatePassword(formData.password)) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!isLogin) {
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
            if (!formData.fullName) {
                newErrors.fullName = "Full name is required";
            }
            if (!formData.terms) {
                newErrors.terms = "Please accept terms and conditions";
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <Box className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <Box className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <Box>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/logoGB.png"
                        alt="Logo"
                    />
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{
                            mt: 2,
                            fontWeight: 'bold',
                            color: 'text.primary',
                        }}
                    >
                        {isLogin ? "Sign in to your account" : "Create your account"}
                    </Typography>
                </Box>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <Box className="rounded-md shadow-sm space-y-4">
                        {!isLogin && (
                            <Box>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <Box className="relative">
                                    <FiUser className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        className={`appearance-none relative block w-full px-10 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </Box>
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </Box>
                        )}

                        <Box>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <Box className="relative">
                                <FiMail className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={`appearance-none relative block w-full px-10 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Box>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </Box>

                        <Box>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <Box className="relative">
                                <FiLock className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className={`appearance-none relative block w-full px-10 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                                </Button>
                            </Box>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </Box>

                        {!isLogin && (
                            <>
                                <Box>
                                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                                    <Box className="relative">
                                        <FiLock className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            required
                                            className={`appearance-none relative block w-full px-10 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                </Box>

                                <Box>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <Box className="relative">
                                        <FiPhone className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            className="appearance-none relative block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                            placeholder="Phone Number (Optional)"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Box>

                    <Box className="flex items-center justify-between">
                        {isLogin ? (
                            <>
                                <Box className="flex items-center">
                                    <input
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </Box>
                                <Box className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </Box>
                            </>
                        ) : (
                            <Box className="flex items-center">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                    I agree to the Terms and Conditions
                                </label>
                            </Box>
                        )}
                    </Box>

                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                py: 2,
                                fontSize: "1rem",
                                borderRadius: "8px",
                                textTransform: "none",
                                transition: "background-color 0.3s",
                                "&:hover": {
                                    backgroundColor: "rgba(7, 51, 5, 0.7)",
                                },
                            }}
                        >
                            {isLogin ? "Sign in" : "Sign up"}
                        </Button>
                    </Box>


                    <Box className="mt-6">
                        <Box className="relative">
                            <Box className="absolute inset-0 flex items-center">
                                <Box className="w-full border-t border-gray-300"></Box>
                            </Box>
                            <Box className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </Box>
                        </Box>

                        <Box className="mt-6 grid grid-cols-3 gap-3">
                            <Button
                                variant="outlined"
                                fullWidth
                                className="shadow-sm bg-white text-gray-500 hover:bg-gray-50 transition-colors duration-200 h-12 flex justify-center items-center"
                            >
                                <FcGoogle className="text-2xl" />
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                className="shadow-sm bg-white text-gray-500 hover:bg-gray-50 transition-colors duration-200 h-12 flex justify-center items-center"
                            >
                                <BsFacebook className="text-2xl text-blue-600" />
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                className="shadow-sm bg-white text-gray-500 hover:bg-gray-50 transition-colors duration-200 h-12 flex justify-center items-center"
                            >
                                <BsGithub className="text-2xl" />
                            </Button>
                        </Box>
                    </Box>
                </form>

                <Box className="text-center">
                    <Button
                        type="button"
                        variant="text"
                        color="primary"
                        sx={{
                            fontSize: "1rem",
                            textTransform: "none",
                            fontWeight: "medium",
                            color: "blue.600",  // Colore primario
                            "&:hover": {
                                color: "blue.500",  // Colore al passaggio del mouse
                            },
                        }}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AuthSystem;