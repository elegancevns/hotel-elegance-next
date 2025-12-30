"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';

export const NearByPlace = ({ initialNearByPlace = [] }) => {
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
        <section className="section-spa padding-tb-50 near-by-place">
            <div className="container">
                <div className="row mb-minus-24">
                    <div
                        className="col-12 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Nearby Places
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h4>
                                Explore Varanasi from <span>Hotel Elegance </span>
                            </h4>
                        </div>
                    </div>
                    {initialNearByPlace.map((place, index) => (
                        <div
                            key={place.id}
                            className="col-xl-3 col-lg-4 col-sm-6 mb-24 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 200}
                        >
                            <div className="rx-spa-card">
                                <a href="{place.slug}">
                                    <div className="spa-img">
                                        <img
                                            src={place.image_url}
                                            alt={place.title}
                                            onError={(e) => {
                                                e.target.src = 'assets/img/placeholder-image.jpg';
                                            }}
                                        />
                                    </div>
                                    <div className="spa-contact">
                                        <h4>{place.title}</h4>
                                        <p>{place.short_desc}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                    {initialNearByPlace.length > 3 && (
                        <div
                            className="col-xl-12 col-lg-12 col-sm-12 mb-24 spa-d-none aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
                            <div className="text-center">
                                <a href="{place.slug}" className="btn rx-btn-two">
                                    View More Places in Varanasi
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};