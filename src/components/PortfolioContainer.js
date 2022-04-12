import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, deletePortfolio}) {
  const portfolioDisplayed = portfolio.map( portObj => {
    return <Stock key={portObj.id} stock={portObj} deletePortfolio={deletePortfolio}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioDisplayed
      }
    </div>
  );
}

export default PortfolioContainer;
