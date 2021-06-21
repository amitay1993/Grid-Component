import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/material";
import debounce from "lodash/debounce";
import orderBy from "lodash/orderBy";
import chunk from "lodash/chunk";
import Table from "./Table";

function GridComponent({ value, fields }) {
  const [orderField, setOrderField] = useState({
    orderField: null,
    isAsc: false,
  });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const memoizedValue = useMemo(() => {
    let rows;
    let sortedArr = orderBy(
      value,
      orderField.orderField,
      orderField.isAsc ? "desc" : "asc"
    );
    if (searchTerm) {
      rows = sortedArr.filter((object) =>
        Object.values(object).toString().toLowerCase().includes(searchTerm)
      );
      rows = chunk(rows, fields.rowsPerPage);
      return rows;
    } else {
      return chunk(sortedArr, fields.rowsPerPage);
    }
  }, [value, fields.rowsPerPage, orderField, searchTerm]);

  const debouncedValue = useCallback(
    debounce((newValue) => setSearchTerm(newValue), 500),
    []
  );

  const handleSearch = (event) => {
    debouncedValue(event.target.value);
    //debounce(() => setSearchTerm(event.target.value), 500)();
  };
  //TODO:

  return (
    <DataContainer>
      <SearchConatiner>
        <input placeholder="search.." onChange={handleSearch} />
        <Search fontSize="20" color="white" size="50px" />
      </SearchConatiner>
      <Table
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        orderField={orderField}
        setSortingOrder={setOrderField}
        maxPages={memoizedValue.length}
        value={memoizedValue[currentIndex - 1]}
        fields={fields}
      />
    </DataContainer>
  );
}

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  background-color: whitesmoke;

  .checkbox {
    outline: 1px solid dimgray;
    margin: 0.5rem;
    width: 20px;
    height: 20px;
  }

  .inputDiv {
    display: flex;
    justify-content: center;
  }
`;

const SearchConatiner = styled.div`
  display: flex;
  height: 50px;
  background-color: #333;
  justify-content: center;

  input {
    border-radius: 5px;
    font-size: 15px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    margin: 0.3rem;
    background-color: #cccdd0;
    padding: 0.5rem;
  }
`;

export default GridComponent;
