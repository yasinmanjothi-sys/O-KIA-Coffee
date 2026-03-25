'use client';
import { motion } from 'framer-motion';

export default function StickyMarquee() {
    const textItems = Array.from({ length: 15 }, (_, i) => 
        i % 2 === 0 ? "Ô kìa" : "Oh, look"
    );

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-pink text-maroon overflow-hidden py-1.5 border-b-[2px] border-maroon z-[100] pointer-events-none">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {/* We render two sets of the items to ensure seamless looping */}
                {[...textItems, ...textItems].map((text, idx) => (
                    <span key={idx} className="font-okia text-sm md:text-base uppercase tracking-[0.15em] mx-6">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
