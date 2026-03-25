'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type MenuItem = {
    name: string;
    price?: string;
    description?: string;
};

type MenuSection = {
    title?: string;
    items: MenuItem[];
};

const drinksData: MenuSection[] = [
    {
        title: 'Classic Coffees',
        items: [
            { name: 'Cà Phê Sữa Đá', description: 'Vietnamese Iced Coffee with Condensed Milk', price: '450' },
            { name: 'Cà Phê Đen', description: 'Traditional Black Coffee (Hot or Iced)', price: '350' },
            { name: 'Cà Phê Trứng', description: 'Hanoi-style Egg Coffee', price: '500' },
            { name: 'Bạc Xỉu', description: 'White Coffee - Extra Condensed Milk', price: '450' },
        ],
    },
    {
        title: 'Specialties',
        items: [
            { name: 'Coconut Coffee Slush', description: 'Cà Phê Cốt Dừa', price: '600' },
            { name: 'Salted Cream Coffee', description: 'Cà Phê Kem Muối', price: '550' },
            { name: 'Pandan Latte', description: 'Espresso with Pandan Extract & Milk', price: '550' },
            { name: 'Matcha Espresso Fusion', price: '600' },
        ],
    },
    {
        title: 'Teas & Refreshments',
        items: [
            { name: 'Trà Đá', description: 'Iced Jasmine Tea (Bottomless)', price: '150' },
            { name: 'Peach & Lemongrass Tea', description: 'Trà Đào Cam Sả', price: '450' },
            { name: 'Kumquat Iced Tea', description: 'Trà Tắc', price: '400' },
            { name: 'Lotus Silk Tea', description: 'Trà Sen', price: '450' },
            { name: 'Fresh Sugarcane Juice', description: 'Nước Mía', price: '350' },
        ],
    }
];

const dessertsData: MenuSection[] = [
    {
        title: 'Sweets',
        items: [
            { name: 'Flan (Bánh Flan)', description: 'Caramel custard with a touch of coffee icing.', price: '350' },
            { name: 'Pandan Waffle', description: 'Crispy green waffle imbued with coconut and pandan extract.', price: '400' },
            { name: 'Chè Ba Màu', description: 'Three-color dessert with beans, jelly, and coconut milk.', price: '450' },
            { name: 'Cassava Cake', description: 'Bánh Khoai Mì Nướng', price: '350' },
        ],
    }
];

const foodData: MenuSection[] = [
    {
        title: 'Bánh Mì (Vietnamese Baguettes)',
        items: [
            { name: 'Classic Cold Cut', description: 'Bánh Mì Thịt Nguội: Pâté, chả lụa, jambon, pickled daikon.', price: '850' },
            { name: 'Grilled Pork', description: 'Bánh Mì Thịt Nướng: Lemongrass marinated pork with fresh herbs.', price: '900' },
            { name: 'Lemongrass Chicken', description: 'Bánh Mì Gà Nướng: Char-grilled chicken thigh, spicy mayo.', price: '900' },
            { name: 'Crispy Tofu (V)', description: 'Bánh Mì Chay: Fried lemongrass tofu, mushroom pâté, soy-glaze.', price: '800' },
        ],
    },
    {
        title: 'Bảo (Steamed Buns)',
        items: [
            { name: 'BBQ Pork Bao', description: 'Slow-roasted char siu pork with cucumber and hoisin.', price: '750' },
            { name: 'Crispy Chicken Bao', description: 'Fried chicken, sriracha mayo, pickled cabbage.', price: '750' },
            { name: 'Mushroom Tempura Bao (V)', description: 'Oyster mushroom tempura with scallion sauce.', price: '650' },
        ]
    },
    {
        title: 'Savory Bites',
        items: [
            { name: 'Patê Sô', description: 'Vietnamese inspired flaky meat pie with pork/chicken filling.', price: '450' },
            { name: 'Summer Rolls', description: 'Gỏi Cuốn: Prawn and pork with peanut dipping sauce (2pcs).', price: '600' },
            { name: 'Fried Spring Rolls', description: 'Chả Giò: Crispy fried pork and wood-ear mushroom rolls.', price: '600' },
        ]
    }
];

