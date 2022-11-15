
import './EightBall.css';
import { useState } from "react";
import { getRandom } from './random';

/** The component for the magic eight ball.
 * 
 * Props:
 * - choice (a object with msg key and color key)
 * - setChoice (function that resets choice)
 * 
 * App => EightBall
 * @returns {component}
 */
function EightBall({ choices, defaultChoice }) {

    const [ choice, setChoice ] = useState(defaultChoice);

    const myStyle = {
        backgroundColor: choice.color
    }

    function handleClick(evt){
        const idx = getRandom(choices.length);
        const randChoice = choices[idx];
        setChoice(randChoice);
    }

  return (
    <div className="EightBall" style = {myStyle}>
        <i className="EightBall-i" onClick={handleClick}>
            <p className="Eightball-msg">{choice.msg}</p>
        </i>
    </div>
  );
}

//TODO: having this be configurable. having app pass to 8ball what answers are
//Take a parameter or do it in App

export default EightBall;