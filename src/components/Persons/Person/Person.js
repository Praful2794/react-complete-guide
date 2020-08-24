import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
            width: 450px;
            border: 1px solid green;
    }
`;

const person = (props) => {
    // Add this only for Error Boundary component
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        // <div className="Person" style={style}>
        // THis is for styled component
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}></input>
        </StyledDiv>
    )
};

export default person;