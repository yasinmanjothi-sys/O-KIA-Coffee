'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ alwaysShow = false }: { alwaysShow?: boolean }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(!alwaysShow);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (alwaysShow) return;

        // Wait until we scroll past 90vh (almost the entire Hero section)
        if (typeof window !== 'undefined') {
            const threshold = window.innerHeight * 0.9;
            if (latest > threshold) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        }
    });

    return (
        <>
            <motion.nav
                initial={{ opacity: alwaysShow ? 1 : 0, y: alwaysShow ? 0 : -20, pointerEvents: alwaysShow ? 'auto' : 'none' }}
                animate={{
                    opacity: hidden ? 0 : 1,
                    y: hidden ? -20 : 0,
                    pointerEvents: hidden ? 'none' : 'auto'
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`fixed top-7 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 ${alwaysShow ? 'text-[#FDFDFD] bg-[#6E0D31]/80 backdrop-blur-md shadow-sm border-b border-[#E84596]/30' : ''}`}
            >
                <div className="flex-1">
                    <Link href="/#menu" className="hidden md:inline-block px-6 py-2 rounded-full border-sticker text-neutral font-inter tracking-wide font-light text-xs uppercase bg-transparent btn-interactive">
                        Menu
                    </Link>
                </div>

                <div className="flex-1 text-center">
                    <Link href="/" className="text-neutral hover:text-[#9FCC45] transition-colors font-poiret font-light text-3xl tracking-widest uppercase">
                        O KIA COFFEE
                    </Link>
                </div>

                <div className="flex-1 flex justify-end items-center gap-4">
                    <Link href="/reserve" className="hidden md:inline-block px-6 py-2 rounded-full border-sticker text-neutral font-inter tracking-wide font-light text-xs uppercase bg-transparent btn-interactive">
                        Book a table
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden p-2 -mr-2 text-neutral"
                        aria-label="Open menu"
                    >
                        <Menu className={`w-6 h-6 ${alwaysShow ? '' : 'mix-blend-difference'}`} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-[#6E0D31] flex flex-col items-center justify-center p-6 text-[#FDFDFD]"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-pink"
                            aria-label="Close menu"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
                            <Link
                                href="/#menu"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center px-8 py-4 rounded-full border border-pink text-neutral font-inter tracking-wide font-light text-xl uppercase bg-transparent hover:bg-pink/10 transition-colors"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/reserve"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center px-8 py-4 rounded-full border border-pink text-neutral font-inter tracking-wide font-light text-xl uppercase bg-transparent hover:bg-pink/10 transition-colors"
                            >
                                Book a table
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
