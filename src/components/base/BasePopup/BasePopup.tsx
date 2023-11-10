import { useMount } from '@hooks/useMount';
import React, { ReactNode, useEffect, useState } from 'react';
import { BasePortal } from '..';
import s from './BasePopup.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  size?: string;
  type?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
}

const BasePopup: React.FC<Props> = ({
  children,
  className = '',
  opened,
  onClick,
  size = '',
  type = '',
}) => {
  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.keyCode === 27) {
        onClick(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClick]);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [opened]);

  const { mounted } = useMount({ opened });
  const [animationIn, setAnimationIn] = useState(mounted);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIn(opened);
    }, 100);
  }, [opened]);

  if (!mounted) {
    return null;
  }

  return (
    <BasePortal>
      <div className={`${s.Wrapper} ${animationIn ? s.Visible : ''}`}>
        <div className={s.Overlay} onClick={() => onClick(false)}></div>

        <div
          className={`${s.Popup} ${className} ${
            size ? s['Popup_' + size] : ''
          } ${type ? s['Popup_' + type] : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className={s.Popup_Close}
            onClick={() => onClick(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.15128 5.15225C5.61991 4.68362 6.3797 4.68362 6.84833 5.15225L11.9998 10.3037L17.1513 5.15225C17.6199 4.68362 18.3797 4.68362 18.8483 5.15225C19.317 5.62088 19.317 6.38068 18.8483 6.84931L13.6969 12.0008L18.8483 17.1523C19.317 17.6209 19.317 18.3807 18.8483 18.8493C18.3797 19.3179 17.6199 19.3179 17.1513 18.8493L11.9998 13.6978L6.84833 18.8493C6.3797 19.3179 5.61991 19.3179 5.15128 18.8493C4.68265 18.3807 4.68265 17.6209 5.15128 17.1523L10.3027 12.0008L5.15128 6.84931C4.68265 6.38068 4.68265 5.62088 5.15128 5.15225Z"
              fill="#1A1A1A"
              fillOpacity="0.3"
            />
          </svg>

          {children}
        </div>
      </div>
    </BasePortal>
  );
};

export default BasePopup;
