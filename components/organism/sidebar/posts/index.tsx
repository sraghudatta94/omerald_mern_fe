import { ArticleType } from '@public/static/types/topics';
import React from 'react';
import dynamic from 'next/dynamic';
import { useFetch } from 'hooks/useFetch';
import { getArticle } from '@public/static/api';

const PostContent = dynamic(() => import('./postContent/index'));
const PostImage = dynamic(() => import('./postImage/index'));

const Posts = () => {
  let { apiData } = useFetch(getArticle);
  let articlesList: ArticleType[] = apiData ? apiData.slice(0, 4) : [];

  return (
    <div className="sidebar-widget widget-latest-posts mb-50">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mt-5 mb-30">Dont miss</h5>
      </div>
      <div className="post-block-list post-module-1 post-module-5">
        <ul className="list-post">
          {articlesList.map(article => {
            return (
              <li className="mb-30" key={article.id}>
                <div className="d-flex hover-up-2 transition-normal">
                  <PostImage {...article} />
                  <PostContent {...article} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
