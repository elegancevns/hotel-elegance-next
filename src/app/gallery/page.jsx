'use client'
import React, { useEffect, useRef } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

export default function GalleryPage() {
    // Initialize Fancybox
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
                    right: ["slideshow", "download", "thumbs", "close"],
                },
            },
            Images: {
                zoom: true,
                zoomOpacity: "auto",
                click: "close",
                wheel: "slide",
            },
        });

        // Cleanup on unmount
        return () => {
            Fancybox.destroy();
        };
    }, []);

    // Gallery images data
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
        { id: 12, src: "assets/img/gallery/12.jpg", alt: "gallery-12" }
    ];

    // Get animation delay based on index
    const getAnimationDelay = (index) => {
        const delays = [null, 200, 400, 600];
        return delays[index % 4];
    };

    return (
        <>
            <section className="section-breadcrumb">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h2>Gallery</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gallery padding-tb-100">
                <div className="container">
                    <div className="gallery-masonry-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-10">
                                    <div className="flex justify-center p- rounded-2xl gap-3">
                                        <button data-id="12"
                                            className="rounded px-6 py-2.5 text-sm font-semibold bg-gradient-to-r bg-amber-900 text-white shadow-lg shadow-pink-500/30 scale-105 transition-all">
                                           Album 1
                                        </button>
                                        <button data-id="12"
                                            className="rounded px-6 py-2.5 text-sm font-semibold bg-gradient-to-r bg-amber-900 text-white shadow-lg shadow-pink-500/30 scale-105 transition-all">
                                           Album 1
                                        </button>
                                        <button data-id="12"
                                            className="rounded px-6 py-2.5 text-sm font-semibold bg-gradient-to-r bg-amber-900 text-white shadow-lg shadow-pink-500/30 scale-105 transition-all">
                                           Album 1
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row masonry-grid">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 masonry-item"
                                    data-aos="flip-left"
                                    data-aos-duration={1000}
                                    data-aos-delay={getAnimationDelay(index)}
                                >
                                    <div className="rx-gallery-card-two">
                                        <a
                                            className="rx-gallery-img"
                                            href={image.src}
                                            data-fancybox="gallery"
                                            data-caption={image.alt}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                loading="lazy"
                                                className="masonry-image"
                                            />

                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}