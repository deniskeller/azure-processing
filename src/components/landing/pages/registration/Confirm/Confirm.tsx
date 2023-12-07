import { BaseButton, BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './Confirm.module.scss';
import Image from 'next/image';

interface Props {
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Confirm: React.FC<Props> = ({ onClick }) => {
  const router = useRouter();

  return (
    <div className={s.Step}>
      <Image
        src="/pictures/images/sign-up-image.png"
        width={220}
        height={183}
        alt=""
        className={s.Step_Image}
      />

      <div className={s.Step_Title}>
        <h1>Thank you!</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>
          Usually, it takes up to 24 hours to review application. Our manager
          will contact you soon.
        </p>
      </div>

      <BaseButton
        onClick={() => {
          sessionStorage.setItem('step', '1');
          sessionStorage.setItem(
            'formData',
            JSON.stringify({
              nameSurname: '',
              birthDate: '',
              email: '',
              phone: '',
              password: '',
              confirmPassword: '',
            })
          );
          router.push('/');
        }}
        className={s.Step_Button}
      >
        Go to main page
      </BaseButton>
    </div>
  );
};

export default Confirm;
