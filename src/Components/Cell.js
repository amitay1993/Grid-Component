import React from "react";

const DefaultCell = ({ text }) => <span>{text}</span>;

const Cell = ({ config, value, property }) => {
  let component;

  if (config.hasOwnProperty(property) && config[property]) {
    component = config[property].component;
  }
  // let Val = undefined;
  // if (config[property]) {
  //     console.log(config[property]);

  const Val = component || DefaultCell;
  // }

  return (
    <td>
      <Val text={value} />
    </td>
  );
};

export default Cell;
