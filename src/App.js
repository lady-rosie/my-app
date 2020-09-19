import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  stockPriceGenerator,
  socialMediaCountGenerator,
  recommendationAlgorithm,
} from "./mock_data/backEndData";
// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [stockPrice, setStockPrice] = useState(null);
  
  const [socialMediaObj, setSocialMediaCount] = useState({
    socialMedias:    [
      { name: "Twitter", count: 0 },
      { name: "Facebook", count: 0 },
      { name: "Instagram", count: 0 },
    ],
    totalCount: 0
  }
 );
  // const [recommendation, setRecommendation] = useState(null);
  
  
  const onSubmit = (data) => {
    setStockPrice(stockPriceGenerator(data.stockSymbol, socialMediaObj, moment()));
   console.log(recommendationAlgorithm(stockPrice, socialMediaObj));
  };


  
  // in a conditionalrecommendationAlgorithm(stockPrice, socialMedia)
   

  // look up moment.js - useState / useEffect

  return (
    <div>
      <Header />
      <Form onSubmit={onSubmit} />
      <Results
        // values={data}
        // reco={recommendation}
        price={stockPrice}
        socialMedia={socialMediaObj}
      />
      {/* <Table word=/> */}
    </div>
  );
}

export default App;
