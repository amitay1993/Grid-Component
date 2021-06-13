import React from 'react';
import Cell from "./Cell";

const Row = ({data, fields, config}) => {

    const row = [];
    row.push(
        <div className="inputDiv">
            <input className="checkbox" type="checkbox"/>
        </div>

    )
    for (const key in data) {
        if (fields.hasOwnProperty(key)) {
            row.push(<Cell  value={data[key]}/>);
        }
    }


    return (
        <tr>{row}</tr>
    );
};



export default Row;