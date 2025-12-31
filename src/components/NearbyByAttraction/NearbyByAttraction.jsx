"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Image from 'next/image';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const NearbyByAttraction = ({ initialAttractions = [] }) => {  
    return (
        <section className="section-contact padding-t-50 padding-b-100 home-map-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rx-contact-form">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12 mb-24">
                                    <div className="home-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.626493513324!2d82.9724091871582!3d25.282133999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31b13d0a0165%3A0xf75a308e5a647f7!2sDev%20Residency%20Hotel%2C%20Varanasi%20(A%20Unit%20of%20The%20Elegance)!5e0!3m2!1sen!2sin!4v1751104855079!5m2!1sen!2sin"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Location Map of The Elegance Hotel"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 mb-24 align-items-center">
                                    <div className="near-by-attraction">
                                        <div className="near-by-title">
                                            <h5>
                                                Explore nearby <br />
                                                <span>attractions</span>
                                            </h5>
                                        </div>
                                        <div className="near-by-attraction-slider relative">
                                            <Carousel
                                                className="w-full"
                                                opts={{
                                                    loop: true,
                                                    align: "start",
                                                    skipSnaps: false,
                                                    duration: 25,
                                                    slidesToScroll: 2,
                                                }}
                                                plugins={[
                                                    Autoplay({
                                                        delay: 3500,
                                                        stopOnInteraction: false,
                                                    }),
                                                ]}
                                            >
                                                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center" />

                                                <CarouselContent className="py-1">
                                                    {initialAttractions.map((attraction) => (
                                                        <CarouselItem
                                                            key={attraction.id}
                                                            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/2"
                                                        >
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="rx-amenities-img relative overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-xl">
                                                                        <Link href={`/near-by-place/${attraction.slug}`}>
                                                                        <Image
                                                                            src={attraction.image_url}
                                                                            alt={attraction.title}
                                                                            className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                                                            width={200}
                                                                            height={200}
                                                                            sizes='300'
                                                                        />
                                                                        <div className="map-title absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2">
                                                                            <div className="flex justify-between items-start">
                                                                                <div>
                                                                                    <h6 className="text-white font-bold text-base md:text-lg">{attraction.title}</h6>
                                                                                    <p className="text-white/100 text-xs md:text-sm">{attraction.short_desc?.slice(0, 20)}...</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>

                                                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center" />
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};