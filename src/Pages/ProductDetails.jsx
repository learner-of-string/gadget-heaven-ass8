import { useParams } from "react-router-dom";
import products from "@/Constants/db";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/Components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";

const ProductDetails = () => {
    const { slug } = useParams();

    const product = products.find((product) => product.slug === slug);

    return (
        <div>
            <div className="bg-purple-600 pt-8 px-60">
                <h1 className="text-3xl font-bold text-center text-white">
                    Product Details
                </h1>
                <p className="text-lg text-center text-white">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                </p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold text-gray-950">
                            {product.name}
                        </h1>
                        <p className="font-semibold text-xl text-gray-950/70">
                            Price: ${product.price}
                        </p>
                    </div>
                    <div>
                        {product.available ? (
                            <span className="font-medium border-2 border-lime-600 px-4 py-2 rounded-full bg-lime-600/10 text-lime-700">
                                In Stock
                            </span>
                        ) : (
                            <span className="font-medium border-2 border-red-600 px-4 py-2 rounded-full bg-red-600/10 text-red-700">
                                Out of Stock
                            </span>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-950/60">
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-950">
                            Specification:
                        </h2>
                        {product?.specifications.map((spec, idx) => (
                            <div key={idx} className="flex gap-2">
                                <p className="font-medium text-gray-950/60">
                                    {idx + 1}.{" "}
                                    <span className="font-normal text-gray-950/60">
                                        {spec}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p>Rating: </p>
                        <div className="flex items-center gap-2">
                            <Rating
                                value={product.rating}
                                readOnly
                                style={{ maxWidth: 150 }}
                            />
                            <span className="py-0.5 px-1.5 text-xs bg-gray-950/5 rounded-full">
                                {product.rating}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button className="flex items-center gap-2 bg-purple-600 text-white font-bold">
                            Add to Cart <ShoppingCart />
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            <Heart />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
