import axios from "axios";
import React, { useState } from "react";
import "../../../src/sass/layout/_nextSevenDays.scss";
import FirstDay from "./FirstDay";


function NextSevenDays() {
  const [nSDaysList, setNSDaysList] = useState([]);
  const [nSDays, setNSDays] = useState({
    title: "",
    details: "",
    optionValue: "",
  });
  const options = [
    { label: "First", value: "first" },
    { label: "Second", value: "second" },
    { label: "Third", value: "third" },
    { label: "Fourth", value: "fourth" },
    { label: "Fifth", value: "fifth" },
    { label: "Sixth", value: "sixth" },
    { label: "Seventh", value: "seventh" },
  ];

  const onSave = () => {
      if(nSDays.optionValue==="first") {
          axios.post("http://localhost:3000/NSD1").then((response) => {
            setNSDaysList([...nSDaysList,response.data]);
          })
      }
      if(nSDays.optionValue==="second"){
        axios.post("http://localhost:3000/NSD2").then((response) => {
          setNSDaysList([...nSDaysList,response.data]);
        })
      }
      if(nSDays.optionValue==="third"){
        axios.post("http://localhost:3000/NSD3").then((response) => {
          setNSDaysList([...nSDaysList,response.data]);
        })
      }
      if(nSDays.optionValue==="fourth"){
        axios.post("http://localhost:3000/NSD4").then((response) => {
          setNSDaysList([...nSDaysList,response.data]);
        })
      }
      if(nSDays.optionValue==="fifth"){
        axios.post("http://localhost:3000/NSD5").then((response) => {
          setNSDaysList([...nSDaysList,response.data]);
        })
      }
      if(nSDays.optionValue==="sixth"){
        axios.post("http://localhost:3000/NSD6").then((response) => {
          setNSDaysList([...nSDaysList,response.data]);
        })
      }
      if(nSDays.optionValue==="seventh"){
        axios.post("http://localhost:3000/NSD7").then((response) => {
            nSDaysList([...nSDaysList,response.data]);
        })
      }
  }

  return (
    <div className="nextSevenDays">
      <h1>Next Seven Days</h1>
      <div className="nextSevenDays__form">
        <div className="nextSevenDays__form-title">
          <input
            placeholder="Title"
            className="NSDTitle"
            onChange={(e) => {
              setNSDays({ ...nSDays, title: e.target.value });
            }}
          />
        </div>
        <div className="nextSevenDays__form-details">
          <input
            placeholder="Details"
            className="NSDDetails"
            onChange={(e) => {
              setNSDays({ ...nSDays, details: e.target.value });
              console.log(nSDays);
            }}
          />
        </div>
        <div className="nextSevenDays__form-select">
          <select id="days" name="days" onChange={(e) =>{
            setNSDays({ ...nSDays, optionValue: e.target.value });
          }}>
              { options.map((option)=>
                <option value={option.value}>{option.label}</option>
              )}
          </select>
        </div>
        <div className="nextSevenDays__form-button">
          <button onClick={onSave}>Add</button>
        </div>
      </div>
      <div className="nextSevenDays__Days">
                <h1>First Day</h1>
            <FirstDay nSDaysList={nSDaysList}
            setNSDaysList={setNSDaysList}/>
      </div>
    </div>
  );
}

export default NextSevenDays;
