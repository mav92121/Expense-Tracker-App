import React from "react";
import "./HeroTile.css";

const HeroTile = ({ isExpense }) => {
  const title = isExpense ? "Expenses" : "Wallet Balance";
  const label = isExpense ? "Expense" : "Income";
  const money = isExpense ? 500 : 4500;
  return (
    <div className="hero-tile">
      <div className="hero-tile-title">
        {`${title}: `}{" "}
        <span className={`${isExpense ? "orange-text" : "green-text"}`}>₹{money}</span>
      </div>
      <button
        className={`hero-button ${
          isExpense ? "red-gradient" : "green-gradient"
        }`}
      >
        + Add {label}
      </button>
    </div>
  );
};

export default HeroTile;
