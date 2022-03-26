import Image from 'next/image';
import React from 'react';
import { Links } from '@components/atoms/link';
import { ArticleType } from '@public/static/types/topics';

export const PostImage: React.FC<ArticleType> = ({ image, url }) => {
  return (
    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
      <Links href={url}>
        <a className="color-white">
          <Image
            width="100"
            height="60"
            className="rounded border-2"
            src={image}
            alt="postImage"
          />
        </a>
      </Links>
    </div>
  );
};
