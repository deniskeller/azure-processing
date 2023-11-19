import { BaseButton, BaseInput } from '@base/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import s from './StepFirst.module.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { InputPhone } from '@content/landing/index';

interface Props {
  onClick: () => void;
}

interface IFormData {
  name_surname: string;
  birh_date: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

const StepFirst: React.FC<Props> = ({ onClick }) => {
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

  //проверка строки на цифры
  const checkForNumberValuePassword = (str: string) => {
    return /\d/.test(str);
  };
  //проверка строки на буквы
  const checkForStringValuePassword = (str: string) => {
    return /[a-zа-яё]/i.test(str);
  };

  // валидация
  // const [error, setError] = useState({
  //   name_surname: false,
  //   birh_date: false,
  //   email: false,
  //   phone: false,
  //   password: false,
  //   confirm_password: false,
  // });
  const [error, setError] = useState(false);
  const submitFirstStepHandler = () => {
    if (
      value.name_surname == ''
      // value.birh_date &&
      // value.email &&
      // value.phone &&
      // value.password &&
      // value.confirm_password &&
      // value.password === value.confirm_password &&
      // /\d/.test(value.password) &&
      // /[a-zа-яё]/i.test(value.password) &&
      // value.password.length >= 8
    ) {
      setError(true);
    } else {
      setError(false);
      onClick();
    }
  };

  // календарь
  const [focus, setFocus] = useState(false);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    setNewValue(dateString, 'birh_date');
  };

  useEffect(() => {
    console.log('value: ', value);
  }, [value]);

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
                error={error}
              />
            </li>

            <li>
              <DatePicker
                className={`${s.DataPicker} ${
                  focus || value.birh_date !== '' ? s.DataPicker_Focus : ''
                } ${!focus ? s.DataPicker_Blur : ''}`}
                format="DD.MM.YYYY"
                placeholder="Birht date"
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                suffixIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={s.DataPicker_Icon}
                  >
                    <path
                      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                      stroke="#767676"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 4V2.5"
                      stroke="#767676"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 4V2.5"
                      stroke="#767676"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.5 9H21.5"
                      stroke="#767676"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                }
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
              <InputPhone
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
        <BaseButton onClick={submitFirstStepHandler} className={s.NextStep}>
          Next step
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={s.NextStep_Icon}
            // className={`${s.NextStep_Icon} ${
            //   disabled ? s.NextStep_Icon_Disabled : null
            // }`}
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
