import { useCallback, useEffect, useState } from "react";
import NewsService from "../services/newService";
import { NewsPage } from "../interfaces/NewsInterfaces";

interface newsHookProps {
  activeTab: string;
  query: string;
  page: number;
}

export default function useNews(props: newsHookProps) {
  const [newsPage, setNewsPage] = useState<NewsPage | null>();
  const getNews = useCallback(() => {
    if (props.activeTab === "All"){
      NewsService.getNews(props.query, props.page).then((response) => {
        setNewsPage(response);
      });
    }
    else{
      console.log("Trayendo favs", localStorage.getItem("FavNews"))
      setNewsPage(localStorage.getItem("FavNews") ? JSON.parse(localStorage.getItem("FavNews") as string) : null);
    }
  }, [props.query, props.page, props.activeTab]);

  useEffect(() => {
    getNews()
  }, [props.activeTab, getNews]);

  return {
    newsPage,
  }
}
