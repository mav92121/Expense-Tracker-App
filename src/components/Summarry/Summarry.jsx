import React from "react";
import "./Summary.css";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import TopExpense from "./TopExpense/TopExpense";

const Summarry = () => {
  return (
    <div className="summary-container">
      <RecentTransactions />
      <TopExpense />
    </div>
  );
};

export default Summarry;
