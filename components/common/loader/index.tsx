import { loaderImage } from '@public/assets/imgs';
import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="m-auto text-2xl text-center pt-[10vh]">
      <Image src={loaderImage} width="200" height="150" alt="loader" />
    </div>
  );
};
export default Loader;
