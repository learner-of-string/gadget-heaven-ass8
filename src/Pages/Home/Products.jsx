import products from "@/Constants/db";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
    const allCategories = [
        "All Products",
        ...new Set(products.map((product) => product.category)),
    ];

    return (
        <div className="py-10">
            <h1 className="font-bold text-4xl text-center text-neutral-950">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 w-11/12 gap-10 mx-auto my-12">
                <div className="flex flex-col gap-4">
                    {allCategories.map((category, id) => (
                        <div
                            key={id}
                            className="px-4 py-2 rounded-md bg-gray-950/10 cursor-pointer hover:bg-gray-950/20 transition-all duration-300"
                        >
                            <p className="font-medium text-center">
                                {category}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="col-span-3 grid md:grid-cols-3 grid-cols-1 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.slug}
                            className="bg-white p-5 flex flex-col gap-3 rounded-3xl"
                        >
                            <div className="flex-1 flex justify-center items-center bg-gray-100 rounded-2xl p-2">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <div>
                                <h1>{product.name}</h1>
                                <p>Price: {product.price}k</p>
                                <Link to={`/product/${product.slug}`}>
                                    <Button
                                        className=" text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                                        variant="outline"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
