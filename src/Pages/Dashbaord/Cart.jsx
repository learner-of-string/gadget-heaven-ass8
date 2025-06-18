import { Sliders } from "lucide-react";
import secureLocalStorage from "react-secure-storage";
import { Button } from "@/components/ui/button";
import products from "@/Constants/db.js";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Cart = () => {
    const [cartItemsSlug, setCartItemsSlug] = useState([]);

    useEffect(() => {
        try {
            const items = JSON.parse(
                secureLocalStorage.getItem("gadgetHeavenCart") || "[]"
            );
            setCartItemsSlug(items);
        } catch (error) {
            console.error("Error parsing cart data:", error);
            // If there's invalid data, clear it and start fresh
            secureLocalStorage.removeItem("gadgetHeavenCart");
            setCartItemsSlug([]);
        }
    }, []);

    const cartItems = cartItemsSlug
        .map((item) => {
            const product = products.find((product) => product.slug === item);
            return product;
        })
        .filter(Boolean);

    const handleRemoveItem = (slug, name) => {
        const newCartItems = cartItemsSlug.filter((item) => item !== slug);
        secureLocalStorage.setItem(
            "gadgetHeavenCart",
            JSON.stringify(newCartItems)
        );
        setCartItemsSlug(newCartItems);
        toast.success(`${name} removed from cart`);
    };

    const handlePurchase = () => {
        Swal.fire({
            title: "Payment successful!",
            html: `<div className="flex justify-between items-center mb-5">
                <p className="text-2xl font-bold">Thanks for choosing us!</p>
                <p className="text-2xl font-bold">
                    Total cost: ${cartItems.reduce(
                        (acc, item) => acc + (item?.price || 0),
                        0
                    )}
                </p>
            </div>`,
            icon: "success",
            confirmButtonText: "Close",
        });
        secureLocalStorage.removeItem("gadgetHeavenCart");
        setCartItemsSlug([]);
    };

    const handleSortByPrice = () => {
        const sortedItems = [...cartItemsSlug].sort((a, b) => {
            const productA = products.find((product) => product.slug === a);
            const productB = products.find((product) => product.slug === b);
            return productA.price - productB.price;
        });
        setCartItemsSlug(sortedItems);
    };

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                <h2 className="text-base md:text-2xl font-bold">
                    Cart({cartItemsSlug.length})
                </h2>
                <div className="flex items-center gap-4">
                    <p className="font-bold text-base md:text-2xl">
                        Total cost: $
                        {cartItems.reduce(
                            (acc, item) => acc + (item?.price || 0),
                            0
                        )}
                    </p>
                    <Button
                        variant="outline"
                        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full font-semibold hover:font-medium"
                        onClick={handleSortByPrice}
                    >
                        Sort by Price <Sliders />
                    </Button>
                    <Button
                        className="bg-purple-600 rounded-full hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:border-2 font-medium hover:font-semibold"
                        onClick={handlePurchase}
                    >
                        Purchase
                    </Button>
                </div>
            </div>
            <div className="space-y-4">
                {cartItemsSlug.length === 0 ? (
                    <div>
                        <h1>No items in cart</h1>
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

export default Cart;
