import React from "react";

function Stock({stock, addPortfolio, deletePortfolio}) {

  function handleClick(e){
    if(addPortfolio){
      addPortfolio(e)
    } else if (deletePortfolio){
      deletePortfolio(e)
    }

  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
