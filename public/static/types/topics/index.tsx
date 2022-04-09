export type ArticleType = {
  id: number;
  title: string;
  short_description?: string;
  updated_by: string;
  image: string;
  created_at: Date;
  author: string;
  health_topics: string;
  description: string;
  writer_id: string;
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
  body?: string;
};

export type UserType = {
  id: number;
  name: string;
};

export type BannerType = {
  id: number;
  article_id: string;
  description: string;
  image: string;
};
