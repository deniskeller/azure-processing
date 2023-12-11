import { BaseContainer } from '@base/index';
import Link from 'next/link';
import React, { useState, useLayoutEffect } from 'react';
import s from './Registration.module.scss';
import {
  Confirm,
  StepFirst,
  StepThree,
  StepTwo,
} from 'components/landing/pages/registration';
import toast from 'react-hot-toast';

const Registration: React.FC = () => {
  const [step, setStep] = useState(1);

  useLayoutEffect(() => {
    const currentStep = sessionStorage.getItem('step');
    if (currentStep !== null) {
      setStep(+currentStep);
    }
  }, [step]);

  async function submitHandler() {
    const formData = sessionStorage.getItem('formData');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStep(4);
        sessionStorage.setItem('step', '4');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }

  return (
    <BaseContainer>
      <section className={s.Registration}>
        {step != 4 ? (
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
        ) : null}

        {step == 1 ? (
          <StepFirst nextStep={() => setStep(2)} />
        ) : step == 2 ? (
          <StepTwo
            backStep={() => {
              setStep(1);
              sessionStorage.setItem('step', '1');
            }}
            nextStep={() => {
              sessionStorage.setItem('step', '3');
              setStep(3);
            }}
          />
        ) : step == 3 ? (
          <StepThree
            confirm={submitHandler}
            backStep={() => {
              setStep(2);
              sessionStorage.setItem('step', '2');
            }}
          />
        ) : step == 4 ? (
          <Confirm />
        ) : null}
      </section>
    </BaseContainer>
  );
};

export default Registration;
