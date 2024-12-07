import React, { useState } from "react";
import "./HeroTile.css";
import Modal from "../../Modal/Modal";

const HeroTile = ({ isExpense }) => {
  const title = isExpense ? "Expenses" : "Wallet Balance";
  const label = isExpense ? "Expense" : "Income";
  const money = isExpense ? 500 : 4500;
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="hero-tile">
      <div className="hero-tile-title">
        {`${title}: `}{" "}
        <span className={`${isExpense ? "orange-text" : "green-text"}`}>
          ₹{money}
        </span>
      </div>
      <button
        onClick={() => setIsModalVisible(true)}
        className={`hero-button ${
          isExpense ? "red-gradient" : "green-gradient"
        }`}
      >
        + Add {label}
      </button>
      {isModalVisible && (
        <Modal
          isExpense={isExpense}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      )}
    </div>
  );
};

export default HeroTile;
