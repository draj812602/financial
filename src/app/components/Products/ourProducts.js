import React from "react";
import { ProductsData } from "../../staticdata/data";

const ourProducts = () => {
  return (
    <div className="row px-3 py-3 rounded-4 fs-5 m-2 shadow-lg ">
      {ProductsData.map((li, ind) => {
        return (
          <div className="col-2 text-center products_display_class">
            <div className="fs-5">Img</div>
            <br />
            <div className="fs-5 text-dark">{li.productName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ourProducts;
