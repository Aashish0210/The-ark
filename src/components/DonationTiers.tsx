"use client";

import { useState } from 'react';
import { useNotifications } from './NotificationProvider';
import { useDonation } from './DonationProvider';

interface Tier {
    id: number;
    icon: string;
    name: string;
    price: number;
    available: number;
    description: string;
    features: string;
    image?: string;
    isPopular: boolean;
}

export default function DonationTiers({ tiers }: { tiers: Tier[] }) {
    const { openDonation } = useDonation();
    const { triggerDonation } = useNotifications();
    const [customAmount, setCustomAmount] = useState<string>('');
    const [loading, setLoading] = useState<number | string | null>(null);

    const handleDonate = (amount: number, id: number | string) => {
        if (amount <= 0) return;
        openDonation(amount);
    };

    return (
        <section id="donate" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <span className="text-gold tracking-[2px] text-sm font-semibold uppercase block mb-6 heading-font">CHOOSE YOUR PLANK</span>
                <h2 className="text-[3rem] leading-[1.1] mb-4 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">EVERY GIFT BUILDS<br /><span className="text-gold">SOMETHING ETERNAL</span></h2>
                <p className="text-text-muted text-[16px] max-w-[600px] mx-auto mb-4">Select the level of giving that speaks to your heart. Each tier places another piece of the structure into place.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                    {tiers.map((tier) => {
                        let features: string[] = [];
                        try {
                            const parsed = JSON.parse(tier.features || '[]');
                            features = Array.isArray(parsed) ? parsed : [];
                        } catch (e) {
                            features = [];
                        }

                        const isCurrentlyLoading = loading === tier.id;

                        return (
                            <div 
                                key={tier.id} 
                                onClick={() => handleDonate(tier.price, tier.id)}
                                className="cursor-pointer relative flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 rounded-xl overflow-hidden border-[12px] border-[#111] bg-[#d3c2a6] text-black shadow-xl h-full"
                                style={{
                                    boxShadow: "inset 0 0 0 1px #fff, inset 0 0 0 2px #000"
                                }}
                            >
                                {tier.isPopular && <div className="absolute top-0 right-0 z-20 bg-gold text-navy font-bold text-[0.6rem] px-2 py-0.5 tracking-wider rounded-bl border-l border-b border-[#111]">MOST POPULAR</div>}

                                <div className="p-1.5 flex flex-col flex-grow relative z-10">
                                    {/* Title Bar */}
                                    <div className="flex justify-between items-center bg-gradient-to-r from-[#d9d9d9] via-[#f2f2f2] to-[#d9d9d9] border-[1.5px] border-black rounded-[2px] px-2 py-1 mb-1.5 shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]">
                                        <span className="font-bold text-black text-sm font-serif tracking-tight">{tier.name}</span>
                                        <div className="flex items-center">
                                            <div className="bg-[#cacaca] border border-black rounded-full h-5 w-5 flex items-center justify-center font-bold text-black text-[10px] shadow-[inset_1px_1px_2px_#fff,-1px_-1px_2px_rgba(0,0,0,0.5)]">
                                                ${tier.price}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Box */}
                                    <div className="border-[2px] border-black bg-black mb-1.5 shadow-[0_0_2px_rgba(0,0,0,0.5)] relative">
                                        <div className="border border-white/40 h-44 relative w-full overflow-hidden">
                                            {tier.image ? (
                                                <img 
                                                    src={tier.image} 
                                                    alt={tier.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-navy flex items-center justify-center text-4xl">
                                                    {tier.icon}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Type Line */}
                                    <div className="flex justify-between items-center bg-gradient-to-r from-[#d9d9d9] via-[#f2f2f2] to-[#d9d9d9] border-[1.5px] border-black rounded-[2px] px-2 py-0.5 mb-1.5 shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]">
                                        <span className="font-bold text-black text-[11px] font-serif">Donation Tier — {tier.name}</span>
                                        <span className="font-bold text-black text-[11px] font-serif">{tier.icon}</span>
                                    </div>

                                    {/* Text Box */}
                                    <div className="flex-grow bg-gradient-to-b from-[#e8e2d2] to-[#dcd3bd] border-[2px] border-black p-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.2)] text-black font-serif text-[12px] leading-snug relative flex flex-col">
                                        <div className="absolute inset-0 border border-white/50 m-[1px]"></div>
                                        
                                        <div className="relative z-10 flex-grow">
                                            <p className="mb-2 italic">{tier.description}</p>
                                            
                                            <ul className="list-none space-y-1 mt-2 border-t border-black/10 pt-2">
                                                {features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="relative pl-3 before:content-['•'] before:absolute before:left-0 font-medium text-[11px] leading-tight">
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="relative z-10 mt-3 border-t border-black/20 pt-1 flex justify-between items-end">
                                            <span className="italic text-[9px] text-black/70">Tap to add this piece to the structure.</span>
                                            <span className="font-bold text-[10px] bg-[#d3c2a6] border border-black px-1.5 rounded shadow-sm">{tier.available} / {tier.available}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Amount */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-navy-light p-8 rounded-lg border border-navy-border max-w-[700px] mx-auto shadow-2xl">
                    <span className="heading-font tracking-widest text-gold text-sm uppercase">Custom Amount</span>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-white heading-font text-2xl font-bold">$</span>
                        <input
                            type="number"
                            placeholder="0"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="bg-black/40 border border-navy-border rounded-lg py-4 pl-10 pr-4 text-white heading-font text-2xl w-[180px] outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        />
                    </div>
                    <button
                        onClick={() => handleDonate(Number(customAmount), 'custom')}
                        className="min-w-[180px] bg-gold text-navy font-black py-4 rounded-xl tracking-[2px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:scale-95 heading-font px-8 text-sm"
                    >
                        GIVE NOW →
                    </button>
                </div>
            </div>
        </section>
    );
}
