import { useEffect } from "react";
import PartenrsBringing from "../components/our/partenrsBringing";
import PartnersReview from "../components/our/partnersReview";
import Service from "../components/our/service";
import Vision from "../components/our/vision";
import { go_to_scroll_position } from "../utils/utils";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../global/recoil";
import VisionMobile from "../components/our/visionMobile";
import ServiceMobile from "../components/our/serviceMobile";
import PartnersReviewMobile from "../components/our/partnersReviewMobile";
import PartenrsBringingMobile from "../components/our/partenrsBringingMobile";

export default function Our() {
    const displayResolution = useRecoilValue(DisplayResolution);

    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            {displayResolution === "web" ? (
                <>
                    <Vision />
                    <Service />
                    <PartnersReview />
                    <PartenrsBringing />
                </>
            ) : (
                <>
                    <VisionMobile />
                    <ServiceMobile />
                    <PartnersReviewMobile />
                    <PartenrsBringingMobile />
                </>
            )}
        </div>
    );
}
