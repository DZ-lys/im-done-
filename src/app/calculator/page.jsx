"use client";

import { useState } from "react";

const calc = () => {
    const [number, change] = useState("click the buttons")
    
    const val = (a) => {
        change(a)
    }
    return (
        <div>
            <div>{number}</div>
            <div>
                <button onClick={() => {val(1)}}>1</button>
                <button onClick={() => {val(2)}}>2</button>
                <button onClick={() => {val(3)}}>3</button>
                <button onClick={() => {val(4)}}>4</button>
                <button onClick={() => {val(5)}}>5</button>
                <button onClick={() => {val(6)}}>6</button>
                <button onClick={() => {val(7)}}>7</button>
                <button onClick={() => {val(8)}}>8</button>
                <button onClick={() => {val(9)}}>9</button>
                <button onClick={() => {val(0)}}>0</button>
            </div>
        </div>
    )
}

export default calc