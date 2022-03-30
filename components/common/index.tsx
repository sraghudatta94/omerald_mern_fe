import Footer from '@components/organism/footer';
import { Header } from '@components/organism/header';
import { Search } from '@components/organism/search';
import { Sidebar } from '@components/organism/sidebar';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
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
      <Search />
      {children}
      <Footer />
    </>
  );
};
