
import './EightBall.css';
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
function EightBall({ choice, setChoice }) {
    const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

    const myStyle = {
        backgroundColor: choice.color
    }

    function handleClick(evt){
        const idx = getRandom(answers.length);
        const randChoice = answers[idx];
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



export default EightBall;