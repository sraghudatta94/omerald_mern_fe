import React, { AnchorHTMLAttributes } from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = { href: LinkProps['href']; bg: any } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>;

export const SocialIcons = ({ children, bg, href, ...props }: Props) => {
  return (
    <NextLink href={href} {...props} passHref>
      <a
        className={`social-icon text-xs-center ${bg}`}
        target="_blank"
        href="#"
      >
        {children}
      </a>
    </NextLink>
  );
};
