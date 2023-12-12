import { useEffect } from "react";
import { go_to_scroll_position } from "../utils/utils";
import TechnicalValueSea from "../components/company/technicalValueSea";
import TechnicalValueContainer from "../components/company/technicalValueContainer";
import Vision from "../components/company/vision";
import { DisplayResolution } from "../global/recoil";
import { useRecoilValue } from "recoil";
import TechnicalValueSeaMobile from "../components/company/technicalValueSeaMobile";
import TechnicalValueContainerMobile from "../components/company/technicalValueContainerMobile";
import VisionMobile from "../components/company/visionMobile";

export default function Company() {
    const displayResolution = useRecoilValue(DisplayResolution);

    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            {displayResolution === "web" ? (
                <>
                    <TechnicalValueSea />
                    <TechnicalValueContainer />
                    <Vision />
                </>
            ) : (
                <>
                    <TechnicalValueSeaMobile />
                    <TechnicalValueContainerMobile />
                    <VisionMobile />
                </>
            )}
        </div>
    );
}
