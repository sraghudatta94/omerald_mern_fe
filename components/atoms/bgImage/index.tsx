import React, { Children } from 'react';

type BackgroundImage = {
  image: string;
};

export const BackgroundImage: React.FC<BackgroundImage> = ({
  children,
  image,
}) => {
  return (
    <div
      className="thumb-overlay img-hover-slide position-relative"
      style={{
        backgroundImage: `url${image}`,
      }}
    >
      {children}
    </div>
  );
};
