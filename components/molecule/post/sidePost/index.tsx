import { Links } from '@components/atoms/link';
import PopularCard from '@components/molecule/card/popularCard';
import SocialLinks from '@components/molecule/social';
import { getAuthorName } from '@public/functions/readTime';
import { geRecentArticle, getArticle } from '@public/static/api';
import { ArticleType, UserType } from '@public/static/types/topics';
import { useFetch } from 'hooks/useFetch';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AuthorProfile from './authorProfile';
import SimilarTopics from './similarTopics';

const ArticleSideBar: FC<ArticleType> = ({ writer_Id, health_topics }: any) => {
  let [recentArticle, setRecentArticle] = useState([]);

  return (
    <div className="widget-area">
      <AuthorProfile writer_Id={writer_Id} />
      <SimilarTopics health_topics={health_topics} />
      <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
        <div className="widget-header-1 position-relative mb-30">
          <h5 className="mt-5 mb-30">Similar Articles</h5>
        </div>
        <div className="post-block-list post-module-1">
          <ul className="list-post">
            {/* {articleList.map(article => {
              return <PopularCard key={article.id} {...article} />;
            })} */}
          </ul>
        </div>
      </div>
      <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
        <div className="widget-header-1 position-relative mb-30">
          <h5 className="mt-5 mb-30">Recent Articles</h5>
        </div>
        <div className="post-block-list post-module-1">
          <ul className="list-post">
            {recentArticle ? (
              recentArticle.map(article => {
                return <PopularCard key={article.id} {...article} />;
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleSideBar;
