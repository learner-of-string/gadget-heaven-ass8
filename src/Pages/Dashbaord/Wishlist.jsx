import secureLocalStorage from "react-secure-storage";
import { Button } from "@/components/ui/button";
import products from "@/Constants/db.js";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
const Wishlist = () => {
    const [wishlistItemsSlug, setWishCartItemsSlug] = useState([]);

    useEffect(() => {
        try {
            const items = JSON.parse(
                secureLocalStorage.getItem("gadgetHeavenWishlist") || "[]"
            );
            setWishCartItemsSlug(items);
        } catch (error) {
            console.error("Error parsing wishlist data:", error);
            secureLocalStorage.removeItem("gadgetHeavenWishlist");
            setWishCartItemsSlug([]);
        }
    }, []);

    const cartItems = wishlistItemsSlug.map((item) => {
        const product = products.find((product) => product.slug === item);
        return product;
    });

    const handleRemoveItem = (slug, name) => {
        const newCartItems = wishlistItemsSlug.filter((item) => item !== slug);
        secureLocalStorage.setItem(
            "gadgetHeavenWishlist",
            JSON.stringify(newCartItems)
        );
        setWishCartItemsSlug(newCartItems);
        toast.success(`${name} removed from wishlist`);
    };

    const handleAddToCart = (slug) => {
        const product = products.find((product) => product.slug === slug);

        if (!product.available) {
            toast.error(`${product.name} is currently out of stock`);
            return;
        }

        const currentCart = JSON.parse(
            secureLocalStorage.getItem("gadgetHeavenCart") || "[]"
        );
        if (!currentCart.includes(slug)) {
            secureLocalStorage.setItem(
                "gadgetHeavenCart",
                JSON.stringify([...currentCart, slug])
            );
        }

        const newWishlistItems = wishlistItemsSlug.filter(
            (item) => item !== slug
        );
        secureLocalStorage.setItem(
            "gadgetHeavenWishlist",
            JSON.stringify(newWishlistItems)
        );
        setWishCartItemsSlug(newWishlistItems);

        toast.success("Item moved to cart");
    };

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-base md:text-2xl font-bold">
                    Wishlist({wishlistItemsSlug.length})
                </h2>
            </div>
            <div className="space-y-4">
                {wishlistItemsSlug.length === 0 ? (
                    <div>
                        <h1>No items in wishlist</h1>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item.slug}
                            className="flex justify-between gap-4 py-4 bg-white rounded-2xl w-11/12 md:w-3/5 mx-auto shadow-lg"
                        >
                            <div className="flex items-center gap-4 p-2">
                                <div>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="object-cover size-28 rounded-2xl"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <Link to={`/product/${item.slug}`}>
                                        <h1 className="text-2xl font-semibold relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                                            {item.name}
                                        </h1>
                                    </Link>
                                    <p className="text-gray-950/60">
                                        {item.description}
                                    </p>
                                    <p className="text-gray-950/80 font-semibold">
                                        Price: ${item.price}
                                    </p>
                                    <Button
                                        className="bg-purple-600 rounded-full hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:border-2 font-medium hover:font-semibold"
                                        onClick={() =>
                                            handleAddToCart(item.slug)
                                        }
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <Button
                                    variant="outline"
                                    className="rounded-full text-rose-600 border-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 mr-4"
                                    onClick={() =>
                                        handleRemoveItem(item.slug, item.name)
                                    }
                                >
                                    <XCircle />
                                </Button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
