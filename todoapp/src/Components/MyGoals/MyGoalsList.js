import "../../../src/sass/layout/_myGoalsList.scss";
import React, { useState } from "react";
import axios from "axios";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { HiOutlineCheck } from "react-icons/hi";

function MyGoalsList(props) {
  const [isDisabled, setIsDisabled] = useState({
    disabled: true,
  });
  const [updateMyGoals, setUpdateMyGoals] = useState({
    goalsTitle: "",
    goalsDetails: "",
  });
  


  const onDelete = (item,index) => {
    window.location.reload();
    axios
    .delete(`http://localhost:3000/myGoals/${item.id}`)
    .then((response) => {
      var array = [...props.myGoalsList];
      var index = props.myGoalsList.indexOf(item);
      array.splice(index, 1);
      props.setMyGoalsList(array);
    });

    axios({
      method: 'post',
      url: `http://localhost:3000/cleaning`,
      data: {
        goalsTitle: item.goalsTitle,
        goalsDetails: item.goalsDetails,
      }
    });
  };

  const onUpdate = (id) => {    
    axios
      .put(`http://localhost:3000/myGoals/${id}`, updateMyGoals)
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

  const disabled = isDisabled.disabled;
  return (
    <div className="myGoalsList">
      {props.myGoalsList
        .slice(0)
        .reverse()
        .map((item, index) => {
          return (
            <div className="myGoalsList__item">
              <div className="myGoalsList__item-input">
                <div className="myGoalsList__item-input-top">
                  <input
                    type="text"
                    name="myGoalsTitle"
                    disabled={isDisabled.disabled ? "disabled" : ""}
                    defaultValue={item.goalsTitle}
                    onChange={(e) =>
                      setUpdateMyGoals({
                        ...updateMyGoals,
                        goalsTitle: e.target.value,
                      })
                    }
                  />
                  <div className="myGoalsList__item-input-top-icon">
                    {disabled ? (
                      <BsPencil
                        onClick={() => onEditIcon()}
                        className="myGoalsList__item-input-top-icon-style"
                      />
                    ) : (
                      <HiOutlineCheck
                        onClick={() => onUpdate(item.id)}
                        className="myGoalsList__item-input-top-icon-style"
                      />
                    )}
                    <MdDelete
                      onClick={() => onDelete(item, item.id, index)}
                      className="myGoalsList__item-input-top-icon-style"
                    />
                  </div>
                </div>
                <div className="myGoalsList__item-content">
                  <textarea
                    type="text"
                    name="myGoalsDetails"
                    defaultValue={item.goalsDetails}
                    disabled={isDisabled.disabled ? "disabled" : ""}
                    onChange={(e) =>
                      setUpdateMyGoals({
                        ...updateMyGoals,
                        goalsDetails: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyGoalsList;
