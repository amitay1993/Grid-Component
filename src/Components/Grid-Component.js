import React from 'react';
import Data from "./Data";
import styled from "styled-components";
import {Search} from '@styled-icons/material'

function GridComponent({data, fields}) {


    //const rows = data.map(row => <Data value={row}/>)

    const headerNames = [];

    for (const key in fields) {
        headerNames.push(fields[key]);
    }
    const headers = headerNames.map(key => <th>{key}</th>)


    return (
        <DatContainer>
            <InputDiv>
                <input placeholder="search.."/>
                <Search fontSize="20" color="white" size="50px"/>
            </InputDiv>

            {/*<Headers>*/}
            <table>
                <thead>
                <tr>
                    {headers}
                </tr>
                </thead>
            </table>
            {/*</Headers>*/}
        </DatContainer>
    );
}

const DatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  background-color: whitesmoke;


  th{
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    padding: 0.2rem;
    font-size: 20px;
    border:dimgray;
  }
`;

const InputDiv = styled.div`
  display: flex;
  height: 50px;
  background-color: #333;
  justify-content: center;

  input {
    border-radius: 5px;
    font-size: 15px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    margin: 0.3rem;
    background-color: #cccdd0;
    padding: 0.5rem;
  }


`;


export default GridComponent;