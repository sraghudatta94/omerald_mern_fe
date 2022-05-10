import { articleImagePath } from '@public/static/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SearchedArticleCard = ({ id, image, slug,title, short_description }: any) => {
  return (
    <div className="col-lg-4 col-md-6" key={id}>
      <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Image
            src={articleImagePath + image}
            width="80"
            height="80"
            alt="articleImage"
          />
        </div>
        <div className="post-content media-body">
          <h6 className="max-h-[20px] overflow-hidden">
            <Link href={`/article/post/${slug}`}>
              <a>{title}</a>
            </Link>
          </h6>
          <p className="text-muted font-small my-2 max-h-[50px] h-[50px] overflow-hidden">
            {short_description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SearchedArticleCard;
