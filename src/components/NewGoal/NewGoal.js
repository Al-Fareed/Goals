import './NewGoal.css';
import React,{useState} from 'react';
const NewGoal = props => {
  
  const [text,setText]=useState(""); //For inputting text from input

  const [ vari ,setvari] = useState(4);

  const setTextHandler = (e) =>{
    setText(e.target.value);
  }
    const addGoalHandler=(e) => {
        e.preventDefault();
        setvari(vari+1);
        const newGoal = {
            id:vari,
            text:text
        }
        props.onAddGoal(newGoal) //onAddGoal is the function from App.js sent as props to acces and update the goals
        console.log(newGoal);
        setText("");
      }
   
      return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" value={text} onChange={setTextHandler}/>
          <button type="submit">Add Goal</button>
        </form>
      );
}

export default NewGoal
