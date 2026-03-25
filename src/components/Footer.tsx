import Image from 'next/image';

// Mosaic tile layout: 12-column CSS grid with alternating maroon/pink/green cells
const tiles = [
    // Row 1
    { col: 'col-span-3', bg: 'bg-pink/60' },
    { col: 'col-span-4', bg: 'bg-maroon/80' },
    { col: 'col-span-2', bg: 'bg-green/50' },
    { col: 'col-span-3', bg: 'bg-pink/35' },
    // Row 2
    { col: 'col-span-4', bg: 'bg-green/60' },
    { col: 'col-span-3', bg: 'bg-maroon/60' },
    { col: 'col-span-5', bg: 'bg-pink/45' },
    // Row 3
    { col: 'col-span-2', bg: 'bg-maroon/90' },
    { col: 'col-span-5', bg: 'bg-green/40' },
    { col: 'col-span-3', bg: 'bg-pink/55' },
    { col: 'col-span-2', bg: 'bg-maroon/50' },
    // Row 4
    { col: 'col-span-5', bg: 'bg-pink/50' },
    { col: 'col-span-4', bg: 'bg-green/65' },
    { col: 'col-span-3', bg: 'bg-maroon/70' },
    // Row 5
    { col: 'col-span-3', bg: 'bg-green/45' },
    { col: 'col-span-2', bg: 'bg-pink/60' },
    { col: 'col-span-4', bg: 'bg-maroon/55' },
    { col: 'col-span-3', bg: 'bg-green/55' },
];

export default function Footer() {
    return (
        <footer className="w-full relative z-20 overflow-hidden">

            {/* Mosaic tile background */}
            <div
                className="absolute inset-0 grid grid-cols-12 grid-rows-5"
                style={{ backgroundColor: '#3a0a1c' }}
                aria-hidden="true"
            >
                {tiles.map((tile, i) => (
                    <div key={i} className={`${tile.col} ${tile.bg}`} />
                ))}
            </div>

            {/* Content layer: solid container on top of mosaic */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">

                {/* Solid card wrapping all content */}
                <div className="bg-[#6E0D31]/95 border border-[#E84596]/30 backdrop-blur-md rounded-[3rem] px-8 py-12 md:px-12 mb-0 shadow-2xl">

                    {/* Top section: Find Us */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

                        {/* Left: Text Details */}
                        <div className="flex flex-col space-y-8 text-[#FDFDFD]">
                            <h2 className="text-4xl md:text-5xl font-poiret font-light uppercase tracking-widest text-[#9FCC45]">
                                Find Us
                            </h2>

                            <div className="font-inter tracking-wide font-light text-lg uppercase leading-relaxed">
                                <p className="font-playwrite tracking-widest text-[#FFD695] mb-2 opacity-90 text-sm">Location</p>
                                <p>Peponi Gardens, 7, H3</p>
                                <p>Nairobi 00100</p>
                            </div>

                            <div className="font-inter tracking-wide font-light text-lg uppercase leading-relaxed">
                                <p className="font-playwrite tracking-widest text-[#FFD695] mb-2 opacity-90 text-sm">Hours</p>
                                <p>Monday - Sunday</p>
                                <p>10:00 - 22:00</p>
                            </div>

                            <div className="font-inter tracking-wide font-light text-lg uppercase leading-relaxed">
                                <p className="font-playwrite tracking-widest text-[#FFD695] mb-2 opacity-90 text-sm">Contact</p>
                                <p>+254 700 000 000</p>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <a
                            href="https://www.google.com/maps/place/O KIA COFFEE+(A+Bit+Of+Everything)/@-1.2498738,36.8036565,18.73z/data=!4m6!3m5!1s0x182f170053d04993:0x9bfa186433e6255b!8m2!3d-1.2501152!4d36.8040698!16s%2Fg%2F11yryyxqt2?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-xl border border-[#E84596] hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer block group"
                        >
                            <Image
                                src="/MAP.png"
                                alt="O KIA COFFEE Location Map"
                                fill
                                className="object-cover group-hover:opacity-90 transition-opacity"
                            />
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="w-full flex justify-center pb-8 border-t border-[#E84596]/30 pt-10">
                        <Image
                            src="/LOGO_OKIA.svg?v=color_update"
                            alt="O KIA COFFEE Logo"
                            width={400}
                            height={150}
                            className="w-[60vw] max-w-[320px] brightness-0 invert drop-shadow-[0_0_8px_rgba(232,69,150,0.4)]"
                        />
                    </div>

                    {/* Copyright bar */}
                    <div className="flex items-center justify-center md:justify-between pt-4">
                        <div className="text-[#FDFDFD] font-inter tracking-wide font-light text-xs uppercase opacity-70">
                            © O KIA COFFEE 2026
                        </div>
                        <div className="hidden md:flex space-x-6 text-[#FDFDFD] font-inter tracking-wide font-light text-xs uppercase opacity-70">
                            <a href="https://www.instagram.com/okia.kenya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9FCC45] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
