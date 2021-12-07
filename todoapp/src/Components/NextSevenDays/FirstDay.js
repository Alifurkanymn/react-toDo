import React, { useEffect } from "react";
import axios from "axios";
import "../../sass/layout/_firstDay.scss";

function FirstDay(props) {
  useEffect(() => {
    axios.get("http://localhost:3000/NSD1").then((response) => {
      props.setNSDaysList(response.data);
    });
  }, []);
  return (
    <div className="first">
      {props.nSDaysList
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <div className="firstDay">
              <div className="firstDay__form">
                <div className="firstDay__form-title">
                  <input
                    type="text"
                    name="NSDTitle"
                    defaultValue={item.title}
                  />
                </div>
                <div className="firstDay__form-details">
                  <textarea
                    type="text"
                    name="NSDDetails"
                    defaultValue={item.details}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FirstDay;
