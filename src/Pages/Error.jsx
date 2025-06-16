import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Error = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
            <p className="text-5xl text-purple-500 font-semibold">
                Page Not Found
            </p>
            <p className="text-3xl text-purple-800 font-medium">
                Or may be coming soon
            </p>
            <h1 className="text-8xl text-white bg-purple-500 p-5 rounded-2xl">
                404
            </h1>
            <NavLink to={-1}>
                <Button variant="outline" className="bg-purple-500 text-white">
                    Go back
                </Button>
            </NavLink>
        </div>
    );
};

export default Error;
