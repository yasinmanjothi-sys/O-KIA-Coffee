'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function PrimaryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const mockupImages = [
        { id: 1, src: '/images/Screenshot 2026-03-06 at 15.12.15.png', alt: 'O KIA Coffee Restaurant Interior 1' },
        { id: 2, src: '/images/Screenshot 2026-03-06 at 15.12.38.png', alt: 'O KIA Coffee Restaurant Interior 2' },
        { id: 3, src: '/images/Screenshot 2026-03-06 at 15.13.12.png', alt: 'O KIA Coffee Restaurant Interior 3' }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % mockupImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + mockupImages.length) % mockupImages.length);
    };

    return (
        <section className="relative w-full overflow-hidden pb-12 pt-12 flex flex-col items-center bg-[#F5F3E5]">
            {/* Top Background Peek (Maroon) */}
            <div className="absolute top-0 left-0 w-full h-[30%] sm:h-[40%] bg-[#6E0D31] z-0"></div>

            {/* Static Image Carousel block overlapping the boundary */}
            <div className="relative z-10 w-[92vw] max-w-7xl h-[60vh] md:h-[75vh] rounded-[3rem] md:rounded-[4rem] lg:rounded-full overflow-hidden shadow-2xl border border-[#E84596]/30">

                {/* Images Container */}
                <div className="w-full h-full relative">
                    {mockupImages.map((img, idx) => (
                        <div
                            key={img.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel Navigation Buttons outside the block */}
            <div className="relative z-10 w-[92vw] max-w-7xl flex justify-end mt-6 space-x-4 pr-4">
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
        </section>
    );
}
