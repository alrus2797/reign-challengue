import React from "react";
import CardComponent from "../card/CardComponent";
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
      <RowComponent className="center mb">
        <TabComponent
          clickHandler={handleTabClick}
          tabs={tabs}
          activeTab={activeTab}
        />
      </RowComponent>
      <div className="container">
        <RowComponent className="mb">
          <CardComponent title={"Holasdskdjsakdjsalkdj"} favorite={true} time={"asdasd"}></CardComponent>
        </RowComponent>
      </div>
    </div>
  );
}
