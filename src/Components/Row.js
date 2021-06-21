import React from 'react';
import Cell from "./Cell";


const Row = ({selected, config, data, fields, onChange}) => {


    const row = [];
    row.push(
        <td className="inputDiv">
            <input checked={selected} id={data.objectId} onChange={onChange} className="checkbox" type="checkbox"/>
        </td>
    )


    for (const key in data) {
        if (fields.hasOwnProperty(key)) {
            row.push(<Cell config={config} property={key} value={data[key]}/>);
        }
    }


    return (
        <tr data-select={selected}>{row}</tr>
    );
};


// const TableRow = styled.tr`
//   background-color: ${props => props.selected ? "rgba(148, 210, 189,0.2)" : "white"};
// `;


export default Row;