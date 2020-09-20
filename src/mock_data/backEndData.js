import moment from "moment";

// Social media count for a stock symbol and a social platform
export const socialMediaCountGenerator = (stockSymbol, socialMediaObj) => {
  if (socialMediaObj) {
    socialMediaObj.socialMedias.map((socialMedia) => {
      socialMedia.count = parseInt((Math.random() * 100).toFixed());
    });

    socialMediaObj.totalCount = socialMediaObj.socialMedias.reduce(
      (prev, cur) => {
        return prev + cur.count;
      },
      0
    );
  }
  return socialMediaObj;
};

// Stock price generator for a stock symbol and date
export const stockPriceGenerator = (stockSymbol, socialMedias, date) => {
  let now = date;
  let dateEnd = moment().add(10, "days");
  let resultsArr = [];

  while (moment(now).isBefore(dateEnd)) {
    resultsArr.push({
      date: moment(now).format("MM DD YYYY"),
      price: (Math.random() * 100).toFixed(2),
      stockSymbol: stockSymbol,
      // socialMediasCount: socialMediaCountGenerator(stockSymbol, socialMedias),
    });
    now.add(1, "day");
  }

  return resultsArr;
};

// Recommendations based on social media count and stock price
export const recommendationAlgorithm = (stockPrice, socialCount, risk) => {
 
  let stockPriceInteger = parseInt(stockPrice);

  if ((stockPriceInteger / socialCount) < (risk ? (risk*0.6) : 0.6)) {
    return "Sell";
  } else if ((stockPriceInteger / socialCount) > (risk ? (risk*0.9) : 0.9)) {
    return "Buy";
  } else {
    return "Hold...";
  }
};
