import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/layout/_todo.scss";
import ToDoList from "./ToDoList";

function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [error, setError] = useState("");
  const [toDo, setToDo] = useState({
    id: "",
    title: "",
    details: "",
    imgUrl: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/toDoList")
      .then((response) => {
        setToDoList(response.data);
      })
      .catch((error) => {
        setError("Hata");
      });
  }, []);

  const handleAdd = (e) => {
    axios.post("http://localhost:3000/toDoList", toDo).then((response) => {
      setToDoList([...toDoList, response.data]);
    });
  };

  const onAdding = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setToDo({ ...toDo, imgUrl: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="todo">
      <h1>Today</h1>
      <div className="todo__form">
        <input
          type="text"
          className="titleInput"
          placeholder="Title"
          name="title"
          value={toDo.title}
          onChange={(e) => {
            setToDo({ ...toDo, title: e.target.value });
          }}
        />
        <input
          type="text"
          className="detailsInput"
          placeholder="Details"
          name="details"
          value={toDo.details}
          onChange={(e) => {
            setToDo({ ...toDo, details: e.target.value });
          }}
        />
        <div className="todo__form-button">
          <input type="file" onChange={(e) => onAdding(e)}></input>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>

      <div className="todo__List">
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
}

export default ToDo;
