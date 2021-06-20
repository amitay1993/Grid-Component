import React from 'react';
import {ArrowUpward} from "@styled-icons/material";


function ArrowUp({value, changeSortingOrder, selected}) {

    return (

        <ArrowUpward cursor="pointer" fontSize="20" color={ selected ? "green" : "white"} size="30px"
                     onClick={() => changeSortingOrder(value, true)}/>
    );
}


export default ArrowUp;