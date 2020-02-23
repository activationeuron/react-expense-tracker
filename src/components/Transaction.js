import React, { useContext } from "react";
import { GlobelContext } from "../context/GlobelState";
import Amount from "./AmmountEle";
function Transaction() {
  const { transaction } = useContext(GlobelContext);
  console.log(transaction);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map(trans => (
          <Amount key={trans.id} trans={trans}></Amount>
        ))}
      </ul>
    </>
  );
}

export default Transaction;
