import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { CarouselImage } from '@components/molecule/carousel';
import { articleList } from '@public/static/data/topics';

export const PostCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <Slider {...settings} className="slide-fade">
          {articleList.map(article => {
            return (
              <>
                <CarouselImage {...article} />
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
