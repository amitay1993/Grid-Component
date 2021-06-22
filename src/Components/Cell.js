import React from "react";

const DefaultCell = ({ text }) => <span>{text}</span>;

const Cell = ({ columnDefinitions, value, property }) => {
  let component;

  if (
    columnDefinitions.hasOwnProperty(property) &&
    columnDefinitions[property]
  ) {
    component = columnDefinitions[property].component;
  }

  const Val = component || DefaultCell;

  return (
    <td>
      <Val text={value} />
    </td>
  );
};

export default Cell;
