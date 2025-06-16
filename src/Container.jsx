import Footer from "./Constants/Page/Footer";
import NavBar from "./Constants/Page/NavBar";
import { Outlet } from "react-router-dom";

const Container = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-neutral-100">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Container;
