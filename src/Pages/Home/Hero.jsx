import bannerImg from "@/assets/banner.jpg";

const Hero = () => {
    return (
        <div>
            <div className="bg-purple-600 px-64 pt-10 pb-64 flex flex-col items-center gap-6 my-10">
                <h1 className="text-white text-6xl font-bold text-center">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-white text-center">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                </p>
                <p className="btn rounded-full bg-white text-purple-600 font-bold">
                    Shop Now
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="border-4 border-white p-5 rounded-2xl flex justify-center w-3/6 mx-auto -mt-52">
                    <img
                        src={bannerImg}
                        alt="idk what is this"
                        className="rounded-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
