// import './ResetButton.css';
import { useState } from "react";

/** The component for the reset button.
 * 
 * 
 * App => EightBall => ResetButton
 * @returns {component}
 */
function ResetButton({ setChoice, defaultChoice }) {

    const myStyle = {}; 

    function handleClick(evt){
        setChoice(defaultChoice);
    }

  return (
    <div className="ResetButton" style = {myStyle}>
        <button className="ResetButton-btn" onClick={handleClick}>RESET</button>
    </div>
  );
}

export default ResetButton;