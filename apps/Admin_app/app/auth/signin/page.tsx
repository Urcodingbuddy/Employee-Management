"use client";
import EyeCloseIcon from "@repo/ui/EyeCloseSvg";
import EyeOpenIcon from "@repo/ui/EyeOpenSvg";
import { useState } from "react";
import { useSignIn } from "../../lib/hooks/handleSignin";
import { Loader } from "@repo/ui/Loader";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { handleSignIn } = useSignIn();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload
        handleSignIn(email, password, setError, setLoading);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#9719f7] via-[#231d4a] to-[#181627]">
            <div className="max-w-md w-full px-8 pt-8 pb-2 bg-transparent shadow-xl rounded-lg backdrop-blur-3xl border hover:shadow-lg hover:shadow-white/30">
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">
                    Sign In to Your Account
                </h2>
                {/* Use onSubmit here */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-white"
                        >
                            Email or Phone
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            required
                            placeholder="Email or Phone"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-white"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 bottom-1 right-0 flex items-center pr-3"
                            >
                                {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#9719f7] via-[#231d4a] to-[#181627] hover:from-[#972df7] hover:via-[#241d4a] hover:to-[#171627] text-white py-2 px-4 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    >
                        {loading ? <Loader size={7} /> : "Sign-In"}
                    </button>
                </form>
                <div className="flex flex-col items-center">
                    <p className="mt-6 mb-3 text-md text-center text-white">
                        Don't have an account?{" "}
                        <a href="/auth/signup" className="text-purple-700 hover:underline">
                            Sign up
                        </a>
                    </p>
                    <div className="w-96 flex justify-center">
                        {error && (
                            <p
                                className="mb-2 text-lg text-center text-wrap"
                                style={{ color: "red" }}
                            >
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
