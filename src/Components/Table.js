import React, {useEffect, useRef, useState} from 'react';
import Row from "./Row";
import _ from 'lodash';


function Table({fields, data, value, onChange}) {

    const headerNames = [];
    const configurations = {};
    let rows;


    const [orderField, setOrderField] = useState();


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

    function changeSortingOrder(key) {
        setOrderField(key);
    }


    const headers = headerNames.map(key =>
        <th>
            <span onClick={() => changeSortingOrder(key)}
                  className="sortIcon">{orderField === key ? "⬆️" : " 🔽 "}</span> {key}
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


    const rowsData = rows.map(object =>
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
            {rowsData}
            </tbody>
        </table>

    );
}


export default Table;