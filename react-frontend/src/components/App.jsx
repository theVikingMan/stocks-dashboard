import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [stockPriceData, setStockPriceData] = useState([]);

  function getStockPriceData() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/stocks',
    })
      .then(({ data }) => {
        console.log(data);
        // eslint-disable-next-line no-shadow
        setStockPriceData((stockPriceData) => [...stockPriceData, data]);
        console.log(stockPriceData);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.status);
      });
  }

  return (
    <div>
      Stock prices for HUP:
      <p>To get your profile details: </p>
      <button type="submit" onClick={getStockPriceData}>Click me</button>
      {stockPriceData ? stockPriceData.map((price) => (
        <ul key={price}>
          {price.name}
        </ul>
      )) : <div>Loading...</div>}
    </div>
  );
}
