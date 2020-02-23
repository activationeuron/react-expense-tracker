import React, { useState, useContext } from "react";
import { GlobelContext } from "../context/GlobelState";

function AddTransecction() {
  const [Text, setText] = useState("");
  const [amt, setAmt] = useState(0);
  const { addTransection } = useContext(GlobelContext);

  const onSumbit = e => {
    e.preventDefault();
    const newTransection = {
      id: Math.floor(Math.random() * 1000000),
      text: Text,
      amount: +amt
    };
    addTransection(newTransection);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSumbit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={Text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amt}
            onChange={e => setAmt(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransecction;
