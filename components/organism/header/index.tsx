import { LeftHeader, RightHeader } from '@components/molecule/header';
import React from 'react';
import Menu from '../menu';

type HeaderProp = {
  openSearch: Function;
  addClass: Function;
};

export const Header: React.FC<HeaderProp> = ({ openSearch, addClass }) => {
  return (
    <header className="main-header header-style-1 font-heading">
      <div className="header-top">
        <div className="container ">
          <div className="row pt-20 pb-20">
            <LeftHeader />
            <RightHeader openSearch={openSearch} />
          </div>
        </div>
      </div>
      <Menu addClass={addClass} />
    </header>
  );
};
