import React from "react";
import { recommendationAlgorithm } from "../mock_data/backEndData";

const Results = ({ stockPrices }) => {
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
                {stockPrice.socialMediasCount.socialMedias.map(
                  (socialMedia) => (
                    <td>
                      {socialMedia.name}: {socialMedia.count}
                    </td>
                  )
                )}
                <td>
                  {recommendationAlgorithm(
                    stockPrice.price,
                    stockPrice.socialMediasCount.totalCount
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
