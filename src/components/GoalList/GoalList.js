import React from "react";

const GoalList = props => {
  const renderlist =  props.goals.map(goal=>{
    return (<li key={goal.id}>{goal.text}</li>);  {/* Each child refering to unique kwy*/ }
})
  return (
    <div>
      <ul>
        {/* Mapping the array of elements in goals */}
        {renderlist}
      </ul>
    </div>
  );
};

export default GoalList;
