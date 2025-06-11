
// Dynamics values in jsx :-

let name = "Dablu";
let rating = 9.6;
let sumary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, placeat.";

const Greet = () => {
  const greet = "namaste";
  return greet;
};

export const DynamicValues = () => {
  
  return (
    <>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating} </h3>
      <p>greeting: {Greet()} </p>
      <p>Summary: {sumary} </p>
      <p>points: {3 + 8} </p>
      <button>watch now</button>
    </>
  );
};
