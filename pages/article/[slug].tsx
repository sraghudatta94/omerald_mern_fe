import articleActionCreator from 'redux/actions/article';
import { useDispatch } from 'react-redux';
import { articles, topics } from 'prisma/db/getData';
import React, { useEffect } from 'react';
import topicActionCreator from 'redux/actions/topics';
import { SinglePostTemplate } from '@components/template/article/singlePost.tsx';
import { useRouter } from 'next/router';

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
      <SinglePostTemplate />
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

export async function getStaticPaths() {
  const article = await articles();

  const paths = article.map(post => ({
    params: { slug: post.title },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
