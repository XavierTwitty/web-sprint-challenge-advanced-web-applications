import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "../helpers/getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    getColors()
      .then((res) => {
        console.log("Colors", res);
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

let x = 3;
export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
