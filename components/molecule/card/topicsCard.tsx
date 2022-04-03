import { formatDate } from '@public/functions/readTime';
import { topicImagePath } from '@public/static/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopicsCard = ({ id, image, title, created_at }) => {
  return (
    <li className="mb-30 wow fadeInUp animated" key={id}>
      <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image
                src={topicImagePath + image}
                alt="logo"
                width="80"
                height="80"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
              />
            </a>
          </Link>
        </div>
        <div className="post-content media-body">
          <p className="mb-10">
            <Link href="/author">
              <a>
                <strong>{title}</strong>
              </a>
            </Link>
          </p>
          <p className="font-small text-muted has-dot">
            {formatDate(created_at)}
          </p>
          <a href="#" className="text-blue">
            Find Articles
          </a>
        </div>
      </div>
    </li>
  );
};
export default TopicsCard;
