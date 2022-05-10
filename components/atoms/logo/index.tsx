import React from 'react';
import Image from 'next/image';
import logo from '../../../public/static/logo.jpg';

const Logo = (): React.ReactElement => {
  return <Image src={logo} width="220" height="100" alt="logo" />;
};

export default Logo;
