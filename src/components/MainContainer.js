import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, addPortfolio, portfolio, deletePortfolio, onSubmittedChange, onSelect}) {
  return (
    <div>
      <SearchBar onSubmittedChange={onSubmittedChange} onSelect={onSelect}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addPortfolio={addPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} deletePortfolio={deletePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
