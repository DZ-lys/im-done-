"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [screen, setScreen] = useState("");

  function buttonClicked(too) {
    setScreen(screen + too);
  }

  function clearHandler() {
    setScreen("");
  }

  function opHandler() {
    if (screen.includes("+")) {
      const add = screen.split("+");
      const addition = Number(add[0]) + Number(add[1]);
      setScreen(addition);
    }
    if (screen.includes("-")) {
      const sub = screen.split("-");
      const subtraction = Number(sub[0]) - Number(sub[1]);
      setScreen(subtraction);
    }
    if (screen.includes("*")) {
      const mul = screen.split("*");
      const multiplication = Number(mul[0]) * Number(mul[1]);
      setScreen(multiplication);
    }
    if (screen.includes("/")) {
      const div = screen.split("/");
      const division = Number(div[0]) / Number(div[1]);
      setScreen(division);
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.calculator}>
        <p>{screen}</p>
        <div className={styles.buttonContainer}>
          <button onClick={() => buttonClicked(1)}>1</button>
          <button onClick={() => buttonClicked(2)}>2</button>
          <button onClick={() => buttonClicked(3)}>3</button>
          <button onClick={() => buttonClicked(4)}>4</button>
          <button onClick={() => buttonClicked(5)}>5</button>
          <button onClick={() => buttonClicked(6)}>6</button>
          <button onClick={() => buttonClicked(7)}>7</button>
          <button onClick={() => buttonClicked(8)}>8</button>
          <button onClick={() => buttonClicked(9)}>9</button>
          <button onClick={() => buttonClicked(10)}>0</button>
          <button onClick={opHandler}>=</button>
          <button onClick={clearHandler}>C</button>
          <button onClick={() => buttonClicked("+")}>+</button>
          <button onClick={() => buttonClicked("-")}>-</button>
          <button onClick={() => buttonClicked("*")}>*</button>
          <button onClick={() => buttonClicked("/")}>/</button>
        </div>
      </div>
    </div>
  );
}
