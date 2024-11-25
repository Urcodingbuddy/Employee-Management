"use client";
import EyeCloseIcon from "@repo/ui/EyeCloseSvg";
import EyeOpenIcon from "@repo/ui/EyeOpenSvg";
import { useState } from "react";
import { useSignUp } from "../../lib/hooks/handleSignup";
import { Loader } from "@repo/ui/Loader";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { handleSignUp } = useSignUp();
    const [showPassword, setShowPassword] = useState(false);

    const handleNumberChange = (value: string) => {
        const regex = /^[1-9][0-9]*$|^0$/; // Regex for valid numbers
        if (value === "" || (regex.test(value) && value.length <= 10)) {
            setPhone(value);
        }
    };

    const handleSignupClick = () => {
        handleSignUp(email, name, phone, password, setError, setLoading);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSignupClick();
        }
    };

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#9719f7] via-[#231d4a] to-[#181627]"
            onKeyDown={handleKeyDown} // Add this to capture keydown events
        >
            <div className="max-w-md w-full px-8 pt-8 pb-2 bg-transparent shadow-xl rounded-lg backdrop-blur-3xl border hover:shadow-lg hover:shadow-white/30">
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">
                    Create Your Account
                </h2>
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-white"
                        >
                            Full Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-white"
                        >
                            Email Address
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-white"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            required
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
                            placeholder="123****1351"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const value = e.target.value;
                                if (value.length > 10) return; // Handle overflow case
                                handleNumberChange(value);
                            }}
                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                const inputValue = e.currentTarget.value.replace(/[^0-9]/g, "");
                                e.currentTarget.value = inputValue;
                            }}
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
                                placeholder="Create a password"
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
                        onClick={handleSignupClick}
                        type="button"
                        className="w-full bg-gradient-to-r from-[#9719f7] via-[#231d4a] to-[#181627] hover:from-[#972df7] hover:via-[#241d4a] hover:to-[#171627] text-white py-2 px-4 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    >
                        {loading ? <Loader /> : "Sign-Up"}
                    </button>
                </form>
                <div className="flex flex-col items-center">
                    <p className="mt-6 mb-3 text-md text-center text-white">
                        Already have an account?{" "}
                        <a href="/auth/signin" className="text-purple-700 hover:underline">
                            Sign In
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
