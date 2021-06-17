import React from 'react';
import Cell from "./Cell";
import styled from "styled-components";

const Row = ({data, fields,onChange}) => {


    const row = [];
    row.push(
        <div className="inputDiv" >
            <input onChange={onChange} className="checkbox" type="checkbox"/>
        </div>

    )



    for (const key in data) {
        if (fields.hasOwnProperty(key)) {
            row.push(<Cell value={data[key]}/>);
        }
    }


    return (
        <tr>{row}</tr>
    );
};



export default Row;