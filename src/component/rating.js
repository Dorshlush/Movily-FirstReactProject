import React from "react";

const Rating = (props) => {
  const { rating } = props;
  let rate = Math.round(rating);
  let stars = "";
  for (let i = 0; i < rate; i++) {
    stars += "⭐";
  }

  if (rate > rating) {
    stars += "-";
  } else {
    stars += "+";
  }

  return <div>{stars}</div>;
};

export default Rating;
