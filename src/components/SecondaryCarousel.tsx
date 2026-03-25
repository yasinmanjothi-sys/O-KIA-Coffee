'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SecondaryCarousel() {
    // In reality, we'd use next/image with actual src paths here.
    const images = [
        { id: 1, src: '/images/Screenshot 2026-03-06 at 15.14.41.png', alt: 'O KIA Coffee Cafe Experience 1' },
        { id: 2, src: '/images/Screenshot 2026-03-06 at 15.15.10.png', alt: 'O KIA Coffee Cafe Experience 2' },
        { id: 3, src: '/images/Screenshot 2026-03-06 at 15.18.27.png', alt: 'O KIA Coffee Cafe Experience 3' }
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
        <section className="w-full text-neutral py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20 bg-maroon blend-overlay-container">
            {/* Halftone Overlay Background Space */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply bg-[url('/halftone-placeholder.svg')]" />
            
            {/* Text Column */}
            <div className="relative flex flex-col justify-center w-full h-full min-h-[400px] lg:order-last z-10">

                <p className="text-xl md:text-2xl font-inter tracking-wide font-light leading-snug text-[#9FCC45] uppercase max-w-xs md:max-w-sm relative mt-12 lg:mt-0">
                    We believe great coffee and street food tell a story. From the slow drip of our phin filters to the satisfying crunch of our warm baguettes, every element is passionately crafted from scratch.
                </p>

            </div>

            {/* Carousel Column */}
            <div className="flex flex-col items-end lg:order-first">

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
                                    x: isAnimatingOut ? -150 : 0, // Swipes LEFT
                                    rotate: isAnimatingOut ? -10 : index === 0 ? 0 : index % 2 === 0 ? -4 : 4,
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
                        className="w-14 h-14 rounded-full border border-[#E84596] text-[#FDFDFD] flex items-center justify-center bg-transparent hover:bg-[#E84596]/10 transition-colors"
                    >
                        <ChevronLeft size={28} strokeWidth={1} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-14 h-14 rounded-full border border-[#E84596] text-[#FDFDFD] flex items-center justify-center bg-transparent hover:bg-[#E84596]/10 transition-colors"
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
