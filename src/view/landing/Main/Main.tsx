import React from 'react';
import s from './Main.module.scss';
import {
  ForRegistration,
  Header,
  HowItWork,
  PaymentCardSchemes,
  Second,
} from 'components/landing/pages/main';
import { LinesWithGradient } from '@content/landing/index';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <LinesWithGradient className={s.Main_Lines} />
      <Header />
      <Second />

      <PaymentCardSchemes />
      <HowItWork />
      <ForRegistration />
    </div>
  );
};

export default Main;
