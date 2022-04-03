import { ArticleType, TopicType } from '@public/static/types/topics';
import { ReactNode } from 'react';

export type HeaderProp = {
  openSearch: Function;
};

export type SearchedArticlesType = {
  openSearch: Function;
};

export type TopicsListType = {
  topicsList: TopicType[];
};


export type LayoutType = {
  children: ReactNode;
};

export type FeaturedPostType = {
  articles?: ArticleType[];
};
