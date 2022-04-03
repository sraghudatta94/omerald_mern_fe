import { Links } from '@components/atoms/link';
import { blurImage } from '@public/assets/imgs/blur';
import { checkReadTime, formatDate } from '@public/functions/readTime';
import Image from 'next/image';
import React from 'react';
import SocialLinks from '../social';

const PostHeader = ({ description, created_at }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="entry-meta align-items-center meta-2 font-small color-muted">
          <p className="mb-5">
            <Links href="/author">
              <a className="author-avatar" href="#">
                <Image
                  className="img-circle"
                  src="https://res.cloudinary.com/raghu369/image/upload/v1648797906/Omerald/assets/icon-5404125_1280_wdlqq6.webp"
                  alt="profile"
                  width="50"
                  height="50"
                  placeholder="blur"
                  blurDataURL={blurImage}
                />
              </a>
            </Links>

            <br />
          </p>
          <span className="mr-10">{formatDate(created_at)}</span>
          <span className="has-dot">{checkReadTime(description)}</span>
        </div>
      </div>
      <div className="col-md-6 text-right d-none d-md-inline">
        <ul className="header-social-network d-inline-block list-inline mr-15">
          <br />
          <li className="list-inline-item text-muted">
            <span>Share this: </span>
          </li>
          <SocialLinks />
        </ul>
      </div>
    </div>
  );
};

export default PostHeader;
