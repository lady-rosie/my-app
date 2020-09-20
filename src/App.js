import React, { useState } from "react";
import moment from "moment";

//import mock data
import { stockPriceGenerator } from "./mock_data/backEndData";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import TimeWindow from "./components/TimeWindow";


function App() {
  const [stockPrice, setStockPrice] = useState(null);
  
  const [socialMediaObj, setSocialMediaCount] = useState({
    socialMedias:    [
      { name: "Twitter", count: 0 },
      { name: "Facebook", count: 0 },
      { name: "LinkedIn", count: 0 },
    ],
    totalCount: 0
  }
 );
  
  const onSubmit = (data) => {
    setStockPrice(stockPriceGenerator(data.stockSymbol, socialMediaObj, moment()));
  };


  return (
    <div>
      <Header />
      <div className="infos">
      <Form onSubmit={onSubmit} />
      <TimeWindow />
      </div>
      <Results stockPrices={stockPrice} />
    </div>
  );
}

export default App;
