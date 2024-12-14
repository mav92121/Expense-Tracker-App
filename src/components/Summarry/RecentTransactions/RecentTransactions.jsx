import React, { useState } from "react";
import "./RecentTransactions.css";
import Modal from "../../Modal/Modal";

const RecentTransactions = ({
  currentBalance,
  setCurrentBalance,
  expenseList,
  setExpenseList,
  handleDelete,
  handleAddExpense,
}) => {
  console.log("clist ", expenseList);
  const [editId, setEditId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("selected Id ", editId);
  return (
    <div>
      <h3 className="heading">Recent Transactions</h3>
      {expenseList?.length > 0 && (
        <div className="transactions-container">
          {expenseList.map((item, index) => (
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
                  <div>{item.name}</div>
                  <div className="date-color">{item.date}</div>
                </div>
              </div>
              <div className="transactions-right-section">
                <div className="orange-text bold">₹{item.amount}</div>
                <img
                  onClick={() => handleDelete(item.id)}
                  className="icons"
                  src="./delete-icon.png"
                  alt="delete"
                />
                <img
                  onClick={() => {
                    setIsModalVisible(true);
                    setEditId(item.id);
                  }}
                  className="icons"
                  src="./edit-icon.png"
                  alt="edit"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalVisible && (
        <Modal
          editId={editId}
          isExpense={true}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          expenseList={expenseList}
          handleAddExpense={handleAddExpense}
        />
      )}
    </div>
  );
};

export default RecentTransactions;
