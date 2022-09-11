import React from "react";
import {Queries, QueryData} from "../../interfaces/QueriesInterface";
import './DropdownStyles.css';


interface DropdownComponentProps {
  options: Queries;
  currentOption: string;
  clickHandler: (index: string) => void;
}

export default function DropdownComponent(props: DropdownComponentProps) {
  
  
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <span className="drop-text">
          {props.currentOption === "" ?  "Select your news" : props.currentOption}
        </span>
      </button>
      <div className="dropdown-content">
        {Object.values(props.options).map((option: QueryData, index) => (
          index >= 1 &&
          <span key={index} onClick={() => props.clickHandler(option?.value)}>{option?.value}</span>
        ))}
      </div>
    </div>
  );
}
