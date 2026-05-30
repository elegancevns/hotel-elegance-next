"use client";
import React, { useEffect } from 'react';
import { imageTosvg } from '@/utils/imageToSvg';
const services = [
    {
        icon: "front-desk-and-guest-support.svg",
        title: "Front Desk & Guest Support",
        items: [
            "24/7 Front Desk Assistance",
            "Express Check-in & Check-out",
            "Taxi & Cab Booking Support",
            "Travel & Local Guidance",
        ],
    },
    {
        icon: "room-and-comfort-services.svg",
        title: "Room & Comfort Services",
        items: [
            "Daily Housekeeping",
            "Clean Linen & Towels",
            "In-Room Dining",
            "Extra Bed on Request",
        ],
    },
    {
        icon: "connectivity-and-utilities.svg",
        title: "Connectivity & Utilities",
        items: [
            "Free High-Speed Wi-Fi",
            "Power Backup",
            "Lift Access",
            "Air-Conditioned Rooms",
        ],
    },
    {
        icon: "dining-and-lounge-services.svg",
        title: "Dining & Lounge Services",
        items: [
            "Multi-Cuisine Restaurant",
            "In-House Lounge",
            "Veg & Non-Veg Options",
            "Breakfast, Lunch & Dinner",
        ],
    },
    {
        icon: "business-events.svg",
        title: "Business & Events",
        items: [
            "Meetings & Conferences",
            "Business Gatherings",
            "Corporate Event Facilities",
            "Smart Event Infrastructure",
        ],
    },
    {
        icon: "parking-and-accessibility.svg",
        title: "Parking & Accessibility",
        items: [
            "On-Site Parking",
            "Secure Parking Area",
            "Easy Vehicle Access",
            "Lift Access",
        ],
    },
];
export const OurBestServices = () => {
    return (
        <section className="section-services padding-tb-50">
            <div className="container">
                <div className="row mb-minus-24">
                    <div className="col-12">
                        <div className="rx-banner text-center rx-banner-effects">
                            <p>
                                <img
                                    src="assets/img/banner/left-shape.svg"
                                    alt="banner-left-shape"
                                    className="svg-img left-side"
                                />
                                Facilities
                                <img
                                    src="assets/img/banner/right-shape.svg"
                                    alt="banner-right-shape"
                                    className="svg-img right-side"
                                />
                            </p>
                            <h2>
                                Our Best <span>Services</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
                            >
                                <div
                                    className="
                                        group relative h-full overflow-hidden
                                        rounded-3xl bg-white
                                        border border-slate-100
                                        p-3
                                        shadow-[0_8px_10px_rgb(0,0,0,0.08)]
                                        transition-all duration-500
                                        hover:-translate-y-3
                                        hover:shadow-2xl
                                    "
                                >
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                    {/* Top Border */}
                                    {/* <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-950 to-orange-800"></div> */}

                                    <div className="relative z-10">
                                        <div
                                            className="
                                                mb-6 flex h-20 w-20 items-center justify-center
                                                rounded-2xl
                                                bg-gradient-to-br
                                                from-blue-100 to-orange-100
                                                transition-all duration-500
                                                group-hover:scale-110 group-hover:rotate-6
                                            "
                                        >
                                            <img
                                                src={`assets/img/services/${service.icon}`}
                                                alt={service.title}
                                                className="h-10 w-10 object-contain"
                                            />
                                        </div>
                                        <h4 className="mb-3 text-xl font-bold text-slate-800">
                                            {service.title}
                                        </h4>
                                        <ul className="space-y-3">
                                            {service.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-gray-600"
                                                >
                                                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                                        <svg
                                                            className="h-3 w-3 text-green-600"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="3"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <span className="leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}
