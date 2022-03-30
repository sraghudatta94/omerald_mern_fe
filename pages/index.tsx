import { HomeTemplate } from '@components/template/home';
import { getArticle, getAuthors, getTopics } from '@public/static/api';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';

const Home: React.FC<any> = ({ articles, authors, topics }) => {
  const dispatch = useDispatch();

  let articleList = articles ? articles : [];
  let authorList = authors ? authors : [];
  let topicsList = topics ? topics : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
  });

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
