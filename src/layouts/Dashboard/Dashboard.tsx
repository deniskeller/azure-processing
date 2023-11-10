import { BaseToast } from '@base/index';
import Header from 'components/dashboard/Header/Header';
import Sidebar from 'components/dashboard/Sidebar/Sidebar';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Dashboard.module.scss';
import Image from 'next/image';

const pages = [
  {
    name: 'Vehicles',
    path: '/dashboard/vehicles',
  },
  {
    name: 'BLVC team',
    path: '/dashboard/team',
  },
  {
    name: 'Website forms',
    path: '/dashboard/website-forms',
  },
  {
    name: 'Merch store',
    path: '/dashboard/merch-store',
  },
];

interface Props {
  children: JSX.Element;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className={s.Dashboard}>
        <Header />

        <div className={s.Dashboard_Body}>
          <Sidebar pages={pages} className={s.Sidebar} />

          <div className={s.Content}>{children}</div>

          <div
            className={s.Background}
            style={{
              backgroundImage: 'url(/pictures/images/main-car-bg2.png)',
            }}
          >
            {/* <Image
              src={'/pictures/images/main-car-bg2.png'}
              alt="background image"
              width={1920}
              height={808}
              priority
              className={s.Background_Image}
            /> */}
          </div>
        </div>
      </div>
      <BaseToast />
    </>
  );
};

export default Dashboard;
