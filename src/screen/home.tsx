import { useEffect } from "react";
import Innovation from "../components/home/innovation";
import Quoto from "../components/home/quoto";
import Technical from "../components/home/technical";
import { go_to_scroll_position } from "../utils/utils";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../global/recoil";
import QuotoMobile from "../components/home/quotoMobile";
import InnovationMobile from "../components/home/innovationMobile";
import TechnicalMobile from "../components/home/technicalMobile";

export default function Home() {
    const displayResolution = useRecoilValue(DisplayResolution);

    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            {displayResolution === "web" ? (
                <>
                    <Quoto />
                    <Innovation />
                    <Technical />
                </>
            ) : (
                <>
                    <QuotoMobile />
                    <InnovationMobile />
                    <TechnicalMobile />
                </>
            )}
        </div>
    );
}
