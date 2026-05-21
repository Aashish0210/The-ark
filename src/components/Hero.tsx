"use client";

import { useState, useEffect } from 'react';
import { useDonation } from './DonationProvider';

interface HeroProps {
    subtitle: string;
    title: string;
    text: string;
}

export default function Hero({ subtitle, title, text }: HeroProps) {
    const { openDonation } = useDonation();
    const [mounted, setMounted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [donated, setDonated] = useState(false);

    const images = [
        "/hero-1.png", // Realistic Construction
        "/hero-2.png", // Realistic Interior
        "/hero-3.png", // Realistic Sunset
        "/ark-bg.jpg"  // Original Realistic
    ];

    useEffect(() => {
        setMounted(true);

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 10000); // Slower interval for grounded realistic feel

        return () => clearInterval(timer);
    }, [images.length]);

    const handleSuccess = (paymentData: any) => {
        console.log("Hero donation success", paymentData);
        setDonated(true);
    };

    const titleParts = title.split(' ');
    const mainTitle = titleParts[0];
    const spanTitle = titleParts.slice(1).join(' ');

    return (
        <header id="home" className="relative min-h-screen flex items-center justify-center text-center pt-6 sm:pt-10 md:pt-20 overflow-hidden bg-[#050c16]">
            {/* Photorealistic Slideshow Background */}
            {mounted && images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-[4000ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom, rgba(5, 12, 22, 0.95) 0%, rgba(5, 12, 22, 0.7) 40%, rgba(5, 12, 22, 0.7) 60%, #071220 100%), url("${img}") center/cover no-repeat`,
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>
                </div>
            ))}

            <div className="relative z-10 max-w-[800px] px-6">

                <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.1] md:leading-[1.15] font-bold mb-4">
                    {mainTitle}<br /><span className="text-[4rem] md:text-[6.5rem] text-gold leading-[1.1] md:leading-[1.15] inline-block mt-2">{spanTitle}</span>
                </h1>

                {!donated ? (
                    <>
                        <p className="text-white tracking-[2px] text-[24px] md:text-[32px] font-medium mb-8 font-serif drop-shadow-[0_4px_12px_rgba(0,0,0,1)] max-w-[800px] mx-auto">
                            {subtitle}
                        </p>
                        <div className="max-w-[320px] mx-auto">
                            <button
                                onClick={() => openDonation()}
                                className="w-full bg-gold text-navy font-bold py-5 rounded-xl tracking-[2px] hover:bg-white hover:-translate-y-1 transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] active:scale-95 heading-font px-8 text-lg"
                            >
                                GIVE NOW
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="py-6">
                        <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h2 className="text-4xl font-bold text-gold mb-2 heading-font drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">THANK YOU</h2>
                        <p className="text-[16px] text-white font-medium tracking-wide">YOUR STORY OF FAITH HAS BEEN RECORDED</p>
                    </div>
                )}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.5rem] z-20">
                <div className="w-[1px] h-[50px] bg-gradient-to-b from-gold to-transparent"></div>
            </div>
        </header>
    );
}