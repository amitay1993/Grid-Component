import React from 'react';
import Data from "./Row";
import styled from "styled-components";
import {Search} from '@styled-icons/material'
import Table from "./Table";


function GridComponent({data, fields}) {


    return (
        <DatContainer>
            <InputDiv>
                <input placeholder="search.."/>
                <Search fontSize="20" color="white" size="50px"/>
            </InputDiv>
            <Table data={data} fields={fields}/>
        </DatContainer>
    );
}

const DatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  background-color: whitesmoke;
  overflow: auto;


  thead th {
    background-color: lightgray;
    box-shadow: 5px 5px 5px rgba(0, 20, 150, 0.3);
    border-radius: 2px;
    padding: 0.5rem;
    font-size: 20px;
    border: dimgray;
  }

  th {
    box-shadow: 3px 3px 3px rgba(0, 0, 50, 0.3);
    border-radius: 2px;
    padding: 0.2rem;
    font-size: 20px;
    border: dimgray;
  }

  .checkbox {
    outline: 1px solid dimgray;
    margin: 0.5rem;
    width: 20px;
    height: 20px;
  }
  
  .inputDiv{
    display: flex;
    justify-content: center;
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