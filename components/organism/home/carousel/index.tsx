import React from 'react';
import Slider from 'react-slick';
import CarouselImage from '@components/molecule/carousel';
import { ArticleType } from '@public/static/types/topics';

type Props = {
  articles?: ArticleType[];
};

const PostCarousel: React.FC<Props> = ({ articles }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let articlesList: ArticleType[] = articles ? articles.slice(37, 40) : [];

  return (
    <div>
      <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <Slider {...settings} className="slide-fade">
          {articlesList.map(article => {
            return <CarouselImage key={article.id} {...article} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PostCarousel;
