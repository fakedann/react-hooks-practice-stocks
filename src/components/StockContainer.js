import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addPortfolio}) {

  const stocksDisplayed = stocks.map( stockObj => {
    return <Stock addPortfolio={addPortfolio} key={stockObj.id} stock={stockObj}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stocksDisplayed}
    </div>
  );
}

export default StockContainer;
