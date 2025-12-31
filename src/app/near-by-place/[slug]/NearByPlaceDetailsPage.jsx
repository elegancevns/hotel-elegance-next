"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
export default function NearByPlaceDetailsPage({ initialData }) {
    const { data: place, recent_posts } = initialData;
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

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
                                            <h1>{place.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="row mb-minus-24">
                        <div
                            className="col-lg-8 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="rx-blog-details">
                                <div className="rx-blog-details-cart">
                                    <div className="blog-details-img">
                                        <Image
                                            src={place.image_url}
                                            alt={place.title}
                                            width={500}
                                            height={500}
                                            sizes="400px"
                                        />
                                    </div>
                                    <div className="blog-details-contact">
                                        <h2 className="mt-2 mb-2">{place.title}</h2>
                                        <p>
                                            {place.short_desc}
                                        </p>
                                        <div
                                            className="place-description"
                                            dangerouslySetInnerHTML={{ __html: place.long_description }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-12 mb-24"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <div className="rx-blog-details-sidebar">
                                <div className="rx-recent-post">
                                    <h3 className="sub-title mb-3">Nearby Places</h3>
                                    <div className="recent-inner-post">
                                        {recent_posts?.map((post) => (
                                            <Link key={post.id} href={`/near-by-place/${post.slug}`}>
                                                <div 
                                                    className="recent-post-cart mb-3 flex gap-2"
                                                >
                                                    <div className="post-img relative w-[80px] h-[80px] flex-shrink-0 overflow-hidden rounded-md">
                                                        <Image
                                                            src={post.image_url}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="50px"
                                                        />
                                                    </div>
                                                    <div className="post-contact">
                                                        <h4>
                                                            
                                                            {post.title}
                                                        </h4>
                                                        <p className="">
                                                            {post.short_desc?.slice(0, 50)}...
                                                        </p>
                                                        
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
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