import React from 'react';
import {ArrowDownward} from "@styled-icons/material";

function ArrowDown({value, changeSortingOrder, selected}) {
    return (

        <ArrowDownward cursor="pointer" fontSize="20" color={selected ? "red" : "white"} size="30px"
                       onClick={() => changeSortingOrder(value, false)}/>

    );
}

export default ArrowDown;