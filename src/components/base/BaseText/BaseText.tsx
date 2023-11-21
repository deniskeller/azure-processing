import React, { ReactNode, forwardRef } from 'react';
import s from './BaseText.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  className?: string;
}
export type Ref = HTMLHeadingElement;

const BaseText = forwardRef<Ref, Props>(function BaseText(
  { children, className = '' },
  ref
) {
  return (
    <div className={`${className}`}>
      <p className={s.Text} ref={ref}>
        {children}
      </p>
    </div>
  );
});

export default BaseText;
