import axios from "axios";
import React, { useEffect, useState } from "react";
import "../sass/layout/_cleaning.scss";
import { MdDelete } from "react-icons/md";



function Cleaning() {
  const [cleaningList, setCleaningList] = useState([]);
  const [cleaningToDoList,setCleaningToDoList]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cleaning").then((response) => {
      setCleaningList(response.data);
    });
  }, []);
  

  useEffect(() => {
    axios.get("http://localhost:3000/cleaningToDo").then((response) => {
        setCleaningToDoList(response.data);
    });
  }, []);


  const onDelete = (item) => {
      axios.delete(`http://localhost:3000/cleaning/${item.id}`).then((response) => {
        var array = [...cleaningList];
        var index = cleaningList.indexOf(item);
        array.splice(index, 1);
        setCleaningList(array);
      })
  }




  return (
    <div className="title">
        <h1>Cleansed In Goals</h1>
        <div className="cleaning">
      {cleaningList
        .slice(0)
        .reverse()
        .map((item, index) => {
          return (
            <div className="cleaning__item">
                <div className="cleaning__item-content">
                    <div className="cleaning__item-content-nav">
                        <h1>{item.goalsTitle}</h1>
                        <MdDelete onClick={() => onDelete(item)}className="cleaning__item-content-nav-icon"/>
                    </div>
                    <div className="cleaning__item-content-details">
                        <p>{item.goalsDetails}</p>  
                    </div>
                </div>
            </div>
          );
        })}
        </div>

        <div className="title">
        <h1>Cleansed In ToDo</h1>
        <div className="ToDo__Cleaning">
        {cleaningToDoList
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <div className="ToDo__Cleaning-item">
                <div className="ToDo__Cleaning-item-nav">
                  <h1>{item.title}</h1>
                    <MdDelete
                      onClick={() => onDelete(item, item.id)}
                      className="ToDo__Cleaning-item-nav-icon-style"
                    />
                </div>
                <div className="ToDo__Cleaning-item-img">
                  <img alt="todo-img" src={item.imgUrl} />
                </div>
                  <div className="ToDo__Cleaning-item-content">
                    <p>{item.details}</p>
                  </div>
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default Cleaning;
