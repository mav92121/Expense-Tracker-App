import React from "react";
import "./RecentTransactions.css";

const RecentTransactions = () => {
  const data = [
    {
      title: "Samosa",
      price: "150",
      category: "Food",
      date: "20/03/2024",
    },
    {
      title: "Movie",
      price: "300",
      category: "Entertainment",
      date: "21/03/2024",
    },
    {
      title: "Auto",
      price: "150",
      category: "Travel",
      date: "20/03/2024",
    },
  ];
  return (
    <div>
      <h3 className="heading">Recent Transactions</h3>
      <div className="transactions-container">
        {data.map((item, index) => (
          <div key={index} className="transaction">
            <div className="transactions-left-section">
              <div>
                <img
                  className="category-icon"
                  src={`./${item.category}.png`}
                  alt="icon"
                />
              </div>
              <div>
                <div>{item.title}</div>
                <div className="date-color">{item.date}</div>
              </div>
            </div>
            <div className="transactions-right-section">
              <div className="orange-text bold">₹{item.price}</div>
              <img className="icons" src="./delete-icon.png" alt="delete" />
              <img className="icons" src="./edit-icon.png" alt="edit" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
