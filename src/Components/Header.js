import React from "react";
import styled from "styled-components";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";

function Header({ value, orderField, columnDefinitions, changeSortingOrder }) {
  let label;
  if (columnDefinitions.hasOwnProperty(value) && columnDefinitions[value]) {
    label = columnDefinitions[value].label;
  }

  return (
    <TableHeader color={columnDefinitions.style.thead.color}>
      <ArrowUp
        selected={orderField.orderField === value && orderField.isAsc}
        value={value}
        changeSortingOrder={changeSortingOrder}
      />
      <ArrowDown
        selected={orderField.orderField === value && !orderField.isAsc}
        value={value}
        changeSortingOrder={changeSortingOrder}
      />
      {label || value}
    </TableHeader>
  );
}

const TableHeader = styled.th`
  border-radius: 2px;
  font-size: 20px;
  border: dimgray;
  padding: 0.5rem;
  background-color: ${(props) => props.color || "rgba(0, 95, 115, 0.5)"};
`;

export default Header;
