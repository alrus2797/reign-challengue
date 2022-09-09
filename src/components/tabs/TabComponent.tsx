import React from "react";
import "./TabStyles.css";

interface TabComponentProps {
  clickHandler: (index: string) => void;
  tabs: string[];
  activeTab: string;
}

export default function TabComponent(props: TabComponentProps) {
  const setActiveTab = (e: React.MouseEvent<HTMLDivElement>) => {
    props.clickHandler(e.currentTarget.innerText);
  };

  return (
    <div className="tabs">
      {props.tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${tab === props.activeTab ? "active" : ""}`}
          onClick={setActiveTab}
        >
          <span className="Text-Style-2">{tab}</span>
        </div>
      ))}
    </div>
  );
}
