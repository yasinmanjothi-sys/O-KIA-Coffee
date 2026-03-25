'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const reviews = [
    { text: "The best Vietnamese coffee in Nairobi. A vibrant, theatrical experience from start to finish.", author: "Sarah L." },
    { text: "Absolutely stunning interior and the Bánh Mì is to die for. The perfect balance of bold flavors.", author: "James M." },
    { text: "I love the subtle street culture references and the masks. It feels like stepping into another world.", author: "Aisha K." },
    { text: "A sensory overload in the best way possible. The Pandan Waffle and Coconut Coffee are incredible.", author: "David T." },
];

export default function ReviewSlider() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-neutral text-maroon">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-32 left-6 md:left-12 z-20">
                    <h2 className="text-4xl md:text-6xl font-okia tracking-wider uppercase">
                        What people really think
                    </h2>
                </div>
                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 mt-20">
                    {reviews.map((review, idx) => {
                        const bgColors = ['bg-pink', 'bg-green', 'bg-caramel'];
                        const bgColor = bgColors[idx % bgColors.length];
                        const textColor = bgColor === 'bg-caramel' ? 'text-maroon' : 'text-neutral';

                        return (
                            <div key={idx} className={`w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 ${bgColor} ${textColor} rounded-[40px] p-12 border-sticker flex flex-col justify-between shadow-xl min-h-[350px] transition-transform hover:-translate-y-2`}>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-playwrite leading-relaxed italic opacity-95">
                                    "{review.text}"
                                </p>
                                <p className="font-okia tracking-widest text-lg md:text-xl uppercase mt-8 mix-blend-color-burn opacity-80">
                                    — {review.author}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
