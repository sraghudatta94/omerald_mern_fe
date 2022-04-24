import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { TopicType, UserType } from '@public/static/types/topics';
import { PostTitle } from '@components/atoms/typography';
import SingleArticleMetaTag from '@public/static/metaData/singleArticleMeta';
import ArticleSideBar from '@components/molecule/post/sidePost';

const PostBottom = dynamic(() => import('@components/molecule/post/bottom'));
const PostContent = dynamic(() => import('@components/molecule/post/content'));
const PostHeader = dynamic(() => import('@components/molecule/post/header'));
const PostIntro = dynamic(() => import('@components/molecule/post/intro'));
const PostBanner = dynamic(() => import('@components/molecule/post/banner'));

const PopularCard = dynamic(
  () => import('@components/molecule/card/popularCard')
);
const Layout = dynamic(() => import('@components/common'));

const SinglePostTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articlesList = redux.article.data ? redux.article.data : [];
  let usersList: UserType[] = redux.users ? redux.users.data : [];

  let router = useRouter().query.slug;
  let article = articlesList.filter(art => art.title === router)[0];
  let articleList = articlesList
    .filter(art => article.health_topics.includes(art.health_topics))
    .slice(0, 5);

  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];

  return (
    <>
      <Layout>
        <SingleArticleMetaTag {...article} />
        {article ? (
          <>
            <main className="bg-grey pt-50 pb-50">
              <div className="pb-50">
                <div className="container w-[60vw] mt-[10vh]">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="single-content2">
                        <div className="entry-header entry-header-style-1 mb-50">
                          <PostTitle title={article.title} />
                          <PostHeader {...article} />
                        </div>

                        <PostBanner {...article} />
                        <article className="entry-wraper mb-50">
                          <PostIntro {...article} />
                          <PostContent {...article} />
                          <PostBottom {...article} />
                        </article>
                      </div>
                    </div>
                    <div className="col-lg-4 primary-sidebar sticky-sidebar">
                      <ArticleSideBar {...article} articles={articleList} />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          <p>Article Data Missing</p>
        )}
      </Layout>
    </>
  );
};

export default SinglePostTemplate;
