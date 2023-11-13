import React, { ReactNode } from 'react';
import s from './BaseText.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  className?: string;
}

const BaseText: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      <p className={s.Text}>{children}</p>
    </div>
  );
};

export default BaseText;
