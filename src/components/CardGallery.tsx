"use client";

import React, { useRef } from "react";

const cultures = [
  {
    id: 1,
    name: "Inca",
    myth: "Pachachama",
    century: "15th Century CE",
    img: "/inca.png",
  },
  {
    id: 2,
    name: "Aztec",
    myth: "The Flood of Coxcox",
    century: "14th Century CE",
    img: "/aztec.png",
  },
  {
    id: 3,
    name: "Norse",
    myth: "The Fall of Ymir",
    century: "8th Century CE",
    img: "/norse.png",
  },
  {
    id: 4,
    name: "Hopi",
    myth: "Tawa's Flood",
    century: "7th Century CE",
    img: "/hopi.png",
  },
  {
    id: 5,
    name: "Hawaiian",
    myth: "kai-a-ka-hina-iii",
    century: "1st Century CE",
    img: "/hawaiian.png",
  },
  {
    id: 6,
    name: "Yoruba",
    myth: "The Flood of Ife",
    century: "8th Century BCE",
    img: "/yoruba_flood.png",
  },
  {
    id: 7,
    name: "Greek",
    myth: "Deucalion's Flood",
    century: "9th Century BCE",
    img: "/greek_flood.png",
  },
  {
    id: 8,
    name: "Judaism",
    myth: "Noah's Ark",
    century: "10th Century BCE",
    img: "/judaism_flood.png",
  },
  {
    id: 9,
    name: "Babylonian",
    myth: "Epic of Atrahasis",
    century: "19th Century BCE",
    img: "/babylonian_flood.png",
  },
  {
    id: 10,
    name: "Hindu",
    myth: "Manu and the Fish",
    century: "2nd Millennium BCE",
    img: "/hindu_flood.png",
  },
  {
    id: 11,
    name: "Chinese",
    myth: "Kun and the Flood",
    century: "3rd Millennium BCE",
    img: "/chinese_flood.png",
  },
  {
    id: 12,
    name: "Egyptian",
    myth: "Going Forth by Day",
    century: "4th Millennium BCE",
    img: "/egyptian_flood.png",
  },
  {
    id: 13,
    name: "Sumerian",
    myth: "Ziusudra / Atrahasis",
    century: "5th Millennium BCE",
    img: "/sumerian_flood.png",
  },
  {
    id: 14,
    name: "Aboriginal",
    myth: "The Rainmaker",
    century: "50,000 BCE",
    img: "/aboriginal_flood.png",
  },
  {
    id: 15,
    name: "Andamanese",
    myth: "Pûlugas Punishment",
    century: "60,000 BCE",
    img: "/andamanese_flood.png",
  },
];

export default function CardGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="ancient-legends"
      className="py-16 relative border-t border-white/5 bg-navy"
    >
      {/* Water texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10 group/gallery px-6">
        {/* Mobile scroll arrows */}
        <button
          onClick={() => scroll("left")}
          className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-gold p-3 rounded-r-xl border border-gold/40 border-l-0 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-gold p-3 rounded-l-xl border border-gold/40 border-r-0 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-5 md:overflow-visible"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cultures.map((culture) => (
            <div
              key={culture.id}
              className="group cursor-pointer flex flex-col flex-shrink-0 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 w-[85vw] sm:w-[320px] md:w-auto md:max-w-none snap-start"
              style={{
                border: "2px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={culture.img}
                  alt={culture.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Panel */}
              <div
                className="px-4 py-4 flex flex-col items-center text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,65,100,0.92) 0%, rgba(8,40,65,0.97) 100%)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3
                  className="text-white text-xl mb-1 tracking-wide"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 700,
                  }}
                >
                  {/* First letter larger, rest normal */}
                  <span style={{ fontSize: "1.3em" }}>{culture.name[0]}</span>
                  <span style={{ fontSize: "1em" }}>
                    {culture.name.slice(1).toUpperCase()}
                  </span>
                </h3>

                <p className="text-white text-sm mb-2 font-sans">
                  {culture.myth}
                </p>

                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "#e8a020" }}
                >
                  Culture Origin
                </p>

                <p className="text-white text-sm font-sans">
                  {culture.century}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
