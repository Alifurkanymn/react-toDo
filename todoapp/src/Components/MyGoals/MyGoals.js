import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../../src/sass/layout/_myGoals.scss";
import MyGoalsList from "./MyGoalsList";

function MyGoals() {
  const [myGoalsList, setMyGoalsList] = useState([]);
  const [myGoals, setMyGoals] = useState({
    goalsTitle: "",
    goalsDetails: "",
  });

  useEffect(() => {
    
    axios.get("http://localhost:3000/myGoals").then((response) => {
      setMyGoalsList(response.data);
    });
  }, []);

  const onAdding = (e) => {
    window.location.reload();
    axios.post("http://localhost:3000/myGoals", myGoals).then((response) => {
      setMyGoalsList([...myGoalsList, response.data]);
    });
  };

  return (
    <div className="myGoals">
      <h1>My Goals</h1>
      <div className="myGoals__input">
        <input
          type="text"
          placeholder="My Goals Title"
          className="myGoalsInput"
            onChange={(e) => {
            setMyGoals({ ...myGoals, goalsTitle: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="My Goals Details"
          className="myGoalsDetails"
            onChange={(e) => {
            setMyGoals({ ...myGoals, goalsDetails: e.target.value });
          }}
        />
      </div>
      <div className="myGoals__button">
        <button onClick={onAdding}>Add</button>
      </div>
      <div className="myGoals__List">
        <MyGoalsList
          myGoalsList={myGoalsList}
          setMyGoalsList={setMyGoalsList}
          myGoals={myGoals}
        />
      </div>
    </div>
  );
}

export default MyGoals;
