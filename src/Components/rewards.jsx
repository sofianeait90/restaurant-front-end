import { getCountry } from "../Services/countryServices";
// import React, { useState, useEffect } from "react";

const Rewards = () => {
  const loadData = async () => {
    const Data = await getCountry();
    console.log(Data.data);
  };
  return (
    <div>
      <button onClick={() => loadData()}>test</button>
      <h1>rewards</h1>
    </div>
  );
};

export default Rewards;
