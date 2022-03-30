import { HomeTemplate } from '@components/template/home';
import { getArticle, getAuthors, getTopics } from '@public/static/api';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ArticleType,
  AuthorType,
  TopicType,
} from '@public/static/types/topics';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';

const Home: React.FC<any> = ({ articles, authors, topics }) => {
  const dispatch = useDispatch();

  let articleList = articles ? articles : [];
  let authorList = authors ? authors : [];
  let topicsList = topics ? topics : [];

  articleList.map((article: ArticleType) => {
    authorList.forEach((author: AuthorType) => {
      if (author.id == parseInt(article.updated_by)) {
        article['author'] = author.name;
      }
    });
  });

  articleList.map((article: ArticleType) => {
    topicsList.forEach((topic: TopicType) => {
      if (topic.id == parseInt(article.updated_by)) {
        article['topic'] = [topic.title];
      }
    });
  });

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
  }, [articleList, dispatch]);

  return (
    <>
      <HomeTemplate />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const getArticles = await fetch(getArticle);
  const articles = await getArticles.json();

  const getAuthor = await fetch(getAuthors);
  const authors = await getAuthor.json();

  const getTopic = await fetch(getTopics);
  const topics = await getTopic.json();
  return {
    props: {
      articles,
      authors,
      topics,
    },
  };
}
