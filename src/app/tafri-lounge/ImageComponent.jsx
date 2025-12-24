import React, { useEffect, useRef } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

export const ImageComponent = () => {
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
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            Thumbs: {
                autoStart: false,
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
            },
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);
    const getAnimationDelay = (index) => {
        const delays = [null, "200", "400", "600"];
        return delays[index % 4];
    };

    return (
        <section className="section-gallery pt-1 pb-10">
            <div className="container">
                <div className="row mb-minus-24">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-24 rx-575-50"
                            data-aos="flip-left"
                            data-aos-duration="1000"
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
                                    />
                                    <div className="gallery-overlay">
                                        <div className="overlay-content">
                                            <i className="fas fa-search-plus"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};