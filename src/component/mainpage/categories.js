import React from "react";

import CatDate from "../catDate";
const Categories = () => {
  // calling all categories data sources
  const data = CatDate();
  return (
    <div className="category">
      {data.map((val, idx) => {
        return (
          <div className="box f_flex " key={idx}>
            <img src={val.catImg} alt="" />
            <span>{val.catName}</span>
          </div>
        )
      })}
    </div>
  );
};

export default Categories;
