import { LeftHeader, RighHeader } from '@components/molecules/header';
import React from 'react';
import Menu from '../menu';

type HeaderProp = {
  openSearch: Function;
};

export const Header: React.FC<HeaderProp> = ({ openSearch }) => {
  return (
    <header className="main-header header-style-1 font-heading">
      <div className="header-top">
        <div className="container">
          <div className="row pt-20 pb-20">
            <LeftHeader />
            <RighHeader openSearch={openSearch} />
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
};
