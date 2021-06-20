import React, {useState} from 'react';
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
    let objectIds = [];


    const [selectedRows, setSelectedRows] = useState([])


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
        return (
            <th>
                <ArrowUp selected={orderField.orderField === key && orderField.isAsc} value={key}
                         changeSortingOrder={changeSortingOrder}/>
                <ArrowDown selected={orderField.orderField === key && !orderField.isAsc} value={key}
                           changeSortingOrder={changeSortingOrder}/>
                {key}
            </th>
        );
    })

    rows = data.filter(object =>
        Object.values(object).toString().toLowerCase().includes(value)
    )

    // console.log(_.sortBy(rows, ['age']));

    const handleCheckChange = (event) => {
        const rowId = event.target.id;
        setSelectedRows(prevState => {
            if (prevState.includes(rowId)) {
                return [...prevState].filter(id => id !== rowId);
            } else {
                return [...prevState, rowId];
            }
        })
    }


    const rowsData = rows.map(object => {
            objectIds.push(object.objectId);
            return <Row selected={selectedRows.includes(object.objectId)} onChange={handleCheckChange} key={object.objectId}
                        fields={fields} data={object} config={configurations}/>
        }
    )


    const numberOfSelectedItemsPerPage = _.intersection(selectedRows, objectIds);
    console.log(numberOfSelectedItemsPerPage)


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
                <tfoot>
                <tr>
                    <td colSpan={headerNames.length}>
                        <div>
                            Items selected {numberOfSelectedItemsPerPage.length}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={headerNames.length}>
                        <div>
                            <ChevronLeft cursor={currentIndex > 1 ? "pointer" : "default"} fontSize="20"
                                         color={currentIndex > 1 ? "blue" : "grey"}
                                         size="90px"
                                         onClick={() => setCurrentIndex(currentIndex > 1 ? currentIndex - 1 : currentIndex)}/>
                            <ChevronRight cursor={currentIndex < maxPages ? "pointer" : "default"} fontSize="20"
                                          color={currentIndex < maxPages ? "blue" : "grey"} size="90px"
                                          onClick={() => setCurrentIndex(currentIndex < maxPages ? currentIndex + 1 : currentIndex)}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={headerNames.length}>
                        <div>
                            <p>Page {currentIndex} of {maxPages}</p>
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>

        </TableDiv>

    );
}

// const ArrowButton = styled.button`
//   background-color: tan;
//   border-radius: 50%;
// `;

const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  & tbody tr:nth-child(odd) {
    background-color: rgba(148, 210, 189, 0.2);
  }

  & tbody tr[data-select=true] {
    background-color: rgba(97, 141, 130, 0.8);
  }

  & div {
    display: flex;
    justify-content: center;
  }
`;

// const ItemSelectedDiv = styled.tr`
//   display: flex;
//   justify-content: center;
// `;
//
//
// const ArrowsDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;


export default Table;