import React, { useContext } from "react";
import { GlobelContext } from "../context/GlobelState";

function Amount({ trans }) {
  const { deleteTransectionn } = useContext(GlobelContext);
  const sign = trans.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={trans.amount < 0 ? "minus" : "plus"}>
        {" "}
        {trans.text}{" "}
        <span>
          {sign}${Math.abs(trans.amount)}
        </span>{" "}
        <button
          className="delete-btn"
          onClick={() => deleteTransectionn(trans.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default Amount;
