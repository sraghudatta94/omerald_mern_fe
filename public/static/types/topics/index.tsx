export type ArticleType = {
  id: number;
  title: string;
  short_description: string;
  updated_by: string;
  image: string;
  created_at: Date;
  author: string;
  topic: string[];
};

export type AuthorType = {
  id: number;
  name: string;
};

export type TopicType = {
  id: number;
  title: string;
  image: string;
  created_at: string;
};
