import "./index.css";
import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Function components

import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import ErrorPage from "./component/ErrorPage/errorpage";
import Body from "./component/Body/body";

// import { Productdata } from "./component/api/Dummydata";
// import Commentcomponent from "./component/CommentComponent/commentcomponent";
// import Counter from "./component/Counter/counter";
const Card = lazy(() => import ("./component/Card/card"))
const Contact = lazy(() => import("./component/Contact/contact"))
const Help = lazy(() => import("./component/Help/help"))
const Content = lazy(() => import("./component/Content/content"))

// Applayout component
const Applayout = () => {
    useEffect(() => {
        console.log("");
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

// Define routes
const router = createBrowserRouter([

    {
        path: "/",
        element: <Applayout />,

        children: [

            {

                path: "/",
                element: (
                    <Suspense fallback={"Loading....."}>
                        <Body />
                    </Suspense>
                )
            },
            {
                path: "/offer",
                element: (
                    <Suspense fallback={"Loading......"}>
                        <Card/>
                    </Suspense>
                )
            },
            {
                path: "/help",
                element: (
                    <Suspense fallback={"Loading....."}>
                        <Help/>
                    </Suspense>
                )
            },
            {
                path: "*",
                element: (
                    <Suspense fallback={"Loading....."}>
                        <ErrorPage/>
                    </Suspense>
                )
            },

            {
                path: "/contact",
                element: (
                    <Suspense fallback={"Loading....."}>
                        <Contact/>
                    </Suspense>
                )

            },

            {
                path: "/images",
                element: <Content />
            },
        ],
        errorElement: <ErrorPage />

    },

    // Add other routes here
]);

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root render method with RouterProvider
root.render(
    <RouterProvider router={router} />
);
