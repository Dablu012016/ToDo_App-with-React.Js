import "../components/Event.css";

export const Eventhandling = () => {

    const HandleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);

        alert("Hey, i am button");
    };

    const handleWelcomeUser = (name) => {
        alert(`hey, ${name} Welcome to you in my channel`);
    }

    return (
        <>
            {/* Function Component with named function:-
         Remember how we haven't called this function, if you call this function here then it will run without even clicking. you just need to pass reference and not call here. */}
            <button className="btn" onClick={HandleButtonClick}>click me</button>

            {/* In React, event handlers recieve the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explixitly, React doesn't pass the event object to your handler function. This is because the arrow function crates a new function and calls your handler without passing any arguments. */}

            <button className="btn2" onClick={(event) => HandleButtonClick(event)} >click me 2</button>

            {/* Inline Event handlers */}
            <button className="btn3" onClick={(event) => console.log(event)
            }>Inline Fun</button>

            {/* Function Component with Inline Arrow Function */}
            <button className="btn4" onClick={() => alert('Hey, i am Arrow Fun')} >Inline Arrow Fun</button>

            {/* Passing Arguments to Event Handlers */}
            <button className="btn5" onClick={() => handleWelcomeUser("Dablu")}>click me</button>

            <button className="btn6" onClick={() => handleWelcomeUser("Chhoti")}>click me</button>
        </>
    );
}