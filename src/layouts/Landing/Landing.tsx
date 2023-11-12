import { useRouter } from 'next/router';
import React from 'react';
import s from './Landing.module.scss';
import Header from 'components/landing/Header/Header';

const pages = [
  {
    name: 'About & Contacts',
    href: '/about-and-contacts',
  },
  {
    name: 'Service Providers',
    href: '/service-providers',
  },
  {
    name: 'Merchant Protection',
    href: '/merchant-protection',
  },
];

interface Props {
  children: JSX.Element;
  footer?: boolean;
}

const Landing: React.FC<Props> = ({ children, footer = true }) => {
  const router = useRouter();

  return (
    <>
      <div className={s.Landing}>
        <Header pages={pages} />

        <div className={s.Content}>{children}</div>

        {footer ? <div className={s.Footer}>Footer</div> : null}
      </div>
    </>
  );
};

export default Landing;
