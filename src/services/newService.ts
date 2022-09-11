import { NewsPage } from "../interfaces/NewsInterfaces";

export default class NewsService{

  static async getNews(query: string, page: number): Promise<NewsPage> {
    // do something
    let url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`;
    
    let response = await fetch(url);

    if (response.status === 200) {
      let data = await response.json() as NewsPage;
      return data;
    } else {
      throw new Error("Error getting news");
    }
  }
}