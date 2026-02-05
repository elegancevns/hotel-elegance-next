import RoomDetailPage from "./RoomsDeails";
import { getRoomBySlug } from "@/data/roomsData";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    return {
      title: "Room not found | The Elegance Hotel",
      description: "Room details not available",
    };
  }
  return {
    title: `${room.meta_title}`,
    description: room.meta_desc || `Book ${room.title} at The Elegance Hotel, Varanasi`,
    alternates: {
      canonical: `https://www.theelegance.co.in/hotel-rooms-in-varanasi/${slug}`,
    },
  };
}


export default function Page() {
  return <RoomDetailPage />;
}
