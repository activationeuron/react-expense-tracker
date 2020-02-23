import React, { useContext } from "react";
import { GlobelContext } from "../context/GlobelState";
function Blance() {
  const { transaction } = useContext(GlobelContext);
  const amoun = transaction.map(transaction => transaction.amount);
  const total = amoun.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance </h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}

export default Blance;
