"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Image from 'next/image'; // Added for optimized images

export default function NeatByPlaceDetailsPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });

        if (typeof window !== 'undefined') {
            imageTosvg();
        }
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <section className="section-breadcrumb">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h2>Restaurant</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu */}
            <section className="section-menu padding-t-100 padding-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <Image
                                        src="/assets/img/banner/left-shape.svg"
                                        alt=""
                                        width={50}
                                        height={20}
                                        className="svg-img left-side"
                                        priority
                                    />
                                    Urban Chaupal
                                    <Image
                                        src="/assets/img/banner/right-shape.svg"
                                        alt=""
                                        width={50}
                                        height={20}
                                        className="svg-img right-side"
                                        priority
                                    />
                                </p>
                                <h1>
                                    Best Indian Restaurant in Varanasi by <span>Hotel Elegance</span>
                                </h1>
                            </div>
                        </div>

                        <div
                            className="col-12"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="tab-content rx-menutab">
                                <div
                                    className="tab-pane fade show active"
                                    id="starters"
                                    role="tabpanel"
                                    aria-labelledby="starters-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-md-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                {[
                                                    {
                                                        title: "Unmatched Pampering at Elegance",
                                                        description: "Experience unparalleled luxury as we strive to pamper you at every step. Our pride lies in the exquisite Urban Chaupal Restaurant, a signature dining experience at Hotel Elegance, promising an unforgettable culinary journey."
                                                    },
                                                    {
                                                        title: "A Haven for Indian Cuisine Lovers",
                                                        description: "Urban Chaupal in Varanasi is a hidden gem, renowned for its unparalleled Indian cuisine. With a vegetarian paradise and captivating interiors, it offers a unique and delightful dining experience."
                                                    },
                                                    {
                                                        title: "Casual Elegance, Timeless Taste",
                                                        description: "Urban Chaupal's casual yet classy ambiance invites repeat visits, showcasing unbeatable cuisine crafted by dedicated chefs. Indulge in a gastronomic adventure with delectable Indian and global dishes."
                                                    },
                                                    {
                                                        title: "Capture Moments of Delight",
                                                        description: "Indulge in Urban Chaupal's enchanting ambiance, capturing picturesque moments for a visual delight on social media. Come, savor, and create lasting memories with every delectable bite!"
                                                    }
                                                ].map((item, index) => (
                                                    <div className="inner-menu" key={index}>
                                                        <div className="sub-contact">
                                                            <h5>{item.title}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="row mb-minus-24 rx-side-menu-image">
                                                {[
                                                    {
                                                        src: "/assets/dev-img/restaurant/Unmatched-Pampering-at-Elegance.jpg",
                                                        alt: "Unmatched Pampering at Elegance",
                                                        className: "radius-one"
                                                    },
                                                    {
                                                        src: "/assets/dev-img/restaurant/A-Haven-for-Indian-Cuisine-Lovers.jpg",
                                                        alt: "A Haven for Indian Cuisine Lovers",
                                                        className: "radius-two",
                                                        hideOnMobile: true
                                                    },
                                                    {
                                                        src: "/assets/dev-img/restaurant/Casual-Elegance-Timeless-Taste.jpg",
                                                        alt: "Casual Elegance Timeless Taste",
                                                        className: "radius-three",
                                                        hideOnMobile: true
                                                    },
                                                    {
                                                        src: "/assets/dev-img/restaurant/Capture-Moments-of-Delight.jpg",
                                                        alt: "Capture Moments of Delight",
                                                        className: "radius-four",
                                                        hideOnMobile: true
                                                    }
                                                ].map((image, index) => (
                                                    <div
                                                        className={`col-lg-6 col-12 mb-24 ${image.hideOnMobile ? 'd-none-991' : ''}`}
                                                        key={index}
                                                    >
                                                        <div className={`inner-img ${image.className}`}>
                                                            <Image
                                                                src={image.src}
                                                                alt={image.alt}
                                                                width={400}
                                                                height={300}
                                                                className="w-100 h-auto"
                                                                priority={index === 0}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}