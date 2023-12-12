import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import Our from "./screen/our";
import Company from "./screen/company";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { DisplayResolution } from "./global/recoil";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "our",
                    element: <Our />,
                },
                {
                    path: "company",
                    element: <Company />,
                },
            ],
        },
    ],
    { basename: "/Instead_of_me_logistics" }
);

function App() {
    const setDisplayResolution = useSetRecoilState(DisplayResolution);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setDisplayResolution("mobile");
        } else {
            setDisplayResolution("web");
        }
    }, [setDisplayResolution]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
