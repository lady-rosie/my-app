import moment from "moment";

// Social media count for a stock symbol and a social platform
export const socialMediaCountGenerator = (stockSymbol, socialMediaObj) => {
  let updatedSocialMedia = {};

  if (socialMediaObj) {
    updatedSocialMedia = socialMediaObj.socialMedias.map((socialMedia) => {
      socialMedia.count = (Math.random() * 100).toFixed(2);
    });

    socialMediaObj.totalCount = socialMediaObj.socialMedias.reduce(
      (prev, cur) => {
        return prev + cur.count;
      },
      0
    );
    return socialMediaObj;
  }
  return updatedSocialMedia;
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
      socialMediasCount: socialMediaCountGenerator(stockSymbol, socialMedias),
    });
    now.add(1, "day");
  }
  return resultsArr;
};

// Recommendations based on social media count and stock price
export const recommendationAlgorithm = (stockPrice, socialMediaObj) => {
  if (stockPrice / socialMediaObj.totalCount > 1.2) {
    return "Sell";
  } else if (stockPrice / socialMediaObj.totalCount < 0.6) {
    return "Buy";
  } else {
    return "Hold...";
  }
};
