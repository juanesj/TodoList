import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGoal } from './../reducers/goalsSlice';

function GoalList() {
  const goals = useSelector(state => state.goals.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  return (
    <div>
      {goals.map(goal => (
        <div key={goal.id}>
          <h3>{goal.name}</h3>
          <p>{goal.description}</p>
          <p>{goal.dueDate}</p>
          <button onClick={() => handleDelete(goal.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
