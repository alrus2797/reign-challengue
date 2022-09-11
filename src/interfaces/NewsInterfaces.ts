export interface New{
  objectID: string;
  author: string;
  story_title: string;
  story_url: string;
  created_at: Date;
}

export interface NewsPage {
  hits: New[];
  page: number;
  nbPages: number;
  hitsPerPage: number;
}