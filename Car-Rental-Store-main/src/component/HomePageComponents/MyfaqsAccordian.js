import React, { useEffect, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { GrSubtract } from "react-icons/gr";
export default function MyfaqsAccordian(props) {
  const [show, setShow] = useState(false);
  const [BgColor, SetBgColor] = useState({
    backgroundColor: "white",
    color: "black",
  });

  useEffect(() => {
    if (props.isActive) {
      setShow(true);
      SetBgColor({
        backgroundColor: "var(--btn-background-color)",
        color: "white",
        transition: "0.5s ease",
      });
    } else {
      setShow(false);
      SetBgColor({
        backgroundColor: "white",
        color: "black",
        transition: "0.5s ease",
      });
    }
  }, [props.isActive]);

  return (
    <>
      <div
        className="faq-content-div-box-hero"
        // show={show}
        onClick={props.onToggle}
      >
        <div
          className="faq-content-div-box-hero-main"
          // onClick={props.onToggle}
          style={BgColor}
        >
          <p style={BgColor}>{show ? <GrSubtract style={{color:"white"}} /> : <TiPlus />}</p>
          <h1 className="question">{props.question}</h1>
        </div>
        {show && <p className="answers">{props.answer}</p>}
      </div>
    </>
  );
}
