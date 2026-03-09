import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-neutral flex flex-col pt-24">
            <Navbar alwaysShow={true} />

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-maroon-dark relative z-10">
                <h1 className="text-6xl md:text-8xl font-poiret font-light uppercase tracking-widest text-center mb-8">
                    Book a Table
                </h1>

                <p className="font-inter tracking-wide font-light text-2xl md:text-3xl uppercase st text-center max-w-lg mb-16 text-pink">
                    Step into the drama and depth of O KIA. We can&apos;t wait to host you.
                </p>

                <div className="flex flex-col md:flex-row gap-6 w-full max-w-md mx-auto">
                    {/* Primary Booking via Call */}
                    <a
                        href="tel:0700001880"
                        className="flex-1 text-center py-6 px-8 rounded-full bg-neutral text-maroon-dark font-poiret tracking-wider font-light text-2xl uppercase r hover:bg-neutral-dark transition-colors shadow-lg hover:shadow-xl"
                    >
                        Call Us
                    </a>

                    {/* Secondary Booking via WhatsApp */}
                    <a
                        href="https://wa.me/254700001880"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-6 px-8 rounded-full border border-pink text-pink font-poiret tracking-wider font-light text-2xl uppercase r hover:bg-neutral hover:text-maroon-dark transition-colors shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
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
