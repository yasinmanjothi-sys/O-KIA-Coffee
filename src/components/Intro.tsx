import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
    return (
        <section className="w-full text-maroon-dark py-32 px-6 flex flex-col items-center justify-center relative z-20">

            {/* Main Copy */}
            <div className="max-w-3xl text-center mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poiret font-light leading-snug tracking-widest text-maroon-dark uppercase">
                    Experience O KIA COFFEE, where bold flavours meet theatrical Vietnamese coffee culture in a high-contrast atmosphere.
                </h2>
            </div>

            {/* Action Button */}
            <Link href="/reserve" className="inline-block px-8 py-3 rounded-full border border-pink text-maroon-dark font-inter tracking-wide font-light text-xs st uppercase bg-neutral pill-shadow text-center">
                Book a table
            </Link>

            {/* Bottom Border Line to next section */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-pink"></div>
        </section>
    );
}
