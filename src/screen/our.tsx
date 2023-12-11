import { useEffect } from "react";
import PartenrsBringing from "../components/our/partenrsBringing";
import PartnersReview from "../components/our/partnersReview";
import Service from "../components/our/service";
import Vision from "../components/our/vision";
import { go_to_scroll_position } from "../utils/utils";

export default function Our() {
    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <Vision />
            <Service />
            <PartnersReview />
            <PartenrsBringing />
        </div>
    );
}
