"use client";

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const fjordurImages = [
    'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/06/ark-fjordur-release-time.jpg',
    'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ARK_Fjordur_Ankuendigung.JPG',
    'https://www.ginx.tv/uploads/ark_fjordur_r.jpg',
    'https://www.nme.com/wp-content/uploads/2022/06/Ark-Survival-Evolved-Fjordur-expansion.jpg'
];

export function HomeBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Carousel
                className="w-full h-full"
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {fjordurImages.map((src, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={src}
                                alt={`Fjordur background image ${index + 1}`}
                                fill
                                className="object-cover w-full h-full transition-opacity duration-1000"
                                priority={index === 0}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
    );
}
