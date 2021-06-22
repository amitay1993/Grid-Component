import React from "react";
import Cell from "./Cell";

const Row = ({ selected, value, columnDefinitions, onChange }) => {
  const row = [];
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
    if (columnDefinitions.hasOwnProperty(key)) {
      row.push(
        <Cell
          columnDefinitions={columnDefinitions}
          property={key}
          value={value[key]}
        />
      );
    }
  }

  return <tr data-select={selected}>{row}</tr>;
};

export default Row;
