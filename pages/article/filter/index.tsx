import { useDispatch } from 'react-redux';
import { articles, topics } from 'prisma/db/getData';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import articleActionCreator from 'redux/actions/article';
import topicActionCreator from 'redux/actions/topics';
import dynamic from 'next/dynamic';
import React from 'react';

const ArticleTemplate = dynamic(
  () => import('@components/template/article/index')
);

const Article: React.FC<any> = ({ article, topic }) => {
  const dispatch = useDispatch();

  // let articleList = article ? article : [];
  // let topicList = topic ? topic : [];
  // let router = useRouter().query;
  // console.log(router.data);
  // let [filterList, setFilterList] = useState([]);

  // useEffect(() => {
  //   articleActionCreator.addArticle(dispatch, articleList);
  //   topicActionCreator.setTopics(dispatch, topicList);
  // });

  // useEffect(() => {
  //   filterList;
  // }, [router, filterList]);

  return <ArticleTemplate />;
};

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

export default Article;
