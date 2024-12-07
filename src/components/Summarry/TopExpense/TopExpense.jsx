import React from "react";
import "./TopExpense.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopExpense = () => {
  const data = [
    { name: "Entertainment", value: 400 },
    { name: "Food", value: 300 },
    { name: "Travel", value: 100 },
  ];

  return (
    <div>
      <h3 className="heading">Top Expense</h3>
      <div className="expense-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#9b88ff"
              radius={[0, 30, 30, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopExpense;
