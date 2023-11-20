import React, { ReactNode, forwardRef } from 'react';
import s from './BaseTitle.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  type?: string;
  className?: string;
}
export type Ref = HTMLHeadingElement;

const BaseTitle = forwardRef<Ref, Props>(function BaseTitle(
  { children, type = 'h1', className = '' },
  ref
) {
  if (type == 'h1') {
    return (
      <div className={`${className}`}>
        <h1 className={`${s.Title} ${s['Title_' + type]}`} ref={ref}>
          {children}
        </h1>
      </div>
    );
  } else if (type == 'h2') {
    return (
      <div className={`${className}`}>
        <h2 className={`${s.Title} ${s['Title_' + type]}`} ref={ref}>
          {children}
        </h2>
      </div>
    );
  } else if (type == 'h3') {
    return (
      <div className={`${className}`}>
        <h2 className={`${s.Title} ${s['Title_' + type]}`} ref={ref}>
          {children}
        </h2>
      </div>
    );
  } else {
    return null;
  }
});

export default BaseTitle;
