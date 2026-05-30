"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useParams, notFound } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
    Bed,
    Wifi,
    Car,
    Coffee,
    Utensils,
    Tv,
    Wind,
    ShieldCheck,
    Bath,
    Users,
    Sparkles,
    CheckCircle,
    Clock,
    Maximize,
    ChevronLeft,
    ChevronRight,
    X,
    Heart,
    MapPin,
    Phone,
    Mail,
    Calendar,
    User,
    CreditCard,
    Key,
    Bath as BathIcon,
    Square,
    Users as UsersIcon,
    Shield,
    Battery,
    Home,
    Eye,
    Sunrise
} from 'lucide-react';
import { getRoomBySlug, roomsData } from '@/data/roomsData';

export default function RoomDetailPage() {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [room, setRoom] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [showLightbox, setShowLightbox] = useState(false);
    const mainCarouselRef = useRef(null);
    const thumbCarouselRef = useRef(null);
    const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    useEffect(() => {
        const foundRoom = getRoomBySlug(params.slug);
        if (!foundRoom) {
            notFound();
        }
        setRoom(foundRoom);

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
    }, [params.slug]);
    const handleMainCarouselChange = (index) => {
        setSelectedImage(index);
        if (thumbCarouselRef.current) {
            thumbCarouselRef.current.scrollTo(index);
        }
    };
    const handleThumbClick = (index) => {
        setSelectedImage(index);
        if (mainCarouselRef.current) {
            mainCarouselRef.current.scrollTo(index);
        }
    };

    if (!room) return null;
    const handleBookNow = () => {
        setIsModalOpen(true);
    };

    const roomFeatures = [
        { icon: <Square className="w-5 h-5" />, label: "Room Size", value: room.size },
        { icon: <UsersIcon className="w-5 h-5" />, label: "Max Guests", value: room.occupancy },
        { icon: <Bed className="w-5 h-5" />, label: "Bed Type", value: room.bedType || "King Size" },
        { icon: <BathIcon className="w-5 h-5" />, label: "Bathroom", value: room.bathroomType || "Private" },
        { icon: <Wind className="w-5 h-5" />, label: "Air Conditioning", value: "Yes" },
        { icon: <Eye className="w-5 h-5" />, label: "View", value: room.view || "City View" }
    ];

    const policies = roomsData.pageContent.policies.map((policy, index) => {
        const icons = [Clock, User, CreditCard, Key, Shield, Battery];
        const IconComponent = icons[index] || Clock;
        return {
            icon: <IconComponent className="w-4 h-4" />,
            text: policy
        };
    });

    return (
        <>
            <Breadcrumb
                title={`${room.title}`}
                backgroundImage={room.image}
                subtitle=""
            />
            <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                <div className="container">
                    <div className="">
                        <div className="mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="px-4 py-2 bg-gradient-to-r from-[#aa833f] to-[#aa833f] rounded-full">
                                            <span className="text-white font-semibold text-sm">
                                                {room.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-5xl font-serif font-bold mb-3">
                                        {room.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-[#aa833f]" />
                                            5 min from Varanasi Junction
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Heart className="w-5 h-5 text-[#aa833f]" />
                                            Most Popular Choice
                                        </span>
                                    </div>
                                </div>

                                <div className="lg:text-right">
                                    <div className="text-3xl font-bold text-[#000]">
                                        ₹{room.price.toLocaleString()}
                                        <span className="text-lg font-normal"> / night</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden!">
                            <div className=" lg:col-span-2 w-full col-span-1">
                                {/* Main Carousel */}
                                <div className="mb-4">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <Carousel
                                            ref={mainCarouselRef}
                                            plugins={[autoplayPlugin.current]}
                                            className="w-full"
                                            onMouseEnter={autoplayPlugin.current.stop}
                                            onMouseLeave={autoplayPlugin.current.reset}
                                            opts={{
                                                loop: true,
                                                align: 'start',
                                            }}
                                            setApi={(api) => {
                                                if (api) {
                                                    mainCarouselRef.current = api;
                                                    api.on('select', () => {
                                                        setSelectedImage(api.selectedScrollSnap());
                                                        if (thumbCarouselRef.current) {
                                                            thumbCarouselRef.current.scrollTo(api.selectedScrollSnap());
                                                        }
                                                    });
                                                }
                                            }}
                                        >
                                            <CarouselContent>
                                                {room.gallery.map((img, index) => (
                                                    <CarouselItem key={index}>
                                                        <div className="relative aspect-[16/10]">
                                                            <img
                                                                src={img}
                                                                alt={`${room.title} - View ${index + 1}`}
                                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                                            <button
                                                                onClick={() => setShowLightbox(true)}
                                                                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                                                            >
                                                                <Maximize className="w-5 h-5" />
                                                            </button>
                                                            <div className="absolute bottom-6 left-6 text-white z-10">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                                                        {selectedImage + 1} / {room.gallery.length}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded shadow-lg z-10"
                                                size="icon"
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </CarouselPrevious>
                                            <CarouselNext
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded shadow-lg z-10"
                                                size="icon"
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </CarouselNext>
                                        </Carousel>
                                    </div>
                                </div>

                                {/* Thumbnail Carousel */}
                                <div className="mt-4 relative">
                                    <Carousel
                                        ref={thumbCarouselRef}
                                        opts={{
                                            align: 'start',
                                            loop: false,
                                            slidesToScroll: 1,
                                        }}
                                        className="w-full"
                                        setApi={(api) => {
                                            if (api) {
                                                thumbCarouselRef.current = api;
                                            }
                                        }}
                                    >
                                        <CarouselContent className="-ml-2">
                                            {room.gallery.map((img, index) => (
                                                <CarouselItem key={index} className="pl-2 basis-1/5 md:basis-1/6 lg:basis-1/5">
                                                    <button
                                                        onClick={() => handleThumbClick(index)}
                                                        className={`relative rounded overflow-hidden transition-all duration-300 w-full ${selectedImage === index
                                                                ? 'ring-2 ring-[#aa833f] scale-105 shadow-lg'
                                                                : 'opacity-70 hover:opacity-100'
                                                            }`}
                                                    >
                                                        <div className="aspect-square">
                                                            <img
                                                                src={img}
                                                                alt={`Thumbnail ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {selectedImage === index && (
                                                            <div className="absolute inset-0 bg-amber-500/20"></div>
                                                        )}
                                                    </button>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded shadow-lg z-10"
                                            size="icon"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </CarouselPrevious>
                                        <CarouselNext
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-black border-none h-12 w-12 rounded shadow-lg z-10"
                                                size="icon"
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                        </CarouselNext>
                                    </Carousel>
                                </div>

                                {/* Room Features */}
                                <div className="bg-white rounded-3xl shadow-xl p-3 lg:p-6 my-6">
                                    <h2 className="text-[20px]! lg:text-[22px]! text-gray-900 mb-4 flex items-center gap-3">                                        
                                       Room Features & Specifications
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {roomFeatures.map((feature, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-xl hover:bg-amber-50 transition-all duration-300 group">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="text-[#aa833f]">
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-sm text-gray-600">
                                                        {feature.label}
                                                    </span>
                                                </div>
                                                <p className="text-lg font-semibold text-gray-900">{feature.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tabs Section */}
                                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                    <div className="border-b border-gray-200">
                                        <nav className="flex overflow-x-auto">
                                            {['overview', 'policies'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`px-6 py-4 font-semibold text-lg uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                                            ? 'text-[#aa833f] border-b-2 border-[#aa833f] bg-amber-50'
                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {tab === 'overview' && 'Overview'}
                                                    {tab === 'policies' && 'Policies'}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-6">
                                        {activeTab === 'overview' && (
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-serif font-bold mb-4">
                                                    Room Overview
                                                </h4>
                                                <div className="space-y-4 leading-relaxed">
                                                    {room.detailedDescription.map((paragraph, index) => (
                                                        <p key={index} className="text-gray-700 text-lg">{paragraph}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'policies' && (
                                            <div>
                                                <h4 className="text-2xl font-serif font-bold mb-4">
                                                    Hotel Policies
                                                </h4>
                                                <div className="space-y-3">
                                                    {policies.map((policy, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                                            <div className="text-[#aa833f] mt-1">
                                                                {policy.icon}
                                                            </div>
                                                            <p className="text-gray-700">{policy.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Booking & Highlights */}
                            <div className="space-y-8 sticky top-24">
                                <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl shadow-2xl p-6">
                                    <h5 className="text-xl font-bold mb-4 text-white">Book This Room</h5>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-white">Total for 1 night</span>
                                                <span className="text-2xl font-bold text-white">₹{room.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleBookNow(room)}
                                            className="w-full bg-gradient-to-r from-[#aa833f] to-[#aa833f] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>

                                {/* Highlights Card */}
                                <div className="bg-white rounded-3xl shadow-xl p-6">
                                    <h5 className="text-xl font-bold mb-4">
                                        Why Book This Room?
                                    </h5>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-1">Best Location</h6>
                                                <p className="text-sm text-gray-600">5 minutes from Railway Station</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <Calendar className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-1">Flexible Booking</h6>
                                                <p className="text-sm text-gray-600">Free cancellation up to 24 hours</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold mb-1">Safe & Secure</h6>
                                                <p className="text-sm text-gray-600">24/7 security & surveillance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Card */}
                                <div className="bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] rounded-3xl shadow-xl p-6">
                                    <h5 className="text-xl font-bold mb-4 text-white">
                                        Need Assistance?
                                    </h5>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                            <div className="w-12 h-12 bg-[#aa833f] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Call us anytime</p>
                                                <p className="font-bold text-gray-900">
                                                    <a href={`tel:+91${roomsData.pageContent.contact.phone.replace(/\D/g, '')}`}>+91 {roomsData.pageContent.contact.phone}</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                            <div className="w-12 h-12 bg-[#aa833f] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Email us</p>
                                                <p className="font-bold text-gray-900">
                                                    <a href={`mailto:${roomsData.pageContent.contact.email}`}>{roomsData.pageContent.contact.email}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {showLightbox && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={() => setShowLightbox(false)}
                        className="absolute top-6 right-6 text-white hover:text-amber-300 transition-colors duration-300 z-10"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <button
                        onClick={() => {
                            const newIndex = (selectedImage - 1 + room.gallery.length) % room.gallery.length;
                            handleThumbClick(newIndex);
                        }}
                        className="absolute left-6 text-white hover:text-amber-300 transition-colors duration-300 z-10"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <div className="max-w-6xl w-full">
                        <img
                            src={room.gallery[selectedImage]}
                            alt="Enlarged view"
                            className="w-full h-[70vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-4 text-white">
                            <p className="text-sm text-gray-300">
                                {selectedImage + 1} of {room.gallery.length} photos
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            const newIndex = (selectedImage + 1) % room.gallery.length;
                            handleThumbClick(newIndex);
                        }}
                        className="absolute right-6 text-white hover:text-amber-300 transition-colors duration-300 z-10"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </div>
            )}

            <EnquiryModal
                isOpen={isModalOpen}
                title={room.title}
                price={room.price}
                roomType={room.subtitle}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}