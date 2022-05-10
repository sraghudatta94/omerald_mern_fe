import React from 'react';
import Image from 'next/image';
import { articleImagePath } from '@public/static/api';
import { ArticleType } from '@public/static/types/topics';
import Link from 'next/link';

const CarouselImage: React.FC<ArticleType> = ({
  title,
  id,
  image,
  short_description,
  slug,
}: ArticleType) => {

  return (
    <div key={id} className="position-relative post-thumb">
      <div className="thumb-overlay img-hover-slide">
        <Link href={`/article/singlePost/${id}`} passHref>       
            <div className="img-link">
              <Image
                alt="articleImage"
                src={articleImagePath + image}
                width="800"
                height="500"
                blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
              />
              <div className="post-content-overlay text-white bg-gray-800 opacity-35 w-[100%] text-2xl text-bold italic p-20">
                <Link href={`/article/post/${slug}`}>
                  <a><p>{title}</p></a>
                </Link>

                <p className="text-sm font-light text-white max-h-[4vh] max-w-[85%] overflow-hidden">
                  {short_description}
                </p>
              </div>
            </div>         
        </Link>
      </div>
    </div>
  );
};

export default CarouselImage;
