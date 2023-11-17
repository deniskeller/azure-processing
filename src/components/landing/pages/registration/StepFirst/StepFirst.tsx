import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import s from './StepFirst.module.scss';

interface IFormData {
  name_surname: string;
  birh_date: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

const StepFirst: React.FC = () => {
  const router = useRouter();

  const [value, setValue] = React.useState<IFormData>({
    name_surname: '',
    birh_date: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const checkForNumberValuePassword = (str: string) => {
    return /\d/.test(str);
  };

  const checkForStringValuePassword = (str: string) => {
    return /[a-zа-яё]/i.test(str);
  };

  return (
    <div className={s.Step}>
      <div className={s.Step_Counter}>
        <span>Step&nbsp;1/3</span>
      </div>

      <div className={s.Step_Title}>
        <h1>Personal Data</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>Please, fill in all the steps and proceed to next step</p>
      </div>

      {/* форма н*/}
      <form className={s.Step_Form}>
        <div className={s.PersonalInfo}>
          <div className={s.PersonalInfo_Label}>
            <h2>Personal info</h2>
          </div>

          <ul className={s.PersonalInfo_Inputs}>
            <li>
              <BaseInput
                name="name_surname"
                placeholder="Name Surname"
                label="Name Surname"
                value={value.name_surname}
                onChange={(val: string) => setNewValue(val, 'name_surname')}
              />
            </li>

            <li>
              <BaseInput
                name="birh_date"
                placeholder="Birht date"
                label="Birht date"
                value={value.birh_date}
                onChange={(val: string) => setNewValue(val, 'birh_date')}
              />
            </li>

            <li>
              <BaseInput
                name="email"
                placeholder="Email"
                label="Email"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
              />
            </li>

            <li>
              <BaseInput
                name="phone"
                placeholder="Phone"
                label="Phone"
                value={value.phone}
                onChange={(val: string) => setNewValue(val, 'phone')}
              />
            </li>
          </ul>
        </div>

        <div className={s.Secure}>
          <div className={s.Secure_Label}>
            <h2>Secure</h2>
          </div>

          <ul className={s.Secure_Inputs}>
            <li className={s.Password}>
              <BaseInput
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                value={value.password}
                onChange={(val: string) => setNewValue(val, 'password')}
              />

              <ul
                className={`${s.PasswordCheck} ${
                  value.password ? s.PasswordCheck_Visible : ''
                }`}
              >
                <li
                  className={`${s.PasswordCheck_Item} ${
                    value.password.length >= 8 ? s.PasswordCheck_Item_Valid : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={s.Icon}
                  >
                    <path
                      d="M4.16667 11.6667L6.86091 13.6873C7.21815 13.9553 7.7231 13.894 8.00587 13.5484L15 5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={s.Label}>8+ characters</p>
                </li>

                <li
                  className={`${s.PasswordCheck_Item} ${
                    checkForStringValuePassword(value.password)
                      ? s.PasswordCheck_Item_Valid
                      : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={s.Icon}
                  >
                    <path
                      d="M4.16667 11.6667L6.86091 13.6873C7.21815 13.9553 7.7231 13.894 8.00587 13.5484L15 5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={s.Label}>Letters</p>
                </li>

                <li
                  className={`${s.PasswordCheck_Item} ${
                    checkForNumberValuePassword(value.password)
                      ? s.PasswordCheck_Item_Valid
                      : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={s.Icon}
                  >
                    <path
                      d="M4.16667 11.6667L6.86091 13.6873C7.21815 13.9553 7.7231 13.894 8.00587 13.5484L15 5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={s.Label}>Nubmers</p>
                </li>
              </ul>
            </li>

            <li className={s.ConfirmPassword}>
              <BaseInput
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                label="Confirm password"
                value={value.confirm_password}
                onChange={(val: string) => setNewValue(val, 'confirm_password')}
              />

              <ul
                className={`${s.PasswordCheck} ${
                  value.confirm_password ? s.PasswordCheck_Visible : ''
                }`}
              >
                <li
                  className={`${s.PasswordCheck_Item} ${
                    value.confirm_password &&
                    value.password === value.confirm_password
                      ? s.PasswordCheck_Item_Valid
                      : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={s.Icon}
                  >
                    <path
                      d="M4.16667 11.6667L6.86091 13.6873C7.21815 13.9553 7.7231 13.894 8.00587 13.5484L15 5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={s.Label}>Passwords must match</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </form>
      {/* форма к*/}

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

export default StepFirst;
