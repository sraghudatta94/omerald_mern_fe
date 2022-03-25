import { Button } from '@components/atoms/button';
import { Links } from '@components/atoms/link';
import Logo from '@components/atoms/logo';
import React from 'react';

type HeaderProp = {
  openSearch: Function;
};

export const RighHeader: React.FC<HeaderProp> = ({ openSearch }: any) => {
  return (
    <div className="col-md-9 col-xs-6 text-right header-top-right">
      <Button className="search-icon d-none d-md-inline" onClick={openSearch}>
        <span className="mr-15 text-muted font-small">
          <i className="elegant-icon icon_search mr-5"></i>
          Search
        </span>
      </Button>
      <Button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
        Register
      </Button>
    </div>
  );
};

export const LeftHeader: React.FC = () => {
  return (
    <div className="col-md-3 col-xs-6">
      <Links href="/">
        <a>
          <Logo />
        </a>
      </Links>
    </div>
  );
};
