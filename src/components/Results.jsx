import React from "react";
import {
  socialMediaCountGenerator,
  recommendationAlgorithm,
} from "../mock_data/backEndData";

const Results = ({ stockPrices, socialMediaList }) => {
  return (
    <div className="results">
      {stockPrices && (
        <table>
          <tr>
            <th>Date</th>
            <th>Stock price</th>
            <th colspan="3">Social media posts count</th>
            <th>Recommended action</th>
          </tr>
          {stockPrices.map((stockPrice) => (
            <tr>
              <td>{stockPrice.date}</td>
              <td>{stockPrice.price}$</td>

              {socialMediaCountGenerator(
                stockPrice.stockSymbol,
                socialMediaList
              ).socialMedias.map((socialMedia) => (
                <td>
                  {socialMedia.name}: {socialMedia.count}
                </td>
              ))}

              <td>
                {recommendationAlgorithm(
                  stockPrice.price,
                  socialMediaList.totalCount
                )}
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Results;
