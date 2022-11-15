import React, { useState , ReactNode} from "react";
import './App.css';
import EightBall from "./EightBall";


/** 
 * App returns an EightBall component
 * 
 * State
 * - choice : object with msg and color
 * 
 * App => EightBall
 * @returns {ReactNode}
 */
function App() {
  const defaultAnswer = {msg : "Think of a Question", color: "black" }

  const [ choice, setChoice ] = useState(defaultAnswer)

  return (
    <div className="App">
      <EightBall choice={choice} setChoice={setChoice}/>
    </div>
  );
}

export default App;