
import '../components/Event.css';

export const EventProps = () => {

    const HandleButtonClick = (user) => {
        alert(`Hey, ${user} welcome`);
    };

    const handleHover = () => {
        alert("your mouse is hover");
    };

    return (
        <>
        <WelcomeUser 
        onBtnClick = {() => HandleButtonClick("Dablu")}
        onMouseHover = {handleHover}
        />
        </>
    );
}

const WelcomeUser = (props) => {

    const {onBtnClick, onMouseHover} = props;

    const handleGreeting = () => {
        console.log("Hey user, welcome");
        onBtnClick();
    }
    return ( 
        <>
        <button className='btn1' onClick={onBtnClick}>Click</button>
        <button className="btn2" onMouseEnter={onMouseHover}>Hover me</button>
        <button className="btn3" onClick = {handleGreeting}>Greeting</button>
        </>
    );
}