import React from 'react';

const Results = ({values, price, reco, socialMedia}) => {

    return( 
        <div>
            { price &&
                <div className="results">
                    <h2> {values.stockSymbol} </h2>
                    <p> {price}$ </p>
                    <h2> {values.socialMedia} </h2>
                    <p> {socialMedia} posts </p>
                    <h3> Recommended action </h3>
                    <p> {reco} </p>
                </div>
             }
        </div>

    );
}

export default Results;