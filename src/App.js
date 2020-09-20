import React, { useState } from "react";
import moment from "moment";

//import mock data
import { stockPriceGenerator } from "./mock_data/backEndData";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import TimeWindow from "./components/TimeWindow";
import SocialMediasInfos from "./components/SocialMediasInfos";


function App() {
  const [stockPrice, setStockPrice] = useState(null);
  
  const socialMediaObj = {
    socialMedias:    [
      { name: "Twitter", count: 0, icon: "twitter" },
      { name: "Facebook", count: 0, icon: "facebook-square" },
      { name: "LinkedIn", count: 0, icon: "linkedin"},
    ],
    totalCount: 0
  }
  
  const onSubmit = (data) => {
    setStockPrice(stockPriceGenerator(data.stockSymbol, socialMediaObj, moment()));
  };


  return (
    <div>
      <Header />
      <div className="infos">
      <Form onSubmit={onSubmit} />
      <SocialMediasInfos socialMediaList={socialMediaObj}/>
      <TimeWindow />
      </div>
      <Results stockPrices={stockPrice} socialMediaList={socialMediaObj}  />
    </div>
  );
}

export default App;
