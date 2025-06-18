import { createBrowserRouter } from "react-router-dom";
import Container from "./Container";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Dashboard from "./Pages/Dashboard";
import Statistics from "./Pages/Statistics";

const route = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Container />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:slug",
                element: <ProductDetails />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
        ],
    },
]);

export default route;
