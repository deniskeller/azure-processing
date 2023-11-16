import React from 'react';
import s from './Main.module.scss';
import {
  Header,
  PaymentCardSchemes,
  Second,
} from 'components/landing/pages/main';
import { LinesWithGradient } from '@content/landing/index';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <LinesWithGradient />
      <Header />
      <Second />

      <PaymentCardSchemes />
    </div>
  );
};

export default Main;
