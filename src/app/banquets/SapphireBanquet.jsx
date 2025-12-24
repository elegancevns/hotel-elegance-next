"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const SapphireBanquet = () => {
    const galleryImages = [
        { id: 1, src: "assets/img/gallery/1.jpg", alt: "gallery-1" },
        { id: 2, src: "assets/img/gallery/2.jpg", alt: "gallery-2" },
        { id: 3, src: "assets/img/gallery/3.jpg", alt: "gallery-3" },
        { id: 4, src: "assets/img/gallery/4.jpg", alt: "gallery-4" },
        { id: 5, src: "assets/img/gallery/5.jpg", alt: "gallery-5" },
        { id: 6, src: "assets/img/gallery/6.jpg", alt: "gallery-6" },
        { id: 7, src: "assets/img/gallery/7.jpg", alt: "gallery-7" },
        { id: 8, src: "assets/img/gallery/8.jpg", alt: "gallery-8" },
        { id: 9, src: "assets/img/gallery/9.jpg", alt: "gallery-9" },
        { id: 10, src: "assets/img/gallery/10.jpg", alt: "gallery-10" },
        { id: 11, src: "assets/img/gallery/11.jpg", alt: "gallery-11" },
        { id: 12, src: "assets/img/gallery/12.jpg", alt: "gallery-12" },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
        if (typeof window !== 'undefined') {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    imageTosvg();
                });
            } else {
                imageTosvg();
            }
        }
    }, []);

    return (
        <section className="section-gallery padding-tb-50 banquate">
            <div className="container">
                <div className="row mb-minus-24 justify-content-md-center">
                    <div className="col-md-8" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Sapphire Banquet
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h1>
                                Celebrate Moments in Unmatched Elegance.
                            </h1>

                            <div className="mt-3">
                                <p>
                                    The Elegance Hotel offers you Sapphire Banquet, the Best Banquet in Varanasi near DLW and BHU. If you have a Engagement, Birthday Party, Reception, Family Get Together, Wedding Anniversary, Ring Ceremony, Sangeet & Mehandi Function, Wedding or any family event coming up in your family and booking a perfect Banquet Hall is 1st priority, Sapphire Banquet by Hotel Elegance is the Best Option.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-minus-24">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                        <div className="relative">
                            <Carousel
                                className="w-full mx-auto"
                                opts={{
                                    loop: true,
                                    align: "start",
                                    skipSnaps: false,
                                    duration: 25,
                                    slidesToScroll: 4,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                            >
                                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 lg:-translate-x-10 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />

                                <CarouselContent className="py-4 px-2 md:px-4">
                                    {galleryImages.map((image) => (
                                        <CarouselItem
                                            key={image.id}
                                            className="pl-1 md:pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                                        >
                                            <div className="p-2">
                                                <figure className="rx-gallery-card-two overflow-hidden rounded-lg group">
                                                    <a
                                                        className="rx-gallery-img block overflow-hidden"
                                                        href={image.src}
                                                        data-fancybox="gallery-sapphire"
                                                    >
                                                        <img
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-8 lg:translate-x-10 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="row mb-minus-24 justify-content-md-center">
                    <div className="col-lg-12">
                        <div className="mt-3">
                            <div className="text-center">
                                <p>
                                    Sapphire Banquet Hall provides a variety of services to effectively organise the event, including cuisine, interior decoration, entertainment, and more. With many friends, family members, and coworkers expected at your event, you would undoubtedly want everything to go smoothly. Such a problem might be simply fixed with the aid of Sapphire banquet Hall, which not only give you a wonderful location but also assist you in expertly arranging the event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};