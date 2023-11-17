import { BaseButton, BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './Registration.module.scss';
import {
  StepFirst,
  StepThree,
  StepTwo,
} from 'components/landing/pages/registration';

const Registration: React.FC = () => {
  const router = useRouter();

  return (
    <BaseContainer>
      <section className={s.Registration}>
        <Link href={'/'} className={s.Registration_Back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={s.Icon}
          >
            <path
              d="M20 12H4M4 12L10 6M4 12L10 18"
              stroke="#1A1A1A"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className={s.Label}>Go to main page</p>
        </Link>

        <StepFirst />
        {/* <StepTwo />
        <StepThree /> */}
      </section>
    </BaseContainer>
  );
};

export default Registration;
