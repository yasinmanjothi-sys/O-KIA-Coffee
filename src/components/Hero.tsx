'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const masks = [
    { src: '/all masks /Hy (joy) svg.svg', delay: 0 },
    { src: '/all masks /No (anger).svg', delay: 0.15 },
    { src: '/all masks /Ai (love).svg', delay: 0.3 },
    { src: '/all masks /O (sadness).svg', delay: 0.45 },
    { src: '/all masks /OKIA-Mask-All-24-11-25-05.svg', delay: 0.6 },
];

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh] bg-[#6E0D31] text-[#FDFDFD] overflow-hidden">
            {/* Full-width video pre-loader background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            >
                <source src="/Pre Loader Video.mp4" type="video/mp4" />
            </video>

            <div className="relative w-full h-full flex flex-col items-center justify-start pt-32 z-10">
                {/* Logo Illustration */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full px-4 flex justify-center pointer-events-none">
                    <div className="w-[85vw] max-w-[350px] sm:max-w-[450px] aspect-[4/3] md:w-[35rem] md:h-[28rem] lg:w-[45rem] lg:h-[35rem] xl:w-[50rem] xl:h-[40rem] relative flex items-center justify-center pointer-events-auto">
                        <Image
                            src="/LOGO_OKIA.svg?v=color_update"
                            alt="O KIA Coffee Restaurant Logo"
                            fill
                            className="object-contain brightness-0 invert drop-shadow-[0_0_12px_rgba(232,69,150,0.3)]"
                            priority
                            unoptimized={true}
                        />
                    </div>
                </div>

                {/* Bottom Mask Arches */}
                <div className="absolute bottom-0 left-0 w-full flex justify-around items-end z-10 overflow-hidden px-1 md:px-4">
                    {masks.map((mask, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: "150%" }}
                            animate={{ y: "50%" }} 
                            transition={{ duration: 1.4, delay: mask.delay, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[18%] md:w-[20%] max-w-[300px] aspect-square pointer-events-none"
                        >
                            <div className="absolute inset-0 bg-[#E84596] rounded-full border-[3px] md:border-[6px] border-[#6E0D31] flex items-center justify-center pointer-events-auto shadow-[inset_0_10px_25px_rgba(0,0,0,0.15)]">
                                <div className="relative w-[85%] h-[85%]">
                                    <Image
                                        src={mask.src}
                                        alt={`Theatrical Mask ${idx + 1}`}
                                        fill
                                        className="object-contain drop-shadow-md"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
