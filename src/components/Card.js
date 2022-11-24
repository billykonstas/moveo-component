import "./Card.css";
import Description from "./Description";
import Image from "./Image";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Card = () => {

  const [data, setData] = useState(null);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    const getCharacters = async function () {
      const baseURL = "https://random-data-api.com/api/v2/users";
      const response = await axios.get(baseURL);
      setData(response.data);
      setIsData(true);
    };
    getCharacters();
  }, []);

  return (
    <div className="card">
      {isData && <Image data={data}/>}
      {isData && <Description data={data}/>}
    </div>
  );
};

export default Card;
