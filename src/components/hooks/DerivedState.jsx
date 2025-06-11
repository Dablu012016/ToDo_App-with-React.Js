
import { useState } from 'react';
import '../hooks/index.css';

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Angles", age: 40 },
// ];

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 40 },
    ]);

    // derived state: count of user
    const userCounts = users.length;

    // Derived state: average age of users
    const averageAge = users.reduce((Accum, currElm) => Accum + currElm.age, 0) / userCounts;
    return (
        <div className='main-div'>
            <h1>Users List :</h1>
            <ul>
                {users.map((currElm, index) => {

                    return (
                        <li key={index}>
                            {currElm.name} - {currElm.age} years old.
                        </li>
                    );
                })}
            </ul>
            <p className='para'>Users Count: {userCounts} </p>
            <p className="para">Average Age: {averageAge} </p>
        </div>
    );



}