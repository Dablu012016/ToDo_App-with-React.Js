
import { useEffect, useState } from 'react';
import '../project/todo.css';
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    // input handle :
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };

    // date and time:

    useEffect(() => {
     const interval =  setInterval(() =>{
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            
            setDateTime(`${formatedDate} - ${formatedTime}`);
        },1000);

        return () => clearInterval(interval);
    }, []);

    // delete handle function:

    const handleDeleteClick = (value) => {
    //   console.log(task);
    //   console.log(value);
      const updateTask = task.filter((curTask) => curTask !== value);
      setTask(updateTask)
      
    };

    const handleClearclick = () => {
        setTask([]);
    };

    return (
        <div className="main">
            <div className="heading">
                <h1>Todo List</h1>
                <h3 className='date-time'> {dateTime}</h3>
            </div>
            <div className="input-box">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" autoComplete='off'
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)} />
                    <button type='submit' className="add-btn">Add Task</button>
                </form>
            </div>
            <div>
                <ul>
                    {task.map((curTask, index) => {
                        return(
                            <li key={index}>
                                <span> {curTask} </span>
                                <button className='check-btn'>
                                <MdCheck style={{backgroundColor:'rgb(87, 180, 87', color: 'white'}}/>
                                </button>
                                <button className="delete-btn" onClick={()=> handleDeleteClick(curTask)}>
                                <MdDeleteForever style={{backgroundColor:'rgb(207, 66, 66)', color : 'white'}}/>
                                </button>

                            </li>
                        );
                    })}
                </ul>
            </div>
            <button className="clear-btn" onClick={handleClearclick}>Clear All</button>
        </div>
    );
}