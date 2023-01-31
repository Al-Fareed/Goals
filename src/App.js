import React,{useState} from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () => {
  // creating goalList as arrays and initializiong them to initial state with a Function to update and have a old state
  const [courseGoals,setcourseGoals] = useState( [ 
    {id:"1",text:"Find a Cousrse"},
    {id:"2",text:"Go through the Cousrse"},
    {id:"3",text:"Finish that Cousrse"},
  ]);
  // To add new goal, It takes parameter from child(NewGoal.js) and sends it to GoalList.js
  const addNewGoalHandler = (newGoal) =>{
    //  setcourseGoals(courseGoals.concat(newGoal)); One way to update to course goals, but not the optimized one
    setcourseGoals((prevCourseGoals)=>{
      console.log("Previous goals:",prevCourseGoals,"\nNewGoals:",newGoal);
      return prevCourseGoals.concat(newGoal);
    })
  };
  return (
    /*<h1 title="This is title">Hey Folks</h1> is similr to->//React.createElement('h1',{This is title},'Hey Folks');*/   
    <div className="goal-list">
      <h2>Course Goals</h2> 
      <NewGoal onAddGoal={addNewGoalHandler}/> {/* Sending function addNewGoalHandler as onAddGoal to Child component */}
      <GoalList goals={courseGoals}/> {/*Sending goalList to GoalList.js component as props*/ }
    </div>
  );
};

// In class component
/*class App extends React.Component{
  render(){
  return <h1 title="This is title">Hey Folks</h1> //React.createElement('h1',{This is title},'Hey Folks');

  }
}*/
export default App;