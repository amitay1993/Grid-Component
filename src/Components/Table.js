import React, {useEffect, useRef, useState} from 'react';
import Row from "./Row";
import _ from 'lodash';
import styled from "styled-components";
import {ChevronLeft, ChevronRight, ArrowUpward, ArrowDownward} from '@styled-icons/material'
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";


function Table({currentIndex, setCurrentIndex, fields, data, value, orderField, maxPages, setSortingOrder}) {

    const headerNames = [];
    const configurations = {};
    let rows;


    const [selectedRows, setSelectedRows] = useState([{}])


    for (const key in fields) {
        if (key !== "rowsPerPage") {
            headerNames.push(key);
        }
        if (fields[key]) {
            for (const config in fields[key]) {
                configurations[key] = fields[key][config];
            }
        }
    }

    const changeSortingOrder = (key, direction) => {
        setSortingOrder({orderField: key, isAsc: direction})
    }


    const headers = headerNames.map(key => {
        return <th>
            <ArrowUp selected={orderField.orderField === key && orderField.isAsc} value={key}
                     changeSortingOrder={changeSortingOrder}/>
            <ArrowDown selected={orderField.orderField === key && !orderField.isAsc} value={key}
                       changeSortingOrder={changeSortingOrder}/>
            {key}
        </th>;
    })

    rows = data.filter(object =>
        Object.values(object).toString().toLowerCase().includes(value)
    )

    // console.log(_.sortBy(rows, ['age']));

    const handleCheckChange = () => {
        setSelectedRows()
    }


    const rowsData = rows.map(object =>
        <Row onChange={handleCheckChange} key={object.objectId} fields={fields} data={object} config={configurations}/>
    )


    function deepFreeze(o) {
        // "use strict";
        Object.keys(o).forEach((prop) => {
            if (typeof o[prop] === "object") deepFreeze(o[prop]);
        });
        return Object.freeze(o);
    }


    return (
        <TableDiv>
            <table>
                <thead>
                <tr>
                    {headers}
                </tr>
                </thead>
                <tbody>
                {rowsData}
                </tbody>
            </table>
            <FooterDiv>
                <ArrowsDiv>


                    <ChevronLeft cursor="pointer" fontSize="20" color="blue" size="90px"
                                 onClick={() => setCurrentIndex(currentIndex - 1)}/>
                    <ChevronRight cursor="pointer" fontSize="20" color="blue" size="90px"
                                  onClick={() => setCurrentIndex(currentIndex + 1)}/>
                </ArrowsDiv>
                <p>Page {currentIndex} of {maxPages}</p>
            </FooterDiv>
        </TableDiv>

    );
}

const ArrowButton = styled.button`
  background-color: tan;

  border-radius: 50%;
`;

const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

`;

const ArrowsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export default Table;