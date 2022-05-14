import React, { useState } from "react";
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {

    const [number, setNumber] = useState(0);
    const [firstNumber, setFisrtNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNumber(e) {
        let input = e.target.value
        if (number === 0) {
            setNumber(input)
        } else {
            setNumber(number + input);
        }
    }

    function clear() {
        setNumber(0)
    }

    function percentage() {
        setNumber(number / 100)
    }

    function handler() {
        setNumber(number * -1)
    }

    function operators(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setFisrtNumber(number)
        setNumber(0)
    }

    function calculate() {
        if (operator === "/") {
            setNumber(firstNumber / number)
        }
        if (operator === "X") {
            setNumber(firstNumber * number)
        }
        if (operator === "-") {
            setNumber(firstNumber - number)
        }
        if (operator === "+") {
            setNumber(Number(firstNumber) + Number(number))
        }
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth='xs'>
                <div className="wrapper">
                    <Box m={10} />
                    <h1 className="result">{number}</h1>
                    <button onClick={clear} className="operatorsTop">AC</button>
                    <button onClick={handler} className="operatorsTop">+/-</button>
                    <button onClick={percentage} className="operatorsTop">%</button>
                    <button className="operatorsRight" onClick={operators} value="/">/</button>
                    <button onClick={inputNumber} value={7}>7</button>
                    <button onClick={inputNumber} value={8}>8</button>
                    <button onClick={inputNumber} value={9}>9</button>
                    <button className="operatorsRight" onClick={operators} value="X">X</button>
                    <button onClick={inputNumber} value={4}>4</button>
                    <button onClick={inputNumber} value={5}>5</button>
                    <button onClick={inputNumber} value={6}>6</button>
                    <button className="operatorsRight" onClick={operators} value="-">-</button>
                    <button onClick={inputNumber} value={1}>1</button>
                    <button onClick={inputNumber} value={2}>2</button>
                    <button onClick={inputNumber} value={3}>3</button>
                    <button className="operatorsRight" onClick={operators} value="+">+</button>
                    <button onClick={inputNumber} value={0}>0</button>
                    <button onClick={inputNumber} value={"."}>.</button>
                    <button style={{ visibility: "hidden" }}>,</button>
                    <button onClick={calculate}>=</button>
                </div>
            </Container>
        </div>


    )
}