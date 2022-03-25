import React, { AnchorHTMLAttributes } from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = { href: LinkProps['href'] } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>;

export const Links = ({ children, href, ...props }: Props) => {
  return (
    <NextLink href={href} {...props} passHref>
      {children}
    </NextLink>
  );
};
