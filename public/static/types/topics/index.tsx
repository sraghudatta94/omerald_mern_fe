export type ArticleType = {
  id: number;
  title: string;
  description: string;
  author: string;
  postingDate: string;
  image: string;
  url: string;
};

export type TopicList = {
  id: number;
  name: string;
  viewCount: number;
  route: string;
};
