import { BaseButton, BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './StepThree.module.scss';
import { InputUploadPhoto } from '@content/landing/index';

interface Props {
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  onClick2?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const StepThree: React.FC<Props> = ({ onClick, onClick2 }) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(true);

  return (
    <div className={s.Step}>
      <div className={s.Step_Counter}>
        <span>Step&nbsp;3/3</span>
      </div>

      <div className={s.Step_Title}>
        <h1>Selfie with ID/Password</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>Make sure both your face and the document are clearly visible</p>
      </div>

      <div className={s.Step_Form}>
        <div className={s.Title}>
          <h2>Upload selfie photos (up to two photos)</h2>
        </div>

        <InputUploadPhoto setDisabled={setDisabled} />
      </div>

      <div className={s.Step_Actions}>
        <BaseButton onClick={onClick2} className={s.Back} type="empty">
          Back
        </BaseButton>

        <BaseButton
          onClick={onClick}
          className={s.NextStep}
          disabled={disabled}
        >
          Сonfirm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={`${s.NextStep_Icon} ${
              disabled ? s.NextStep_Icon_Disabled : null
            }`}
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

export default StepThree;
