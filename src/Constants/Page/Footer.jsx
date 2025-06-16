import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto mt-10">
            <div>
                <h1 className="text-gray-950 text-3xl font-bold text-center">
                    Gadget Heaven
                </h1>
                <p className="text-gray-500 text-center font-medium">
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>
            <Separator className="my-5" />

            <div className="footer sm:footer-horizontal p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link>Product Support</Link>
                    <Link>Order Tracking</Link>
                    <Link>Shipping & Delivery</Link>
                    <Link>Returns</Link>
                </nav>
                <nav>
                    <Link>About Us</Link>
                    <Link>About Us</Link>
                    <Link>Careers</Link>
                    <Link>Contact</Link>
                </nav>
                <nav>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Cookie Policy</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
