'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NeatByPlaceListPage({ initialNearByPlace }) {
    const [nearByPlaces, setNearByPlaces] = useState(initialNearByPlace || []);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, [nearByPlaces]);
    const getAOSProps = (delay = 0) => ({
        'data-aos': 'fade-up',
        'data-aos-delay': delay,
        'data-aos-duration': 800,
    });
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
                                            <h1>Near By Place</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spa padding-tb-50 near-by-place">
                <div className="container">
                    <div className="row mb-minus-24">
                        {nearByPlaces.map((place, index) => (
                            <div
                                key={place.id}
                                className="col-xl-3 col-lg-4 col-sm-6 mb-24"
                                {...getAOSProps(index * 200)}                            >
                                <div className="rx-spa-card">
                                    <Link href={`/near-by-place/${place.slug}`}>
                                        <div className="spa-img">
                                            <img
                                                src={place.image_url}
                                                alt={place.title}
                                                className="w-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'assets/img/placeholder-image.jpg';
                                                }}
                                            />
                                        </div>
                                        <div className="spa-contact p-4">
                                            <h4 className="text-lg font-bold mb-2">{place.title}</h4>
                                            <p className="text-gray-600 text-sm">{place.short_desc}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}