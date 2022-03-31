import { HomeTemplate } from '@components/template/home';
import articleActionCreator from 'redux/actions/article';
import { useDispatch } from 'react-redux';
import { ArticleTemplate } from '@components/template/article';
import { articles, topics } from 'prisma/db/getData';
import React, { useEffect } from 'react';
import topicActionCreator from 'redux/actions/topics';

const Article: React.FC<any> = ({ article, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let topicList = topic ? article : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    topicActionCreator.setTopics(dispatch, topicList);
  });

  return (
    <>
      <ArticleTemplate />
    </>
  );
};

export default Article;

export async function getStaticProps() {
  const article = await articles();
  const topic = await topics();

  return {
    props: {
      article,
      topic,
    },
  };
}
