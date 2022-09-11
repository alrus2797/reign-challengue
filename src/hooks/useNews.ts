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
    NewsService.getNews(props.query, props.page).then((response) => {
      setNewsPage(response);
    });
  }, [props.query, props.page]);

  useEffect(() => {
    getNews()
  }, [props.activeTab, getNews]);

  return {
    newsPage,
  }
}
