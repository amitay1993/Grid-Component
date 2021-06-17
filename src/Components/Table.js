import React, {useEffect, useRef, useState} from 'react';
import Row from "./Row";
import _ from 'lodash';
import styled from "styled-components";
import { ChevronLeft,ChevronRight} from '@styled-icons/material'


function Table({fields, data, value, onChange}) {

    const headerNames = [];
    const configurations = {};
    let rows;

    const [ascendingOrder,setAscendingOrder]=useState(false)
    const [orderField, setOrderField] = useState();
    const [selectedRows, setSelectedRows] = useState([{}])


    useEffect(() => {
        let result;
        if (orderField) {
            result = _.orderBy(data, orderField, "asc");
        } else {
            result = _.orderBy(data, orderField, "desc");
        }
        onChange(result);
    }, [orderField])


    for (const key in fields) {
        headerNames.push(key);
        if (fields[key]) {
            for (const config in fields[key]) {
                configurations[key] = fields[key][config];
            }
        }
    }

    const changeSortingOrder = (key) => {
        setOrderField(key);
        setAscendingOrder(true);
    }


    const headers = headerNames.map(key =>
        <th>
            <span onClick={() => changeSortingOrder(key)}
                  className="sortIcon">{orderField === key && ascendingOrder  ? "⬆️" : " 🔽 "}</span> {key}
        </th>)


    rows = data.filter(object =>
        Object.values(object).toString().toLowerCase().includes(value)
    )

    // console.log(_.sortBy(rows, ['age']));

    function deepFreeze(o) {
        // "use strict";
        Object.keys(o).forEach((prop) => {
            if (typeof o[prop] === "object") deepFreeze(o[prop]);
        });
        return Object.freeze(o);
    }

    const handleCheckChange = () => {
        setSelectedRows()
    }


    const rowsData = rows.map(object =>
        <Row onChange={handleCheckChange} key={object.objectId} fields={fields} data={object} config={configurations}/>
    )

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
                    <ChevronLeft cursor="pointer" fontSize="20" color="blue" size="90px"/>
                    <ChevronRight cursor="pointer" fontSize="20" color="blue" size="90px"/>
                </ArrowsDiv>
                <p>Page 1 of 10</p>
            </FooterDiv>
        </TableDiv>

    );
}

const TableDiv=styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

`;

const ArrowsDiv=styled.div`
  display: flex;
  justify-content: center;
`;

const FooterDiv=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;



export default Table;