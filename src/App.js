import React from 'react';

import { stockPriceGenerator, socialMediaCountGenerator } from './mock_data/backEndData';
// Components
import Header from './components/Header';

function App() {

  stockPriceGenerator();
  socialMediaCountGenerator();
  
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
