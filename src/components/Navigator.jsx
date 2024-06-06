import React from "react";

const Navigator = ({ pageName = "", items = [] }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold">{pageName}</h1>
      <div className="text-sm breadcrumbs">
        <ul>
          {items &&
            items.map((item, index) => {
              return (
                <li key={index}>
                  <a>{item}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
