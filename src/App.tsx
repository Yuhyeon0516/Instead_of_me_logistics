import {
    BrowserRouter,
    Route,
    Router,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import Our from "./screen/our";
import Company from "./screen/company";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { DisplayResolution } from "./global/recoil";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         errorElement: <NotFound />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "our",
//                 element: <Our />,
//             },
//             {
//                 path: "company",
//                 element: <Company />,
//             },
//         ],
//     },
// ]);

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
        // <>
        //     <RouterProvider router={router} />
        // </>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="our" element={<Our />} />
                    <Route path="company" element={<Company />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
