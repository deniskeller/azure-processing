import { useRouter } from 'next/router';
import React from 'react';
import s from './Landing.module.scss';
import Header from 'components/landing/Header/Header';
import Footer from 'components/landing/Footer/Footer';
import { BaseToast } from '@base/index';

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

        <main className={s.Content}>{children}</main>

        {footer ? <Footer /> : null}
      </div>

      <BaseToast />
    </>
  );
};

export default Landing;
