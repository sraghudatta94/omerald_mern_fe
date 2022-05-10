import React from 'react';
import Image from 'next/image';
import logo from '../../../public/static/logo.jpg';

const Logo = (): React.ReactElement => {
  return <Image src={logo} width="170" height="70" alt="logo" />;
};

export default Logo;
