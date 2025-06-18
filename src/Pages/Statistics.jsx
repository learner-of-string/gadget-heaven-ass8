import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from "recharts";
import products from "../Constants/db.js";
import { useState, useEffect } from "react";

const data = products.map((product) => ({
    name: product.name,
    price: product.price,
    rating: Math.log(product.rating) * 20000 + 10000,
}));

const Statistics = () => {
    const [chartDimensions, setChartDimensions] = useState({
        width: 1000,
        height: 500,
        barSize: 50,
        scatterRadius: 6,
        xAxisAngle: -45,
        xAxisHeight: 120,
        fontSize: 12,
    });

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setChartDimensions({
                    width: 400,
                    height: 400,
                    barSize: 15,
                    scatterRadius: 3,
                    xAxisAngle: -90,
                    xAxisHeight: 120,
                    fontSize: 8,
                });
            } else if (width < 1024) {
                setChartDimensions({
                    width: 700,
                    height: 500,
                    barSize: 35,
                    scatterRadius: 5,
                    xAxisAngle: -45,
                    xAxisHeight: 120,
                    fontSize: 11,
                });
            } else {
                setChartDimensions({
                    width: 1000,
                    height: 500,
                    barSize: 50,
                    scatterRadius: 6,
                    xAxisAngle: -45,
                    xAxisHeight: 120,
                    fontSize: 12,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-purple-600 text-center">
                Statistics
            </h2>
            <div className="flex justify-center overflow-x-auto">
                <ComposedChart
                    width={chartDimensions.width}
                    height={chartDimensions.height}
                    data={data}
                    className="max-w-full"
                >
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
                        angle={chartDimensions.xAxisAngle}
                        textAnchor="end"
                        height={chartDimensions.xAxisHeight}
                        interval={0}
                        fontSize={chartDimensions.fontSize}
                        tick={{ fontSize: chartDimensions.fontSize }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => {
                            if (chartDimensions.width <= 400) {
                                // Truncate long names on mobile
                                return value.length > 12
                                    ? value.substring(0, 12) + "..."
                                    : value;
                            }
                            return value;
                        }}
                    />
                    <YAxis
                        tickFormatter={(value) =>
                            `৳${(value / 1000).toFixed(0)}k`
                        }
                        fontSize={chartDimensions.fontSize}
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
                        barSize={chartDimensions.barSize}
                    />
                    <Scatter
                        dataKey="rating"
                        fill="#FF0000"
                        name="Rating"
                        r={chartDimensions.scatterRadius}
                    />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;
