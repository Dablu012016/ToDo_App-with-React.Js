import { useState } from "react";
import '../hooks/index.css';

export const LiftStateUp = () => {
    // Lift State Up:
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="main-div">
            <InputComponent inputValue = {inputValue} setInputValue = {setInputValue} />
            <DisplayComponent inputValue = {inputValue} />
        </div>
    );
};

const InputComponent = ( {inputValue, setInputValue} ) => {
    // const [inputValue, setInputValue] = props;
    return (
        <>
            <input type="text" placeholder="enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    );
};

const DisplayComponent = (props) => {
    return <p className="para">The current input value is: {props.inputValue} </p>
}