import React from 'react';
import { recommendationAlgorithm } from "../mock_data/backEndData";

const Results = ({ stockPrices }) => {

    return( 
        <div>
            { stockPrices && 
                <div className="results">

                    { stockPrices.map( (stockPrice) => (
                     <div className="result">
                    <p>Date: {stockPrice.date}</p>
                    <p>Stock Price: {stockPrice.price}</p>

                    {stockPrice.socialMediasCount.socialMedias.map((socialMedia)=> (

                    <p>{socialMedia.name}: {socialMedia.count}</p>

                    ))}

                    <p> Social media total count: {stockPrice.socialMediasCount.totalCount} </p>
                    <p>Action: {recommendationAlgorithm(stockPrice.price, stockPrice.socialMediasCount.totalCount )}</p>
                    </div>
                    )
                    )}

                </div>
            }
        </div>

    );
}

export default Results;