// Stock price generator for a stock symbol and date
export const stockPriceGenerator = (stockSymbol, date) => {
     return (Math.random() * 100).toFixed(4);
};

// Social media count for a stock symbol and a social platform
export const socialMediaCountGenerator = (stockSymbol, socialMedia) => {
    return (Math.random() * 100).toFixed(2);
};

// Recommendations based on social media count and stock price
export const recommendationAlgorithm = (stockPrice, socialMediaCount) => {
    if((stockPrice / socialMediaCount) > 1.25 ) {
        return "Sell"
    } else if((stockPrice / socialMediaCount) < 0.80) {
        return "Buy"
    } else {
        return "Hold..."
    }
};

