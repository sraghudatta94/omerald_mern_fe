import React from 'react';
import dynamic from 'next/dynamic';
import { LayoutType } from '@public/types';

const Header = dynamic(() => import('@components/organism/header'));
const Sidebar = dynamic(() => import('@components/organism/sidebar'));
const Search = dynamic(() => import('@components/organism/search'));
const Footer = dynamic(() => import('@components/organism/footer'));

const Layout: React.FC<LayoutType> = ({ children }) => {
  const openSearch = () => {
    document.body.classList.toggle('open-search-form');
  };

  const addClass = () => {
    document.body.classList.add('canvas-opened');
  };

  return (
    <>
      <Sidebar />
      <Header openSearch={openSearch} addClass={addClass} />
      <Search openSearch={openSearch} />
      <main className="d-block">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
