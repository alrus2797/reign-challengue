import React from "react";
import useNews from "../../hooks/useNews";
import { New } from "../../interfaces/NewsInterfaces";
import {Queries} from "../../interfaces/QueriesInterface";

import CardComponent from "../card/CardComponent";
import DropdownComponent from "../dropdown/DropdownComponent";
import RowComponent from "../row/RowComponent";
import TabComponent from "../tabs/TabComponent";
import "./ContentStyles.css";

export default function ContentComponent() {
  const tabs = ["All", "Favs"];
  const queries: Queries = {
    unknown: "",
    react: {
      icon: "react.png",
      value: "React"
    },
    angular: {
      icon: "angular.png",
      value: "Angular"
    },
    vue: {
      icon: "vue.png",
      value: "Vue"
    }
  }


  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [filter, setFilter] = React.useState(localStorage.getItem("filter") || "");
  
  const {newsPage} = useNews({activeTab, page: 0, query: filter}) 


  const handleTabClick = (selectedTab: string) => {
    console.log(selectedTab);
    setActiveTab(selectedTab);
  };
  
  const handleFilterClick = (selectedFilter: string) => {
    console.log(selectedFilter);
    localStorage.setItem("filter", selectedFilter);
    setFilter(selectedFilter);
  }

  return (
    <div className="content">
      <RowComponent className="center mb">
        <TabComponent
          clickHandler={handleTabClick}
          tabs={tabs}
          activeTab={activeTab}
        />
      </RowComponent>


      { activeTab === "All" && <RowComponent className="dropdown-row mb">
        <DropdownComponent options={queries} clickHandler={handleFilterClick} currentOption={filter}></DropdownComponent>
      </RowComponent>}

      <div className="">
        <RowComponent className="mb card-row">
          {newsPage?.hits?.map((news: New) => (
            news.story_title && news.author && news.created_at && news.story_url && (
            <CardComponent
              key={news.objectID}
              story_title={news.story_title}
              created_at={news.created_at.toLocaleString()}
              author={news.author}
              story_url = {news.story_url}
              favorite={false}
            />)
          ))}
        </RowComponent>
      </div>
    </div>
  );
}
