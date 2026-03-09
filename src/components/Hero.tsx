import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh] bg-maroon text-neutral overflow-hidden">
            <div className="relative w-full h-full flex flex-col items-center justify-start pt-32">
                {/* Logo Illustration */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 flex justify-center pointer-events-none">
                    <div className="w-[85vw] max-w-[350px] sm:max-w-[450px] aspect-[4/3] md:w-[35rem] md:h-[28rem] lg:w-[45rem] lg:h-[35rem] xl:w-[50rem] xl:h-[40rem] relative flex items-center justify-center pointer-events-auto">
                        <Image
                            src="/LOGO_OKIA.svg?v=color_update"
                            alt="O KIA Coffee Restaurant Logo"
                            fill
                            className="object-contain brightness-0 invert"
                            priority
                            unoptimized={true}
                        />
                    </div>
                </div>

                {/* Bottom Text Group */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-neutral z-10 w-full px-6 flex flex-col items-center">
                    <h1 className="font-sacramento text-6xl md:text-8xl lg:text-[7rem] leading-none tracking-normal">
                        Oh, Look...
                    </h1>
                </div>
            </div>
        </section>
    );
}
