import { HomeTemplate } from '@components/template/home';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';

import { articles, authors, topics } from 'prisma/db/getData';

const Home: React.FC<any> = ({ article, author, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let authorList = author ? author : [];
  let topicsList = topic ? topic : [];

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

export async function getStaticProps() {
  const article = await articles();
  const author = await authors();
  const topic = await topics();

  return {
    props: {
      article,
      author,
      topic,
    },
  };
}
