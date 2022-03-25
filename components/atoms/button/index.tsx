import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
};
export const Button: React.FC<Props> = ({
  className,
  children,
  ...props
}: Props) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'btn btn-radius bg-primary text-white ml-15 font-small box-shadow',
};
