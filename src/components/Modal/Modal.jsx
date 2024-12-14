import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { ENTERTAINMENT, FOOD, TRAVEL } from "../../constants";

const Modal = ({ isModalVisible, setIsModalVisible, isExpense = false }) => {
  return (
    <div className="modal-container">
      <ReactModal
        className="modal"
        onRequestClose={() => setIsModalVisible(false)}
        isOpen={isModalVisible}
      >
        <h1 className="modal-heading">
          {isExpense ? "Add Expenses" : "Add Balance"}
        </h1>
        <div className="input-container-modal">
          {!isExpense && (
            <div>
              <input
                className="input"
                type="number"
                placeholder="income amount"
              />
            </div>
          )}
          {isExpense && (
            <div>
              <input className="input" type="text" placeholder="Text" />
            </div>
          )}
          {isExpense && (
            <div>
              <input className="input" type="number" placeholder="Price" />
            </div>
          )}
          {isExpense && (
            <div>
              <select className="select" name="Category" id="">
                <option value={FOOD}>{FOOD}</option>
                <option value={ENTERTAINMENT}>{ENTERTAINMENT}</option>
                <option value={TRAVEL}>{TRAVEL}</option>
              </select>
            </div>
          )}
          {isExpense && (
            <div>
              <input className="input" type="date" placeholder="Date" />
            </div>
          )}
          <div>
            <button
              className="hero-button"
              style={{ backgroundColor: "#F4BB4A" }}
            >
              {isExpense ? "Add Expense" : "Add Balance"}
            </button>
          </div>
          <div>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
