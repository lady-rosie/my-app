import React, { useState } from 'react';


import { stockPriceGenerator, socialMediaCountGenerator, recommendationAlgorithm } from './mock_data/backEndData';
// Components
import Header from './components/Header';
import Form from './components/Form';

function App() {
  
  const[stockPrice, setStockPrice] = useState(null)
  const[socialMediaCount, setSocialMediaCount] = useState(null)

  const onSubmit = data => {
    setStockPrice(stockPriceGenerator(data.stockSymbol, data.date));
    setSocialMediaCount(socialMediaCountGenerator(data.socialMedia, data.stockSymbol));
  };

  // in a conditionalrecommendationAlgorithm(stockPrice, socialMedia)
  if (stockPrice && socialMediaCount) {
   (recommendationAlgorithm(stockPrice,socialMediaCount));
  }
  // look up moment.js - useState / useEffect

  
  return (
    <div>
      <Header />
      <Form onSubmit={onSubmit} />
      {/* <Table word=/> */}
    </div>
  );
}

export default App;
