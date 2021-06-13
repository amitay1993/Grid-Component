import React from 'react';
import Row from "./Row";


function Table({fields, data}) {

    const headerNames = [];
    const configurations = {};


    for (const key in fields) {
        headerNames.push(key);
        if (fields[key]) {
            for (const config in fields[key]) {
                configurations[key] = fields[key][config];
            }
        }

    }
    const headers = headerNames.map(key => <th>{key}</th>)
    const rows = data.map(object =>
        <Row key={object.objectId} fields={fields} data={object} config={configurations}/>
    )


    return (

        <table>
            <thead>
            <tr>
                {headers}
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>

        </table>

    );
}


export default Table;