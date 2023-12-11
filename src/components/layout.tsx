import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../global/recoil";
import HeaderMobile from "./header/headerMobile";

export default function Layout() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <>
            {displayResolution === "web" ? <Header /> : <HeaderMobile />}
            <Outlet></Outlet>
        </>
    );
}
