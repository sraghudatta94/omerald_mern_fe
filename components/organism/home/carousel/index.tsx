import React from 'react';
import Slider from 'react-slick';
import dynamic from 'next/dynamic';
import { BannerType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';

const CarouselImage = dynamic(() => import('@components/molecule/carousel'));

const PostCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let redux = useSelector((state: any) => state);
  let bannersList: BannerType[] = redux.banners.data ? redux.banners.data : [];

  return (
    <div>
      <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <Slider {...settings} className="slide-fade">
          {bannersList.map(article => {
            return <CarouselImage key={article.id} {...article} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PostCarousel;
