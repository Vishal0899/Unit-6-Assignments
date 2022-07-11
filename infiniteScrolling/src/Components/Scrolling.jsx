import React, { useEffect, useState } from "react";
import style from "./Scrolling.css"

export const Scrolling = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleData(25);
  }, []);

  const handleData = (val) => {
    let x = count + 1;
    let a = val+count;
    let y = [];
    for (let i = x; i <= a; i++) {
        y.push(`Masai Student ${i}`);
    }
    setData(y);
    setCount(count + val);
  };
  
  const myFunction = () => {
        
  }
  
  console.log(data)
  console.log(count)
  return <div>
        <div className="Box" onScroll={myFunction}>
            {data?.map((item) => (
                <div className="box">
                    <h2>{item}</h2>
                </div>
            ))}
        </div>
  </div>;
};
