import { BaseButton } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './Auth.module.scss';

const Auth: React.FC = () => {
  const router = useRouter();

  return (
    <section className={s.Auth}>
      <div className={s.Auth_Content}>
        <div className={s.Decor}></div>

        <form className={s.Form}>
          <div className={s.Form_Title}>
            <h1>Log in</h1>
          </div>

          <ul>
            <li></li>
          </ul>

          <BaseButton className={s.Form_Button}>Log in</BaseButton>
        </form>
      </div>
    </section>
  );
};

export default Auth;
