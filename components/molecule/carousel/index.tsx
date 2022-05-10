import React from 'react';
import Image from 'next/image';
import filterListActionCreator from 'redux/actions/filterList';
import { articleImagePath, bannerImagePath } from '@public/static/api';
import { ArticleType, BannerType } from '@public/static/types/topics';
import { useDispatch } from 'react-redux';
import Router, { withRouter } from 'next/router';
import Link from 'next/link';

const CarouselImage: React.FC<ArticleType> = ({
  title,
  id,
  image,
  short_description,
  slug,
}: ArticleType) => {
  const dispatch = useDispatch();

  // const showFilteredArticles = async (articleId: number) => {
  //   let data = await fetch('http://localhost:3000/api/singleArticle', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       id: articleId.toString(),
  //     },
  //   });

  //   let article = await data.json();
  //   filterListActionCreator.addfilterList(dispatch, article[0].health_topics);
  //   Router.push({ pathname: '/article/filter' });
  // };

  return (
    <div key={id} className="position-relative post-thumb">
      <div className="thumb-overlay img-hover-slide position-relative">
        <Link href={`/article/singlePost/${id}`}>
          <a>
            <div className="img-link">
              <Image
                alt="articleImage"
                src={articleImagePath + image}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
              />
              <div className="post-content-overlay text-white bg-gray-800 opacity-35 w-[100%] text-2xl text-bold italic p-20">
                <Link href={`/article/post/${slug}`}>
                  <a>
                    <p>{title}</p>
                  </a>
                </Link>

                <p className="text-sm font-light text-white max-h-[4vh] max-w-[85%] overflow-hidden">
                  {short_description}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CarouselImage;
