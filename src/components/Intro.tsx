import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
    return (
        <section className="w-full text-[#6E0D31] py-32 px-6 flex flex-col items-center justify-center relative z-20 bg-[#F5F3E5] blend-overlay-container">
            {/* Halftone Overlay Background Space - Updated for Light BG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/halftone-placeholder.svg')]" />
            
            {/* Main Copy */}
            <div className="max-w-3xl text-center mx-auto mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poiret font-light leading-snug tracking-widest text-[#6E0D31] uppercase">
                    Experience O KIA COFFEE, where bold flavours meet theatrical Vietnamese coffee culture in a high-contrast atmosphere.
                </h2>
            </div>

            {/* Action Button */}
            <Link href="/reserve" className="inline-block px-8 py-3 rounded-full border-sticker text-[#6E0D31] font-inter tracking-wide font-light text-xs uppercase bg-[#FDFDFD] btn-interactive relative z-10">
                Book a table
            </Link>

            {/* Bottom Border Line to next section */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-[#E84596] opacity-30 relative z-10"></div>
        </section>
    );
}
