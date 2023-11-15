import React from 'react';
import s from './Main.module.scss';
import { Header, Second } from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      <Second />
    </div>
  );
};

export default Main;
