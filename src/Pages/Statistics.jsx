import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from "recharts";
import products from "../Constants/db.js";

const data = products.map((product) => ({
    name: product.name,
    price: product.price,
    rating: Math.log(product.rating) * 20000 + 10000,
}));

const Statistics = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-purple-600">
                Statistics
            </h2>
            <div className="flex justify-center">
                <ComposedChart width={1000} height={500} data={data}>
                    <defs>
                        <linearGradient
                            id="background"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#efe1fb"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#efe1fb"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={120}
                        interval={0}
                    />
                    <YAxis
                        tickFormatter={(value) =>
                            `৳${(value / 1000).toFixed(0)}k`
                        }
                    />
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === "Rating") {
                                const originalRating = Math.exp(
                                    (value - 10000) / 20000
                                );
                                return [originalRating.toFixed(2), "Rating"];
                            }
                            return [value, name];
                        }}
                    />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="price"
                        fill="url(#background)"
                        stroke="none"
                    />
                    <Bar
                        dataKey="price"
                        fill="#9538e2"
                        name="Price (৳)"
                        barSize={50}
                    />
                    <Scatter
                        dataKey="rating"
                        fill="#FF0000"
                        name="Rating"
                        r={6}
                    />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;
