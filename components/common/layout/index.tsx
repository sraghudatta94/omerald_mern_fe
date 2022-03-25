import { Header } from '@components/organisms/header';
import Menu from '@components/organisms/menu';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  const openSearch = () => {
    document.body.classList.toggle('open-search-form');
  };

  return (
    <>
      <Header openSearch={openSearch} />

      {children}
    </>
  );
};
