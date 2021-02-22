import React, { useEffect, useState } from "react";
import { getColors } from "../helpers/getColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getColors()
      .then((res) => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("hello");

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
