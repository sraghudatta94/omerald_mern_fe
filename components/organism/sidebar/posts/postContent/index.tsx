import { Links } from '@components/atoms/link';
import { ArticleType } from '@public/static/types/topics';
import React from 'react';

const PostContent: React.FC<ArticleType> = ({ title }) => {
  return (
    <div className="post-content media-body">
      <h6 className="post-title mb-15 text-limit-2-row font-medium">
        <Links href={`/article/${encodeURIComponent(title)}`}>{title}</Links>
      </h6>
      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
        <span className="post-on">05 August</span>
        <span className="post-by has-dot">300 views</span>
      </div>
    </div>
  );
};

export default PostContent;
