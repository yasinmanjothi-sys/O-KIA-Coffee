import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-maroon flex flex-col pt-24 blend-overlay-container">
            {/* Halftone Overlay Background Space */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply bg-[url('/halftone-placeholder.svg')]" />
            <Navbar alwaysShow={true} />

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-neutral relative z-10">
                <h1 className="text-6xl md:text-8xl font-poiret font-light uppercase tracking-widest text-[#9FCC45] text-center mb-8">
                    Book a Table
                </h1>

                <p className="font-inter tracking-wide font-light text-2xl md:text-3xl uppercase text-center max-w-lg mb-16 text-[#FFD695]">
                    Step into the drama and depth of O KIA. We can&apos;t wait to host you.
                </p>

                <div className="flex flex-col md:flex-row gap-6 w-full max-w-md mx-auto relative z-10">
                    {/* Primary Booking via Call */}
                    <a
                        href="tel:0700001880"
                        className="flex-1 text-center py-6 px-8 rounded-full border border-[#E84596] bg-[#6E0D31] text-[#FDFDFD] font-poiret tracking-wider font-light text-2xl uppercase hover:bg-[#E84596]/10 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(232,69,150,0.3)]"
                    >
                        Call Us
                    </a>

                    {/* Secondary Booking via WhatsApp */}
                    <a
                        href="https://wa.me/254700001880"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-6 px-8 rounded-full border border-[#E84596] text-[#E84596] font-poiret tracking-wider font-light text-2xl uppercase hover:bg-[#E84596]/10 hover:text-[#FDFDFD] transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(232,69,150,0.3)]"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Existing Footer automatically pulls in the Map & Contact Details */}
            <Footer />
        </main>
    );
}
