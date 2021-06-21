import React from "react";

const DefaultCell = ({ text }) => <span>{text}</span>;

const Cell = ({ config, value, property }) => {
  // console.log(config);
  // console.log(config[property]);

  // let Val = undefined;
  // if (config[property]) {
  //     console.log(config[property]);

  const Val = config[property] || DefaultCell;
  // }

  return (
    <td>
      <Val text={value} />
    </td>
  );
};

export default Cell;
