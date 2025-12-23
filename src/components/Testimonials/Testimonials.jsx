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

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            hotelName: "The Elegance Hotel",
            guestType: "Guests",
            dateVisited: "May 2025",
            review: "Fantastic hotel and service... Great ambience and locationnice experience in vanaras Good service in the elegance hotel Very supportive and helping staff Thanks to all good 👍 hotel in varanasi .................................staff excellent forgood smile.....",
            ratings: {
                value: 5.0,
                rooms: 5.0,
                location: 5.0,
                cleanliness: 5.0,
                service: 5.0,
                sleepQuality: 5.0
            }
        },
        {
            id: 2,
            title: "Excellent",
            guestType: "Guests",
            dateVisited: "May 2025",
            review: "staffs including sweeper, waiters, manager and the receptionist is welbehaved. The atmosphere and surroundings of Varanasi is very good. I am pleased with all. Thanking all................................................",
            ratings: {
                value: 5.0,
                rooms: 5.0,
                location: 5.0,
                cleanliness: 5.0,
                service: 5.0,
                sleepQuality: 5.0
            }
        },
        {
            id: 3,
            title: "Excellent",
            guestType: "Guests",
            dateVisited: "Apr 2025",
            review: "The hospitality of Hotel Elegance is the best . All staffs including sweeper, waiters, manager and the receptionist Miss Deeksha Singh is welbehaved. The atmosphere and surroundings of Varanasi is very good. I am pleased with all. Thanking all.",
            ratings: {
                value: 5.0,
                rooms: 5.0,
                location: 5.0,
                cleanliness: 5.0,
                service: 5.0,
                sleepQuality: 5.0
            }
        },
        {
            id: 4,
            hotelName: "The elegance",
            guestType: "Guests",
            dateVisited: "Apr 2025",
            review: "Nice hotel \nVery nice experience in vanaras Good service in the elegance hotel Very supportive and helping staff Thanks to all good 👍 hotel in varanasi .................................staff excellent for Diksha ma'am good smile.....",
            ratings: {
                value: 5.0,
                rooms: 5.0,
                location: 5.0,
                cleanliness: 5.0,
                service: 5.0,
                sleepQuality: 5.0
            }
        }
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

    const renderRatingBar = (score) => (
        <div className="rating-bar">
            <div
                className="rating-fill"
                style={{ width: "100%" }}
            />
        </div>
    );

    const renderRatingItem = (label, score) => (
        <div className="rating-item">
            <span className="rating-label">{label}</span>
            <div className="rating-bar-score">
                {renderRatingBar(score)}
                <span className="rating-score">{score.toFixed(1)}</span>
            </div>
        </div>
    );

    return (
        <section className="section-testimonials padding-tb-50 testimonials-first">
            <div className="overlay-welcome" />
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Testimonials (Trip Advisor)
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h4>
                                Our Happy <span>Guests Say</span>
                            </h4>
                        </div>
                    </div>
                    <div
                        className="col-12 col-lg-8"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <Carousel
                            className="w-full"
                            opts={{
                                loop: true,
                                align: "center",
                                skipSnaps: false,
                                duration: 30,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                    stopOnInteraction: false,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id}>
                                        <div className="row mb-minus-24 justify-content-md-center">
                                            <div className="col-md-10 col-12 mb-24">
                                                <div className="rx-testimonials-contact">
                                                    <div className="rx-inner-banner">
                                                        <h4>{testimonial.hotelName || testimonial.title}</h4>
                                                        <span>
                                                            ({testimonial.guestType})
                                                            <span>
                                                                <strong>Date visited :</strong> {testimonial.dateVisited}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="inner-contact">
                                                        <p style={{ whiteSpace: 'pre-line' }}>
                                                            {testimonial.review}
                                                        </p>
                                                        <div className="tripadvisor-rating">
                                                            <div className="tripadvisor-ratings-grid">
                                                                {renderRatingItem("Value", testimonial.ratings.value)}
                                                                {renderRatingItem("Rooms", testimonial.ratings.rooms)}
                                                                {renderRatingItem("Location", testimonial.ratings.location)}
                                                                {renderRatingItem("Cleanliness", testimonial.ratings.cleanliness)}
                                                                {renderRatingItem("Service", testimonial.ratings.service)}
                                                                {renderRatingItem("Sleep Quality", testimonial.ratings.sleepQuality)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* <div className="flex justify-center gap-4 mt-6">
                                <CarouselPrevious className="relative static transform-none left-0 right-0 top-0 -translate-y-0 bg-white/20 hover:bg-white/40 text-white border-white/30" />
                                <CarouselNext className="relative static transform-none left-0 right-0 top-0 -translate-y-0 bg-white/20 hover:bg-white/40 text-white border-white/30" />
                            </div> */}
                        </Carousel>
                    </div>
                    <div
                        className="col-xl-12 col-lg-12 col-sm-12 mb-24 spa-d-none"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="text-center">
                            <a
                                href="https://www.tripadvisor.in/Hotel_Review-g297685-d23708537-Reviews-The_Elegance_Hotel-Varanasi_Varanasi_District_Uttar_Pradesh.html#REVIEWS"
                                target="_blank"
                                className="btn rx-btn-two"
                            >
                                View More Reviews On Trip Advisor
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};