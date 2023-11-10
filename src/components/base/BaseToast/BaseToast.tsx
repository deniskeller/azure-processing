//@ts-nocheck
import React from 'react';
import { ToastType, toast as toastOBj, useToaster } from 'react-hot-toast';
import s from './BaseToast.module.scss';

const BaseToast: React.FC = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  const typeIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              fill="none"
              className={s.Icon}
            >
              <path
                d="M16.5 22L20.1667 25.6667L27.5 18.3333M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22Z"
                stroke="#1B2454"
                strokeOpacity="0.85"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        );
      case 'error':
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              fill="none"
              className={s.Icon}
            >
              <path
                d="M22 14.6667V22M22 29.3333H22.0183M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${s.BaseToast} ${
        toasts[0]?.className == 'dashboard' ? s.BaseToastApp : ''
      }`}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map((toast) => {
        const offset = calculateOffset(toast, {
          reverseOrder: true,
          gutter: 8,
        });

        const ref = (el) => {
          if (el && typeof toast.height !== 'number') {
            const height = el.getBoundingClientRect().height;
            updateHeight(toast.id, height);
          }
        };

        return (
          <div
            className={s.Wrapper}
            ref={ref}
            key={toast.id}
            style={{
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(${offset}px)`,
            }}
            {...toast.ariaProps}
          >
            <div className={s.BaseToast_Toast}>
              <div className={s.BaseToast_Content}>
                {toast.className == 'dashboard' ? typeIcon(toast.type) : null}

                <div className={s.Text}>
                  <p>{toast.message}</p>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className={s.BaseToast_Close}
                onClick={() => {
                  toast.visible = false;
                  toastOBj.dismiss(toast.id);
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.15146 5.15225C5.62009 4.68362 6.37989 4.68362 6.84852 5.15225L12 10.3037L17.1515 5.15225C17.6201 4.68362 18.3799 4.68362 18.8485 5.15225C19.3171 5.62088 19.3171 6.38068 18.8485 6.84931L13.697 12.0008L18.8485 17.1523C19.3171 17.6209 19.3171 18.3807 18.8485 18.8493C18.3799 19.3179 17.6201 19.3179 17.1515 18.8493L12 13.6978L6.84852 18.8493C6.37989 19.3179 5.62009 19.3179 5.15146 18.8493C4.68283 18.3807 4.68283 17.6209 5.15146 17.1523L10.3029 12.0008L5.15146 6.84931C4.68283 6.38068 4.68283 5.62088 5.15146 5.15225Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BaseToast;
