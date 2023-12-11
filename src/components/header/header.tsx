import { HStack } from "@chakra-ui/react";
import Menu from "./menu";
import YelloButton from "../common/yelloButton";
import Logo from "./logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
    const { scrollY } = useScroll();
    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [menuHoverColor, setMenuHoverColor] = useState("#ffffff60");
    const [textColor, setTextColor] = useState("white");
    const params = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (params.pathname === "/our" || latest > 300) {
            setBackgroundColor("white");
            setTextColor("black");
            setMenuHoverColor("#FC6307");
        } else {
            setBackgroundColor("transparent");
            setTextColor("white");
            setMenuHoverColor("#ffffff60");
        }
    });

    useEffect(() => {
        if (params.pathname === "/our") {
            setBackgroundColor("white");
            setTextColor("black");
            setMenuHoverColor("#FC6307");
        } else {
            setBackgroundColor("transparent");
            setTextColor("white");
            setMenuHoverColor("#ffffff60");
        }
    }, [params.pathname]);

    return (
        <HStack
            backgroundColor={backgroundColor}
            color={textColor}
            w={"100dvw"}
            h={"100px"}
            position={"fixed"}
            px={"40px"}
            top={0}
            justifyContent={"space-between"}
            zIndex={10}
            transition={"0.3s linear"}
        >
            <Logo />
            <HStack spacing={"40px"}>
                <Menu menuHoverColor={menuHoverColor} />
                <YelloButton text="Get a Quoto" />
            </HStack>
        </HStack>
    );
}
