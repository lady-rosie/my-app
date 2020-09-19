import React from 'react';

const Results = ({values, price, reco, socialMedia}) => {

    return( 
        <div className="results">
            <div>
                <h2> {values.stockSymbol} </h2>
                <p> {price}$ </p>
            </div>
            <div>
                <h2> {values.socialMedia} </h2>
                <p> {socialMedia} posts </p>
            </div>
            <div>
                <h3> Recommended action </h3>
                <p> {reco} </p>
            </div>
        </div>

    );
}

export default Results;