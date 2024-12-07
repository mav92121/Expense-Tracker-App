import React from "react";
import "./HeroChart.css";
import { PieChart, Pie, Cell, Legend } from "recharts";

const HeroChart = () => {
  const data = [
    { name: "Food", value: 400 },
    { name: "Entertainment", value: 300 },
    { name: "Travel", value: 300 },
  ];

  const COLORS = ["#A000FF", "#FF9304", "#FDE006"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="hero-chart">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={83}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="rect"
          wrapperStyle={{
            bottom: 78, // Remove default top margin
            // left: 0, // Remove default left margin
            // right: 0, // Remove default right margin
            // marginTop: 0, // Adjust this to decrease the gap
          }}
        />
      </PieChart>
    </div>
  );
};

export default HeroChart;
