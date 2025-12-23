"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';

export const FooterTop = () => {
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
        <section className="feature-four other-hotel-section">
            <div
                className="feature-four__bg jarallax"
                data-jarallax=""
                data-speed="0.1"
                data-imgposition="50% -100%"
                style={{ backgroundImage: "url(assets/dev-img/feature-bg-1-1.webp)" }}
            ></div>
            <div className="overlay" />
            <div className="container">
                {/* <div class="row">
          <div class="col-12" data-aos="fade-up" data-aos-duration="1000">
              <div class="rx-banner text-center rx-banner-effects">
                  <p>
                      <img src="assets/img/banner/left-shape.svg" alt="banner-left-shape"
                          class="svg-img left-side">
                      The Elegance
                      <img src="assets/img/banner/right-shape.svg" alt="banner-right-shape"
                          class="svg-img right-side">
                  </p>
                  <h4>Other Hotels by The <span>Elegance Group</span></h4>
              </div>
          </div>
      </div> */}
                <div className="row justify-content-md-center">
                    <div
                        className="col-lg-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="other-hotel">
                            <div className="other-hotels-container">
                                <a href="https://www.instagram.com/theelegancehotel/">
                                    <img src="assets/dev-img/instagram/instagram_1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="other-hotel">
                            <div className="other-hotels-container">
                                <a href="https://www.instagram.com/theelegancehotel/">
                                    <img src="assets/dev-img/instagram/instagram_2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={200}
                    >
                        <div className="other-hotel">
                            <div className="other-hotels-container">
                                <a href="https://www.instagram.com/theelegancehotel/">
                                    <img src="assets/dev-img/instagram/instagram_3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