export default function MenuGrid() {
    const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'desserts'>('food');
    const [activeSubTabIndex, setActiveSubTabIndex] = useState<number>(0);

    let activeData = foodData;
    if (activeTab === 'drinks') activeData = drinksData;
    if (activeTab === 'desserts') activeData = dessertsData;

    const handleTabChange = (tab: 'food' | 'drinks' | 'desserts') => {
        setActiveTab(tab);
        setActiveSubTabIndex(0);
    };

    const activeSections = [activeData[activeSubTabIndex] || activeData[0]];

    return (
        <section id="menu" className="w-full bg-[#F5F3E5] text-[#6E0D31] py-24 px-6 md:px-12 relative z-20 min-h-screen overflow-hidden blend-overlay-container">
            {/* Halftone Overlay Background Space - Updated for Light BG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/halftone-placeholder.svg')]" />
            
            {/* Interactive Decorative Floating Masks (Stickers) */}
            <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute top-[10%] left-[-2%] w-32 h-32 md:w-64 md:h-64 opacity-80 cursor-pointer z-10 transition-shadow hover:drop-shadow-xl"
            >
                <Image src="/all masks /OKIA-Mask-All-24-11-25-05.svg" alt="Interactive Sticker" fill className="object-contain" />
            </motion.div>
            
            <motion.div 
                whileHover={{ scale: 1.15, rotate: 15 }}
                className="absolute top-[35%] right-[-5%] w-40 h-40 md:w-80 md:h-80 opacity-80 cursor-pointer z-10 transition-shadow hover:drop-shadow-xl"
            >
                <Image src="/all masks /Hy (joy) svg.svg" alt="Interactive Sticker" fill className="object-contain" />
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="absolute bottom-[20%] left-[2%] w-36 h-36 md:w-72 md:h-72 opacity-80 cursor-pointer z-10 transition-shadow hover:drop-shadow-xl"
            >
                <Image src="/all masks /Ai (love).svg" alt="Interactive Sticker" fill className="object-contain" />
            </motion.div>
            
            <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute bottom-[5%] right-[10%] w-24 h-24 md:w-48 md:h-48 opacity-80 cursor-pointer z-10 transition-shadow hover:drop-shadow-xl"
            >
                <Image src="/all masks /OKIA-Mask-All-24-11-25-10.svg" alt="Interactive Sticker" fill className="object-contain" />
            </motion.div>

            <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">

                {/* Main Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 font-poiret tracking-wider font-light text-3xl md:text-5xl lg:text-6xl text-[#E84596]">
                    <button
                        onClick={() => handleTabChange('food')}
                        className={`transition-opacity ${activeTab === 'food' ? 'opacity-100 text-[#6E0D31]' : 'opacity-40 hover:opacity-70'}`}
                    >
                        FOOD
                    </button>
                    <button
                        onClick={() => handleTabChange('drinks')}
                        className={`transition-opacity ${activeTab === 'drinks' ? 'opacity-100 text-[#6E0D31]' : 'opacity-40 hover:opacity-70'}`}
                    >
                        DRINKS
                    </button>
                    <button
                        onClick={() => handleTabChange('desserts')}
                        className={`transition-opacity ${activeTab === 'desserts' ? 'opacity-100 text-[#6E0D31]' : 'opacity-40 hover:opacity-70'}`}
                    >
                        DESSERTS
                    </button>
                </div>

                {/* Sub-Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-8 lg:gap-y-4 mb-16 font-poiret tracking-wider font-light text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-[#6E0D31]">
                    {activeData.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveSubTabIndex(idx)}
                            className={`transition-all ${activeSubTabIndex === idx ? 'opacity-100 border-b-2 border-[#E84596]' : 'opacity-40 hover:opacity-70'}`}
                        >
                            {section.title?.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Optional Addons note */}
                {activeTab === 'food' && (
                    <div className="mb-12 w-full text-center font-playwrite text-lg md:text-xl text-[#FFD695] drop-shadow-sm opacity-90 tracking-wide">
                        *all additional add-ons are a flat rate ksh150
                    </div>
                )}

                {/* Section Divider */}
                <div className="w-full max-w-sm h-px bg-[#E84596] mb-12 opacity-30"></div>

                {/* Menu Content Grid */}
                <div className="w-full max-w-5xl mx-auto font-inter font-light">
                    {activeSections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="mb-12 w-full">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                                {section.items.map((item, itemIdx) => {
                                    const bgColors = ['bg-pink', 'bg-green', 'bg-caramel'];
                                    const bgColor = bgColors[itemIdx % bgColors.length];
                                    return (
                                        <li key={itemIdx} className={`flex flex-col text-center p-8 rounded-[40px] border-sticker btn-interactive relative overflow-hidden ${bgColor} shadow-sm group`}>
                                            <div className="flex justify-center flex-1 items-center text-xl md:text-2xl font-okia tracking-wide leading-tight w-full mx-auto z-10">
                                                <span>{item.name}</span>
                                            </div>
                                            {item.description && (
                                                <p className="text-sm md:text-base opacity-90 italic mt-3 mb-2 leading-snug w-full font-playwrite z-10">
                                                    {item.description}
                                                </p>
                                            )}
                                            {item.price && (
                                                <div className="mt-auto pt-4 text-center font-bold tracking-wider text-xl z-10 border-t border-maroon/20 group-hover:border-neutral/30">
                                                    {item.price}
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Copy */}
                {activeTab === 'desserts' && (
                    <div className="mt-16 text-center font-inter tracking-wider font-light text-xs md:text-sm uppercase opacity-60 text-[#1C5028]">
                        <p>V-VEGAN, N-CONTAINS NUTS, GF-GLUTEN FREE, VO-VEGAN OPTION AVAILABLE</p>
                    </div>
                )}

                <div className="mt-20 w-full max-w-sm h-px bg-[#E84596] opacity-30"></div>

                <div className="mt-12 w-full flex justify-center py-8">
                    <span className="font-poiret tracking-widest text-3xl md:text-4xl lowercase opacity-90 text-[#6E0D31]">
                        o kia coffee cafe
                    </span>
                </div>
            </div>
        </section>
    );
}
