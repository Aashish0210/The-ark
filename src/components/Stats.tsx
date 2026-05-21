interface Stat {
    id: number;
    value: string;
    label: string;
}

export default function Stats({ stats }: { stats: Stat[] }) {
    return (
        <section id="about" className="py-20 border-t border-white/5 bg-gradient-to-t from-navy to-bg-base">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-[3rem] leading-[1.1] mb-4 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">WHAT YOUR <span className="text-gold">GIFT BUILDS</span></h2>
                <p className="text-text-muted text-[16px] max-w-[600px] mx-auto mb-4">Every dollar is a plank, every frame a builder. Together we are creating a sanctuary that will stand for generations.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.id} className="group relative bg-black/20 p-6 border border-navy-border rounded-xl flex flex-col justify-center min-h-[200px] transition-all duration-500 hover:border-gold/30 hover:bg-black/40 hover:-translate-y-1">
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                            <div className="font-body text-[0.95rem] tracking-[0.1em] mb-0 leading-relaxed relative z-10 transition-colors duration-300 text-text-muted group-hover:text-white">
                                {stat.value}
                            </div>

                            {stat.label && (
                                <div className="text-[10px] tracking-[2px] text-text-muted relative z-10 font-bold">
                                    {stat.label}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}