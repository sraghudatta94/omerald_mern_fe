import React from 'react';
import Image from 'next/image';
import logo from '../../../public/static/logo-white.jpg';

const Logo = (): React.ReactElement => {
  return <Image src={logo} width="250" height="100" alt="logo" />;
};

export default Logo;
