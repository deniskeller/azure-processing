import { BaseButtonApp, BaseInputApp, BaseToast } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './Auth.module.scss';
import toast from 'react-hot-toast';

interface IFormData {
  email: string;
  password: string;
}

const test_login = {
  email: 'test',
  password: '123',
};

const Auth: React.FC = () => {
  const router = useRouter();

  const [value, setValue] = useState<IFormData>({
    email: '',
    password: '',
  });

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const [error, setError] = useState(false);
  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      value.email == test_login.email &&
      value.password == test_login.password
    ) {
      setError(false);
      router.push('/dashboard/vehicles');
    } else {
      setError(true);
      setTimeout(() => {
        toast.error('An error occurred during authorization. Try again', {
          duration: 3000,
          className: 'dashboard',
        });
      }, 500);
    }
  };

  return (
    <section
      className={s.Auth}
      style={{ backgroundImage: 'url(/pictures/images/auth-bg-min.jpg)' }}
    >
      <div className={s.Auth_Content}>
        <div className={s.Decor}></div>

        <form className={s.Form}>
          <div className={s.Form_Title}>
            <h1>Log in</h1>
          </div>

          <ul>
            <li>
              <BaseInputApp
                theme="light"
                name="email"
                label="Email"
                type="text"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={error}
              />
            </li>

            <li className={s.Password}>
              <BaseInputApp
                theme="light"
                name="password"
                label="Password"
                type="password"
                autocomplete="new-password"
                value={value.password}
                onChange={(val: string) => setNewValue(val, 'password')}
                error={error}
                className={s.Password_Input}
              />
              <Link href="/forgot-password" className={s.Link}>
                <span>Forgot password?</span>
              </Link>
            </li>
          </ul>

          <BaseButtonApp
            // title="Log in"
            className={s.Form_Button}
            onClick={submitFormHandler}
          >
            Log in
          </BaseButtonApp>
        </form>

        <Link href="/" className={s.Back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="17"
            viewBox="0 0 65 17"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 9H79.8984V8H1V9Z"
              fill="white"
            />
            <path d="M8.53125 14.4219L0.530285 8.41646" stroke="white" />
            <path d="M0.53125 8.5L8.53125 2.5" stroke="white" />
          </svg>

          <span>to website</span>
        </Link>
      </div>

      <div className={s.Copyright}>
        <p>All rights reserved © 2023 © BLVC</p>
      </div>

      <BaseToast />
    </section>
  );
};

export default Auth;
