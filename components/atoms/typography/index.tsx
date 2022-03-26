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
