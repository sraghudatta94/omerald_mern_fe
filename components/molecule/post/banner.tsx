import { articleImagePath } from '@public/static/api';
import Image from 'next/image';
import React from 'react';

const PostBanner = ({ image }) => {
  return (
    <figure className="image mb-30 m-auto text-center border-radius-10">
      <Image
        className="w-[100%] h-[40vh]"
        src={articleImagePath + image}
        alt="profile"
        layout="responsive"
        width="500"
        height="300"
      />
    </figure>
  );
};

export default PostBanner;
