"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/admin");
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px]" />

            <div className="w-full max-w-md relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-2">
                            Ark Dashboard
                        </h1>
                        <p className="text-white/40 text-sm tracking-widest uppercase">
                            Administrator Login
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                placeholder="admin@ark.com"
                            />
                        </div>

                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500/60 hover:text-amber-500 transition-colors focus:outline-none p-1"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88L14.12 14.12" /><path d="M2 2l20 20" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><circle cx="12" cy="12" r="3" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg text-center animate-pulse">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3 rounded-xl transition-all shadow-[0_4px_20px_-5px_rgba(245,158,11,0.5)] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                        >
                            {loading ? "AUTHENTICATING..." : "SIGN IN TO DASHBOARD"}
                        </button>
                    </form>

                    <button
                        onClick={() => router.push('/')}
                        className="w-full text-center mt-8 text-white/30 hover:text-white/60 text-xs transition-colors"
                    >
                        ← BACK TO PUBLIC SITE
                    </button>
                </div>
            </div>
        </div>
    );
}
