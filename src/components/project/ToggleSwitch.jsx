import { useState } from 'react';
import './ToggleSwitch.css';

export const ToggleSwitch = () => {

    const [isOn, setisOn] = useState(false);

    const handleToggleClick = () => {
        setisOn(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";
    const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "#e8e4e4" };

    return (
        <div className="toggle-switch" style={toggleBgColor} onClick={handleToggleClick} >

            <div className={`switch ${checkIsOn}`} >
                <span className="switch-state"> {checkIsOn} </span>
            </div>

        </div >
    );
}