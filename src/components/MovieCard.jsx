import React from "react";
import { CARD_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-48 ms-5">
      <img alt="Card" src={CARD_URL + posterpath}></img>
    </div>
  );
};

export default MovieCard;
