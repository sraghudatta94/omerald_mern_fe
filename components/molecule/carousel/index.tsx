import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArticleType } from '@public/static/types/topics';
import { articleImagePath } from '@public/static/api';
import { checkReadTime } from '@public/functions/readTime';
import Image from 'next/image';

const StarIcon = dynamic(() => import('@components/atoms/icons/starIcon'));

const CarouselImage: React.FC<ArticleType> = ({
  image,
  id,
  title,
  short_description,
  author,
  description,
}: ArticleType) => {
  return (
    <div key={id} className="position-relative post-thumb">
      <div className="thumb-overlay img-hover-slide position-relative">
        <Link href={`article/${title}`}>
          <a className="img-link">
            <Image
              src={articleImagePath + image}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
            />
          </a>
        </Link>
        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
          <h3 className="post-title font-weight-900 mb-20">
            <Link href={`article/${title}`}>
              <a className="text-white">{title}</a>
            </Link>
          </h3>
          <p>{short_description}</p>
          <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
            <span className="post-on">{author ? author : 'Omerald'} </span>
            <span className="hit-count has-dot">23k views</span>
            <span className="hit-count has-dot">
              {checkReadTime(description)}
            </span>
          </div>
        </div>

        <StarIcon />
        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
          <h3 className="post-title font-weight-900 mb-20">
            <Link href={`article/${title}`}>
              <a className="text-white">{title}</a>
            </Link>
          </h3>
          <p>{short_description}</p>
          <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
            <span className="post-on">{author ? author : 'Omerald'} </span>
            <span className="hit-count has-dot">23k views</span>
            <span className="hit-count has-dot">
              {checkReadTime(description)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselImage;
