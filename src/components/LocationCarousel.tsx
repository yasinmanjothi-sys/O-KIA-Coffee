'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LocationCarousel() {
    const images = [
        { id: 1, src: '/images/Screenshot 2026-03-06 at 15.13.33.png', alt: 'O KIA Coffee Cafe Details 1' },
        { id: 2, src: '/images/Screenshot 2026-03-06 at 15.14.00.png', alt: 'O KIA Coffee Cafe Details 2' },
        { id: 3, src: '/images/Screenshot 2026-03-06 at 15.14.22.png', alt: 'O KIA Coffee Cafe Details 3' }
    ];

    const [cards, setCards] = useState(images);
    const [animatingOutId, setAnimatingOutId] = useState<number | null>(null);

    const handleNext = () => {
        if (animatingOutId !== null) return;
        const topId = cards[0].id;
        setAnimatingOutId(topId);

        setTimeout(() => {
            setCards((prev) => {
                const next = [...prev];
                const top = next.shift();
                if (top) next.push(top);
                return next;
            });
            setAnimatingOutId(null);
        }, 250);
    };

    const handlePrev = () => {
        if (animatingOutId !== null) return;
        setCards((prev) => {
            const next = [...prev];
            const bottom = next.pop();
            if (bottom) next.unshift(bottom);
            return next;
        });
    };

    return (
        <section className="w-full text-[#6E0D31] py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20 bg-[#F5F3E5] blend-overlay-container">
            {/* Halftone Overlay Background Space - Updated for Light BG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/halftone-placeholder.svg')]" />
            
            {/* Text & Illustration Column */}
            <div className="relative flex flex-col justify-center w-full h-full min-h-[400px] z-10">

                <p className="text-xl md:text-2xl font-inter tracking-wide font-light leading-snug text-[#E84596] uppercase max-w-xs md:max-w-sm relative mt-12 lg:mt-0">
                    Experience the vibrant heart of Vietnamese cafe culture. Dive into our signature Cà Phê Sữa Đá, bold robusta brews, and authentic Bánh Mì—crafted to awaken the senses.
                </p>

            </div>

            {/* Carousel Column */}
            <div className="flex flex-col items-end">

                {/* Carousel Container */}
                <div className="relative w-full aspect-[4/3] mb-6 perspective-[1000px]">
                    {cards.map((img, index) => {
                        const isAnimatingOut = animatingOutId === img.id;
                        return (
                            <motion.div
                                key={img.id}
                                animate={{
                                    scale: isAnimatingOut ? 1.05 : 1 - index * 0.05,
                                    y: isAnimatingOut ? -20 : index * 20,
                                    x: isAnimatingOut ? 150 : 0,
                                    rotate: isAnimatingOut ? 10 : index === 0 ? 0 : index % 2 === 0 ? 4 : -4,
                                    zIndex: isAnimatingOut ? images.length + 1 : images.length - index,
                                    opacity: isAnimatingOut ? 0 : 1 - index * 0.15,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] md:rounded-[4rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border border-[#E84596]/40"
                                style={{ transformOrigin: 'top center' }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Carousel Controls */}
                <div className="flex space-x-4">
                    <button
                        onClick={handlePrev}
                        className="w-14 h-14 rounded-full border border-[#E84596] text-[#6E0D31] flex items-center justify-center bg-transparent hover:bg-[#E84596]/10 transition-colors"
                    >
                        <ChevronLeft size={28} strokeWidth={1} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-14 h-14 rounded-full border border-[#E84596] text-[#6E0D31] flex items-center justify-center bg-transparent hover:bg-[#E84596]/10 transition-colors"
                    >
                        <ChevronRight size={28} strokeWidth={1} />
                    </button>
                </div>
            </div>

            {/* Bottom Border Line */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-[#E84596] opacity-50"></div>
        </section>
    );
}
