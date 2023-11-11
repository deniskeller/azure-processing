import { useRouter } from 'next/router';
import React from 'react';
import s from './Landing.module.scss';
// import Header from 'components/dashboard/Header/Header';

const pages = [
  {
    name: 'About & Contacts',
    path: '/about-and-contacts',
  },
  {
    name: 'Service Providers',
    path: '/service-providers',
  },
  {
    name: 'Merchant Protection',
    path: '/merchant-protection',
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
        {/* <Header /> */}

        <div className={s.Content}>{children}</div>

        {footer ? <div className="">Footer</div> : null}
      </div>
    </>
  );
};

export default Landing;
