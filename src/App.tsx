import React, { useState } from "react";
import { colorsByLength, colors } from "./Components/Colors";
import styles from "./App.module.css";

export default function App() {
  const [copy, setCopy] = useState("");
  const [show, setShow] = useState(false);

  const copyColors = async (event: any) => {
    let value = event.target.innerHTML;
    navigator.clipboard &&
      (await (navigator.clipboard.writeText(colors[`${value}`]),
      navigator.clipboard.readText()));
    // getColor(value);
    setCopy(value);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 600);
  };
  return (
    <>
      <div className={styles.app}>
        {colorsByLength.map((color) => (
          <span
            onClick={copyColors}
            className={styles.item}
            key={color}
            style={{ background: `${color}` }}>
            {color}
          </span>
        ))}
      </div>

      {show && (
        <div style={{ background: `${copy}` }} className={styles.copy}>
          <span className={styles.copyText}>copied It : {copy}</span>
        </div>
      )}
    </>
  );
}
