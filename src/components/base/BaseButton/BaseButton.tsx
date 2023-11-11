import React, { MutableRefObject, ReactNode } from 'react';
import s from './BaseButton.module.scss';

interface Props {
  children: string | ReactNode | ReactNode[];
  type?: string;
  ref?: MutableRefObject<null>;
  disabled?: boolean;
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<Props> = ({
  children,
  disabled = false,
  type = 'primary',
  className = '',
  ref,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${s.Button} ${s['Button_' + type]}`}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default BaseButton;
