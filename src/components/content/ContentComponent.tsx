import React from "react";
import RowComponent from "../row/RowComponent";
import TabComponent from "../tabs/TabComponent";
import "./ContentStyles.css";

export default function ContentComponent() {
  const tabs = ["All", "Favs"];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const handleTabClick = (selectedTab: string) => {
    console.log(selectedTab);
    setActiveTab(selectedTab);
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
