import React from 'react';
import Image from 'next/image';
import filterListActionCreator from 'redux/actions/filterList';
import { bannerImagePath } from '@public/static/api';
import { BannerType } from '@public/static/types/topics';
import { useDispatch } from 'react-redux';
import Router, { withRouter } from 'next/router';
import Link from 'next/link';

const CarouselImage: React.FC<BannerType> = ({
  image,
  id,
  description,
}: BannerType) => {
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
                src={bannerImagePath + image}
                objectFit="cover"
                layout="responsive"
                width="500"
                height={'400'}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
              />
              <div className="post-content-overlay text-black text-xl text-bold italic ml-30 mr-30 pb-30">
                <p>{description}</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CarouselImage;
