import Banner from "@/components/Banner/Banner";
import { pageMeta } from "@/utils/metadata";
import { HomeAboutUs } from "@/components/HomeAboutUs/HomeAboutUs";
import { OurBestServices } from "@/components/OurBestServices/OurBestServices";
import { AccommodationDining } from "@/components/AccommodationDining/AccommodationDining";
import { BestRoom } from "@/components/Rooms/BestRooms/BestRoom";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { NearByPlace } from "@/components/NearByPlace/NearByPlace";
import { PositionedUnique } from "@/components/PositionedUnique/PositionedUnique";
import { NearbyByAttraction } from "@/components/NearbyByAttraction/NearbyByAttraction";
import { FooterTop } from "@/components/FooterTop/FooterTop";
import { Suspense } from "react";
export const metadata = pageMeta(
  "The Elegance Best Hotel in Varanasi near Railway Station", 
  "The Elegance - Best Boutique Hotel in Varanasi near Banaras Railway Station and BHU. Situated close to BLW, the Hotel is the best place for Stay in Varanasi."
);
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
