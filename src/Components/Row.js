import React from "react";
import Cell from "./Cell";

const Row = ({ selected, config, value, fields, onChange }) => {
  const row = [];
  // console.log(value);
  row.push(
    <td className="inputDiv">
      <input
        checked={selected}
        id={value.objectId}
        onChange={onChange}
        className="checkbox"
        type="checkbox"
      />
    </td>
  );

  for (const key in value) {
    if (fields.hasOwnProperty(key)) {
      // console.log(value[key]);
      // console.log(key);
      row.push(<Cell config={config} property={key} value={value[key]} />);
    }
  }

  return <tr data-select={selected}>{row}</tr>;
};

export default Row;
