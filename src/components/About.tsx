export default function About() {
    return (
        <section className="w-full text-[#FDFDFD] py-32 px-6 md:px-12 flex flex-col items-center justify-center relative z-20 bg-[#6E0D31] blend-overlay-container border-t border-[#E84596]/30">
            {/* Halftone Overlay Background Space */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('/halftone-placeholder.svg')]" />
            
            <div className="max-w-4xl text-center mx-auto relative z-10 flex flex-col space-y-10">
                <h3 className="text-3xl md:text-5xl font-poiret font-light tracking-widest uppercase text-[#9FCC45]">
                    The Theatre of Masks
                </h3>
                
                <div className="flex flex-col space-y-6">
                    <p className="text-xl md:text-2xl font-inter tracking-wide font-light leading-relaxed">
                        Vietnam’s coffee culture, seen through an artistic lens, resembles a living stage — where emotions of joy, anger, love, and sorrow unfold, expressed vividly like the faces of traditional masks.
                    </p>
                    <p className="text-xl md:text-2xl font-inter tracking-wide font-light leading-relaxed">
                        Therefore, the design concept of ÔKIA is envisioned as a stage — a vibrant, dynamic space that celebrates the diversity and liveliness of Vietnamese coffee culture. Human emotions are expressed through playful and distinctive masks, each carrying the spirit and cultural essence of Vietnam.
                    </p>
                </div>
            </div>
            
            {/* Bottom Border Line to next off-white section */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-[#E84596] opacity-30 relative z-10"></div>
        </section>
    );
}
