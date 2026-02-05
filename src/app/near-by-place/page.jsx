import NearByPlaceWrapper from './NearByPlaceWrapper';
import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
    "Nearby Places to Visit in Varanasi | Attractions Near Hotel",
    "Explore popular nearby places to visit in Varanasi including temples, ghats, and attractions located close to our hotel for easy sightseeing.",
    "/near-by-place",
);
export default function page({ initialNearByPlace }) {
    return (
        <>
            <NearByPlaceWrapper />
        </>
    );
}