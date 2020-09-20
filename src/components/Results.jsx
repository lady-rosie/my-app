import React from "react";
import {
  socialMediaCountGenerator,
  recommendationAlgorithm,
} from "../mock_data/backEndData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Results = ({ stockPrices, socialMediaList, risk }) => {
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
          {stockPrices.map((stockPrice, index) => (
            <tr key={index}>
              <td>{stockPrice.date}</td>
              <td>{stockPrice.price}$</td>

              {socialMediaCountGenerator(
                stockPrice.stockSymbol,
                socialMediaList
              ).socialMedias.map((socialMedia,index) => (
                <td key={index}>
                  <FontAwesomeIcon icon={['fab', socialMedia.icon]}/> {socialMedia.count}
                </td>
              ))}

              <td className="reco">
                {recommendationAlgorithm(
                  stockPrice.price,
                  socialMediaList.totalCount, risk
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
