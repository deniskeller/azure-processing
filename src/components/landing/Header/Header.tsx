import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import { Logo } from '../content';
import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ILink {
  name: string;
  href: string;
}

interface Props {
  pages: ILink[];
}

const Header: React.FC<Props> = ({ pages }) => {
  const router = useRouter();

  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  useEffect(() => {
    if (isVisibleSidebar) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isVisibleSidebar]);

  return (
    <header className={s.Header}>
      <BaseContainer className={s.Header_Container}>
        <Logo className={s.Header_Logo} />

        <ul className={s.Header_Navbar}>
          {pages?.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`${s.Link} ${
                    router.pathname.split('/')[1] === link.href.split('/')[1]
                      ? s.Link_Active
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={s.Header_Actions}>
          <BaseButton
            onClick={() => router.push('/login')}
            type="empty"
            className={s.Login}
          >
            Log in
          </BaseButton>

          <BaseButton
            onClick={() => router.push('/sign-up')}
            className={s.SignUp}
          >
            Sign up
          </BaseButton>
        </div>

        <div
          className={s.Header_Burder}
          onClick={() => setIsVisibleSidebar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 43 21"
            fill="none"
          >
            <path
              d="M3.5 6.19824H39.5M3.5 14.1982H32"
              stroke="#1A1A1A"
              strokeOpacity="0.9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`${s.Header_Sidebar} ${
            isVisibleSidebar ? s.Header_Sidebar_Visible : null
          }`}
        >
          <div
            className={s.Overlay}
            onClick={() => setIsVisibleSidebar(false)}
          ></div>

          <div className={s.Sidebar}>
            <div className={s.Sidebar_Content}>
              <Logo className={s.Logo} />

              <svg
                viewBox="0 0 407 407"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.Icon}
              >
                <path
                  d="M0 203.249C0 90.9976 90.9976 0 203.249 0C315.5 0 406.498 90.9976 406.498 203.249V384.818C406.498 396.791 396.791 406.498 384.818 406.498H203.249C90.9975 406.498 0 315.5 0 203.249Z"
                  fill="#EDF0FD"
                />
                <path
                  d="M351.593 203.252V351.595H297.492V203.252C297.492 177.267 288.184 155.161 269.568 136.933C251.34 118.318 229.234 109.01 203.25 109.01C177.266 109.01 154.966 118.318 136.35 136.933C118.122 155.161 109.008 177.267 109.008 203.252C109.008 229.236 118.122 251.536 136.35 270.152C154.966 288.38 177.266 297.493 203.25 297.493C212.17 297.493 221.09 296.33 230.01 294.003V349.268C221.09 350.82 212.17 351.595 203.25 351.595C162.14 351.595 127.042 337.246 97.9552 308.546C69.2561 279.46 54.9065 244.555 54.9065 203.833C54.9065 162.724 69.2561 127.626 97.9552 98.5387C127.042 69.4517 161.947 54.9082 202.668 54.9082C243.778 54.9082 278.876 69.4517 307.963 98.5387C337.05 127.626 351.593 162.53 351.593 203.252Z"
                  fill="white"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 37 37"
                fill="none"
                className={s.Close}
                onClick={() => setIsVisibleSidebar(false)}
              >
                <path
                  d="M9.25 27.75L27.75 9.25M9.25 9.25L27.75 27.75"
                  stroke="#1A1A1A"
                  strokeOpacity="0.9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <ul className={s.Navbar}>
                {pages?.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={`${s.Link} ${
                          router.pathname.split('/')[1] ===
                          link.href.split('/')[1]
                            ? s.Link_Active
                            : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className={s.Actions}>
                <Link href={'/login'} className={s.Login}>
                  Log in
                </Link>
                <Link href={'/sign-up'} className={s.SignUp}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </header>
  );
};

export default Header;
