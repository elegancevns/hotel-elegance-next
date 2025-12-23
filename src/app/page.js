import Banner from "@/components/Banner/Banner";
import { HomeAboutUs } from "@/components/HomeAboutUs/HomeAboutUs";
import { OurBestServices } from "@/components/OurBestServices/OurBestServices";
import { AccommodationDining } from "@/components/AccommodationDining/AccommodationDining";
import { BestRoom } from "@/components/Rooms/BestRooms/BestRoom";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { NearByPlace } from "@/components/NearByPlace/NearByPlace";
import { PositionedUnique } from "@/components/PositionedUnique/PositionedUnique";
import { NearbyByAttraction } from "@/components/NearbyByAttraction/NearbyByAttraction";
import { FooterTop } from "@/components/FooterTop/FooterTop";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>

      <Suspense fallback="loading">
        <Banner /> 
      </Suspense>      
      <HomeAboutUs />
      <OurBestServices/>
      <AccommodationDining/>
      <BestRoom/>
      <Testimonials/>
      <NearByPlace/>
      <PositionedUnique/>
      <NearbyByAttraction/>
      <FooterTop/>
    </>
  );
}
