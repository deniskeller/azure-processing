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

  const [step, setStep] = useState(2);

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

        {step == 1 ? (
          <StepFirst onClick={() => setStep(2)} />
        ) : step == 2 ? (
          <StepTwo onClick={() => setStep(3)} onClick2={() => setStep(1)} />
        ) : step == 3 ? (
          <StepThree onClick={() => setStep(4)} onClick2={() => setStep(2)} />
        ) : step == 4 ? (
          <StepThree onClick={() => alert('end')} />
        ) : (
          <StepFirst onClick={() => setStep(2)} />
        )}
      </section>
    </BaseContainer>
  );
};

export default Registration;
