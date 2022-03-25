import React from 'react';
import Image from 'next/image';
import logo from '../../../public/static/logo.png';

const Logo = (): React.ReactElement => {
  return <Image src={logo} width="200" height="70" />;
};

export default Logo;
