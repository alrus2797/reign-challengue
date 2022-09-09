import React from "react";
import RowComponent from "../row/RowComponent";
import TabComponent from "../tabs/TabComponent";
import "./ContentStyles.css";

export default function ContentComponent() {
  const [activeTab, setActiveTab] = React.useState("All");

  const tabs = ["All", "Favs"];

  const handleTabClick = (index: string) => {
    console.log(index);
    setActiveTab(index);
  };
  return (
    <div className="content">
      <RowComponent className="center">
        <TabComponent
          clickHandler={handleTabClick}
          tabs={tabs}
          activeTab={activeTab}
        />
      </RowComponent>
    </div>
  );
}
