import React from "react";
import "./App.css";
import Header from "./components/Header";
import Blance from "./components/Blance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import AddTransecction from "./components/AddTransecction";
import { GlobelProvider } from "./context/GlobelState";
function App() {
  return (
    <GlobelProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Blance />
          <IncomeExpenses />
          <Transaction />
          <AddTransecction />
        </div>
      </div>
    </GlobelProvider>
  );
}

export default App;
