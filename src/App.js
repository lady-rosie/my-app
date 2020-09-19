import React from 'react';

import { stockPriceGenerator, socialMediaCountGenerator } from './mock_data/backEndData';
// Components
import Header from './components/Header';
import Form from './components/Form';

function App() {

  stockPriceGenerator();
  socialMediaCountGenerator();
  
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
}

export default App;
