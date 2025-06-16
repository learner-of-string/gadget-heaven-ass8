import { createBrowserRouter } from "react-router-dom";
import Container from "./Container";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

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
        ],
    },
]);

export default route;
