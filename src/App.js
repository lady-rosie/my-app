import React, { useState, useEffect } from 'react';


import { stockPriceGenerator, socialMediaCountGenerator, recommendationAlgorithm } from './mock_data/backEndData';
// Components
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  
  const[stockPrice, setStockPrice] = useState(null)
  const[socialMediaCount, setSocialMediaCount] = useState(null)
  const[recommendation, setRecommendation] = useState(null)
  const[data, setData] = useState({})

  const onSubmit = data => {
    setData(data);
    setStockPrice(stockPriceGenerator(data.stockSymbol, data.date));
    setSocialMediaCount(socialMediaCountGenerator(data.socialMedia, data.stockSymbol));
  };

  // in a conditionalrecommendationAlgorithm(stockPrice, socialMedia)
  useEffect(()=> {
    if (stockPrice && socialMediaCount) {
      setRecommendation(recommendationAlgorithm(stockPrice,socialMediaCount));
     }
    }, [stockPrice, socialMediaCount]
  )

  // look up moment.js - useState / useEffect

  return (
    <div>
      <Header />
      <Form onSubmit={onSubmit} />
      <Results  values={data} reco={recommendation} price={stockPrice} socialMedia={socialMediaCount} />
      {/* <Table word=/> */}
    </div>
  );
}

export default App;
