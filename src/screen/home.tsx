import { useEffect } from "react";
import Innovation from "../components/home/innovation";
import Quoto from "../components/home/quoto";
import Technical from "../components/home/technical";
import { go_to_scroll_position } from "../utils/utils";

export default function Home() {
    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <Quoto />
            <Innovation />
            <Technical />
        </div>
    );
}
