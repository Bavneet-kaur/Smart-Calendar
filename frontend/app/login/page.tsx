"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { showToast } from "../components/ui/Toast";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>();
    const router = useRouter();
    const onSubmit = async (data: FormData) => {
        if (data.password !== data.confirmPassword) {
            showToast("Passwords do not match", "error");
            return;
        }
        try {
            setLoading(true);
            await registerUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            });
            showToast("Account created successfully", "info");
            reset();
            setTimeout(() => {
                router.push("/");
            }, 1000);

        } catch (error: any) {
            showToast(
                error?.response?.data?.message || "Something went wrong",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl/80 shadow-gray-300 space-y-6 subpixel-antialiased"
            >
                <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-900 subpixel-antialiased tracking-normal">
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-900"></span>
                    </span>
                    Login
                </h2>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    })}
                    error={errors.email?.message}
                />

                <div>
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        error={errors.password?.message}
                    />
                    <div className="flex justify-end items-center mb-1">

                        <Link
                            href="/forgot-password"
                            className="text-sm text-gray-500 hover:text-indigo-600 transition"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-600 text-white  py-2 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
                >
                    {loading ? "Logging In..." : "Log in"}
                </button>

                <p className="text-sm text-center text-gray-500">
                    Don't have an account?
                    <Link href="/register" className="text-gray-900/40 hover:text-gray-900 transition hover:font-bold">
                        Sign up
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default RegistrationForm;
