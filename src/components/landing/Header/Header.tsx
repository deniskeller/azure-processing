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
    <div className={s.Header}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 408"
                fill="none"
                className={s.Logo}
              >
                <path
                  d="M0.502441 203.767C0.502441 91.5161 91.5 0.518555 203.751 0.518555V0.518555C316.003 0.518555 407 91.5162 407 203.767V385.336C407 397.31 397.294 407.016 385.32 407.016H203.751C91.4999 407.016 0.502441 316.019 0.502441 203.767V203.767Z"
                  fill="url(#paint0_linear_623_4045)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_623_4045"
                    x1="73.377"
                    y1="33.5264"
                    x2="399.052"
                    y2="411.623"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#425EEC" />
                    <stop offset="1" stopColor="#7E93FA" />
                  </linearGradient>
                </defs>
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
    </div>
  );
};

export default Header;
