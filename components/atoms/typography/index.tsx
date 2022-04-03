import React, { HTMLAttributes } from 'react';

export function H1({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <p className="text-md text-gray-700 " {...props}>
      {children}
    </p>
  );
}

export function H5({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <p className="text-sm text-gray-700 " {...props}>
      {children}
    </p>
  );
}

export function PostTitle({ title }: HTMLAttributes<HTMLElement>) {
  return <h1 className="entry-title mb-30 font-weight-900">{title}</h1>;
}
