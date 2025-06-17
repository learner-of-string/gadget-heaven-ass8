import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cart from "./Dashbaord/Cart";
import Wishlist from "./Dashbaord/Wishlist";

const Dashboard = () => {
    return (
        <div>
            <div>
                <Tabs defaultValue="cart">
                    <div className="bg-purple-600 py-8 px-60 space-y-5">
                        <h1 className="text-3xl font-bold text-center text-white">
                            Dashboard
                        </h1>
                        <p className="text-lg text-center text-white">
                            Explore the latest gadgets that will take your
                            experience to the next level. From smart devices to
                            the coolest accessories, we have it all!
                        </p>
                        <div className="flex justify-center items-center">
                            <TabsList className="bg-purple-600 border border-white rounded-full p-0">
                                <TabsTrigger
                                    value="cart"
                                    className="bg-purple-600 text-white rounded-full data-[state=active]:bg-white data-[state=active]:text-purple-600 px-5 py-4 font-bold text-xl"
                                >
                                    Cart
                                </TabsTrigger>
                                <TabsTrigger
                                    value="wishlist"
                                    className="bg-purple-600 text-white rounded-full data-[state=active]:bg-white data-[state=active]:text-purple-600 px-5 py-4 font-bold text-xl"
                                >
                                    Wishlist
                                </TabsTrigger>
                            </TabsList>
                        </div>
                    </div>

                    <TabsContent value="cart">
                        <Cart />
                    </TabsContent>
                    <TabsContent value="wishlist">
                        <Wishlist />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
