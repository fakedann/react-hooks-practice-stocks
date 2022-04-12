import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [admin, setAdmin] = useState(false)
  useEffect( () => {
    fetch('http://localhost:3001/stocks')
    .then( data => data.json())
    .then( stocks => setStocks(stocks))
  }, [])

  function addPortfolio(e){
    let target = e.target.querySelector('.card-title').innerText
    console.log(target)
    let newStock = stocks.find( stockObj => {
      return stockObj.name === target
    })
    setPortfolio([...portfolio, newStock])
    
  }

  function deletePortfolio(e){
    let target = e.target.querySelector('.card-title').innerText
    const filteredPortfolio = portfolio.filter( portObj => {
      return portObj.name !== target
    })
    setPortfolio(filteredPortfolio)
  }

  function onSubmittedChange(e){
    console.log(e)
    if(e === 'Alphabetically'){
      stocks.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    }else {
      stocks.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }
   
    setStocks([...stocks])
  }

  function onSelect(e){
    const filteredStocks = stocks.filter( stockObj => {
      return stockObj.type === e.target.value
    })
    setStocks(filteredStocks)
  }

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} addPortfolio={addPortfolio} portfolio={portfolio} deletePortfolio={deletePortfolio}onSubmittedChange={onSubmittedChange} onSelect={onSelect}/>
    </div>
  );
}

export default App;
