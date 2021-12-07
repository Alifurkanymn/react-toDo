import React, { useState } from "react";
import axios from "axios";
import "../sass/layout/_toDoList.scss";
import { HiArrowDown } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import "../sass/abstracts/_mixin.scss";

function ToDoList(props) {
  const [isVisible, setIsVisible] = useState({
    Visible: false,
  });
  const [isDisabled, setIsDisabled] = useState({
    disabled: true,
  });
  const [updateToDo, setUpdateToDo] = useState({
    title: "",
    details: "",
    imgUrl: props.toDoList.imgUrl,
  });

  const onDelete = (item, id) => {
    axios
      .delete(`http://localhost:3000/toDoList/${item.id}`)
      .then((response) => {
        var array = [...props.toDoList];
        var index = array.indexOf(item);
        array.splice(index, 1);
        props.setToDoList(array);
      });
      
    axios({
      method: 'post',
      url: `http://localhost:3000/cleaningToDo`,
      data: {
        title: item.title,
        details: item.details,
        imgUrl: item.imgUrl,
      }
    });
  };

  const onUpdate = (id) => {
    axios
      .put(`http://localhost:3000/toDoList/${id}`, updateToDo)
      .then((response) => {
        setIsDisabled({
          disabled: !isDisabled.disabled,
        });
      });
  };

  const onEditIcon = () => {
    setIsDisabled({
      disabled: !isDisabled.disabled,
    });
  };

  const onChange = () => {
    setIsVisible({
      Visible: !isVisible.Visible,
    });
  };

  const Visible = isVisible.Visible;
  const disabled = isDisabled.disabled;
  return (
    <div>
      <div className="ToDo__List">
        {props.toDoList
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <div className="ToDo__List-item">
                <div className="ToDo__List-item-nav">
                  <input
                    type="text"
                    defaultValue={item.title}
                    name="title"
                    disabled={isDisabled.disabled ? "disabled" : ""}
                    onChange={(e) =>
                      setUpdateToDo({ ...updateToDo, title: e.target.value })
                    }
                  />
                  <div className="ToDo__List-item-nav-icon">
                    {Visible ? (
                      <HiArrowUp
                        onClick={() => onChange()}
                        className="ToDo__List-item-nav-icon-style"
                      />
                    ) : (
                      <HiArrowDown
                        onClick={() => onChange()}
                        className="ToDo__List-item-nav-icon-style"
                      />
                    )}
                    {disabled ? (
                      <BsPencil
                        onClick={() => onEditIcon()}
                        className="ToDo__List-item-nav-icon-style"
                      />
                    ) : (
                      <HiOutlineCheck
                        onClick={() => onUpdate(item.id, index)}
                        className="ToDo__List-item-nav-icon-style"
                      />
                    )}
                    <MdDelete
                      onClick={() => onDelete(item, item.id)}
                      className="ToDo__List-item-nav-icon-style"
                    />
                  </div>
                </div>
                <div className="ToDo__List-item-img">
                  <img alt="todo-img" src={item.imgUrl} />
                </div>
                {Visible ? (
                  <div className="ToDo__List-item-content">
                    <textarea
                      type="text"
                      defaultValue={item.details}
                      name="details"
                      disabled={isDisabled.disabled ? "disabled" : ""}
                      onChange={(e) =>
                        setUpdateToDo({
                          ...updateToDo,
                          details: e.target.value,
                        })
                      }
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ToDoList;
