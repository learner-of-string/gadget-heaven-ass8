import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NavBar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-base md:text-xl font-semibold">
                    Gadget Heaven
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <Link to="/dashboard">
                    <Button variant="ghost">
                        <ShoppingCart />
                    </Button>
                </Link>
                <Button
                    variant="ghost"
                    onClick={() =>
                        toast.error(
                            "How dare you click me?😤Shut up and go to dashboard"
                        )
                    }
                >
                    <Heart />
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
