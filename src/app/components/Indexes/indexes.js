import React from "react";
import { indexesData } from "../../staticdata/data";

const indexes = () => {
  return (
    <div className="row">
      {indexesData.map((li, ind) => {
        return (
          <div className="col-3">
            <div className="border border-light py-3 px-3 rounded-3 fs-6 shadow ">
              <div className="fw-semibold opacity-75 mb-2">{li.Bname}</div>
              <div>
                <span>{li.totalValue}</span>
                {/* Loss */}
                {li.loss ? (
                  <span className="ms-2 text-danger">-65.5</span>
                ) : (
                  <span className="ms-2 text-success">-65.5</span>
                )}
                <span
                  className={li.loss ? "text-danger ms-1" : "text-success ms-1"}
                >
                  {`(${li.LGpercent})`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default indexes;
