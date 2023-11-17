import { BaseButton, BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './StepTwo.module.scss';

const StepTwo: React.FC = () => {
  const router = useRouter();

  return (
    <div className={s.Step}>
      <div className={s.Step_Counter}>
        <span>Step&nbsp;2/3</span>
      </div>

      <div className={s.Step_Title}>
        <h1>ID/Passport</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>
          Make sure that photo is of high quality and there are no highlights on
          the documents
        </p>
      </div>

      <div className={s.Step_Form}></div>

      <div className={s.Step_Actions}>
        <BaseButton
          onClick={() => router.push('/login')}
          className={s.NextStep}
        >
          Next step
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={s.NextStep_Icon}
          >
            <path
              d="M4 12.5H20M20 12.5L14 6.5M20 12.5L14 18.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BaseButton>
      </div>
    </div>
  );
};

export default StepTwo;
