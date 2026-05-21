"use client";

import React, { useState, useEffect } from 'react';
import { useDonation } from './DonationProvider';

export default function ExitIntentOverlay() {
    const { openDonation } = useDonation();
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        // Check if we've already shown it this session
        const sessionShown = sessionStorage.getItem('exit_intent_shown');
        if (sessionShown) {
            setHasTriggered(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
                sessionStorage.setItem('exit_intent_shown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasTriggered]);

    const handleSuccess = (paymentData: any) => {
        console.log("Exit intent payment success", paymentData);
        setIsSuccess(true);
        // Automatically close after 3 seconds on success
        setTimeout(() => setIsVisible(false), 3000);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
            <div className="relative bg-navy-light border border-gold/30 rounded-2xl w-full max-w-[500px] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                </div>

                <div className="relative z-10 p-8 pt-12 text-center">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    {!isSuccess ? (
                        <>
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4 heading-font">WAIT! DON'T LEAVE YET</h2>
                            <p className="text-lg text-white/80 mb-8 font-medium">
                                A small gift of <span className="text-gold font-bold">$10</span> helps us lay another plank for The Ark. Every contribution matters in this story of faith.
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={() => {
                                        openDonation(10);
                                        setIsVisible(false);
                                    }}
                                    className="w-full bg-gold text-navy font-black py-4 rounded-xl tracking-[2px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:scale-95 heading-font px-8 text-sm"
                                >
                                    SUPPORT THE ARK — $10
                                </button>
                                <p className="text-[10px] text-white/40 uppercase tracking-[2px] font-bold italic">International Bank Transfer</p>
                            </div>
                        </>
                    ) : (
                        <div className="py-8 animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4 heading-font text-gold">THANK YOU!</h2>
                            <p className="text-xl text-white/90">Your support has been recorded.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
