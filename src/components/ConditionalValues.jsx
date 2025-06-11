
// Conditional values in JSX :-

let name = "Dablu";
let rating = 9.6;
let sumary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, placeat.";

const Greet = () => {
  const greet = "namaste";
  return greet;
};

let age = 16;


export const ConditionalValues1 = () => {

  return (
    <>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating} </h3>
      <p>greeting: {Greet()} </p>
      <p>Summary: {sumary} </p>
      <p>points: {3 + 8} </p>
      <button> {age >= 18 ? "watch now" : "Not available"} </button>
    </>
  );
}

// second ways 
let myAge = 20;
let canwatch = "not available";
if (myAge >= 18) {
  canwatch = "watch now";
}

export const ConditionalValues2 = () => {

  return (
    <>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating} </h3>
      <p>greeting: {Greet()} </p>
      <p>Summary: {sumary} </p>
      <p>points: {3 + 8} </p>
      <button> {canwatch} </button>
    </>
  );
};