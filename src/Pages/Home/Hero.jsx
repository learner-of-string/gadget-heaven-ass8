import bannerImg from "@/assets/banner.jpg";

const Hero = () => {
    return (
        <div>
            <div className="bg-purple-600 px-10 md:px-64 pt-10 pb-20 md:pb-64 flex flex-col items-center gap-2 md:gap-6 my-10 w-11/12 mx-auto rounded-4xl">
                <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-white text-center text-sm md:text-base">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                </p>
                <p className="btn rounded-full bg-white text-purple-600 font-bold text-sm md:text-base">
                    Shop Now
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="border-4 border-white p-2 md:p-5 rounded-2xl flex justify-center w-3/6 mx-auto md:-mt-64 -mt-24 shadow-2xl shadow-gray-400">
                    <img
                        src={bannerImg}
                        alt="idk what is this"
                        className="rounded-2xl object-cover "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
