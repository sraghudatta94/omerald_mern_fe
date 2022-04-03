import SocialLinks from '@components/molecule/social';
import { getAuthorName } from '@public/functions/readTime';
import { UserType } from '@public/static/types/topics';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

export const AuthorProfile = (writer_Id: any) => {
  let redux = useSelector((state: any) => state);
  let userList: UserType[] = redux.users ? redux.users.data : [];
  userList = userList.filter(user => user.name !== null);

  return (
    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
      <Image
        className="about-author-img mb-5"
        src="https://res.cloudinary.com/raghu369/image/upload/v1648797906/Omerald/assets/icon-5404125_1280_wdlqq6.webp"
        alt=""
        width="100"
        height="100"
      />
      <h5 className="mb-20">Hello, </h5>
      <p className="font-medium text-muted mb-10">
        Hi, I’m {getAuthorName(writer_Id, userList)}, author for this article,
        you could reach out to me for more info.
      </p>
      <strong>Follow me: </strong>
      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
        <SocialLinks />
      </ul>
    </div>
  );
};
export default AuthorProfile;
