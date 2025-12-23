"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';

export const NearByPlace = () => {
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
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/baba-kashi-vishwanath-near-hotel-elegance.webp"
                                        alt="spa-1"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Baba Kashi Vishwanath Temple</h4>
                                    <p>
                                        Baba Kashi Vishwanath Parisar is 6 Kms from Hotel Elegance by
                                        Taxi, taking approximately 30 mins.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/varanasi-sarnath-dhamek-stupa-hotel-elegance.jpg"
                                        alt="spa-2"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Dhameka Stupa at Sarnath Deer Park</h4>
                                    <p>
                                        Sarnath Deer Park is 13 Kms from Hotel Elegance by Taxi, taking
                                        approximately 40 mins.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/banaras-hindu-university-gate-near-hotel-elegance.jpg"
                                        alt="spa-3"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Banaras Hindu University</h4>
                                    <p>
                                        BHU Main Gate is 4.5 Kms from Hotel Elegance by Taxi, taking
                                        approximately 15 mins.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/kaal-bhairav-mandir-kashi-hotel-elegance.webp"
                                        alt="spa-4"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Kaal Bhairav Temple</h4>
                                    <p>
                                        Kaal Bhairav Mandir is 8-10 Kms from Hotel Elegance, and takes
                                        approximately 30-45 mins depending upon route, including both
                                        Taxi and Walking
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/assi-ghat-banaras-hotel-elegance.jpg"
                                        alt="spa-4"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Assi Ghat</h4>
                                    <p>
                                        Assi Ghat is 5-6 Kms from Hotel Elegance, and takes
                                        approximately 25 mins with Taxi. It is heavily crowded on
                                        Weekends.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/dashashwamedh-ghat-banaras-varanasi-hotel-elegance.webp"
                                        alt="spa-4"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Dashashwamedh Ghat</h4>
                                    <p>
                                        Dashashwamedha Ghat is 6 Kms from Hotel Elegance, and takes
                                        approximately 30 mins through main City Road, including both
                                        Taxi and Walking
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/khidkiya-namo-ghat-varanasi-hotel-elegance.jpg"
                                        alt="spa-4"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Khidkiya Ghat</h4>
                                    <p>
                                        Khidkiya Ghat is 11.5 Kms from Hotel Elegance, and takes
                                        approximately 30 mins with Taxi.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-4 col-sm-6 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="rx-spa-card">
                            <a href="#">
                                <div className="spa-img">
                                    <img
                                        src="assets/dev-img/sankat-mochan-banaras-hotel-elegance.jpg"
                                        alt="spa-4"
                                    />
                                </div>
                                <div className="spa-contact">
                                    <h4>Sankat Mochan Temple</h4>
                                    <p>
                                        Sankat Mochan Mandir is 4.5 Kms from Hotel Elegance, and takes
                                        approximately 15 mins with Taxi. It is heavily crowded on
                                        Tuesday &amp; Saturday
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-xl-12 col-lg-12 col-sm-12 mb-24 spa-d-none aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="text-center">
                            <a href="#" className="btn rx-btn-two">
                                View More Places in Varanasi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
