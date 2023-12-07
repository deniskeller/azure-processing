import { BaseButton, BaseInput } from '@base/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import s from './StepFirst.module.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { InputPhone } from '@content/landing/index';
import toast from 'react-hot-toast';

interface Props {
  onClick: () => void;
}

interface IFormData {
  nameSurname: string;
  birthDate: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const StepFirst: React.FC<Props> = ({ onClick }) => {
  const router = useRouter();

  const [value, setValue] = React.useState<IFormData>({
    nameSurname: '',
    birthDate: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
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

  // календарь
  const [focus, setFocus] = useState(false);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setNewValue(dateString, 'birthDate');
  };

  //ОТПРАВКА ФОРМЫ
  const [textErrors, setTextErrors] = useState<string[]>([]);
  const nameSurnameError = 'The "Name and Surname" field must not be empty';
  const [hasNameSurnameError, setHasNameSurnameError] = useState(false);

  const birthDateError = 'Invalid date of birth.';
  const [hasBirthDateError, setHasBirthDateError] = useState(false);

  const emailError = 'Invalid email.';
  const [hasEmailError, setHasEmailError] = useState(false);

  const [hasPhoneNumberError, setHasPhoneNumberError] = useState(false);
  const phoneNumberError = 'The phone number must be valid.';

  const [hasPasswordError, setHasPasswordError] = useState(false);
  const passwordError = 'The password is too simple.';

  useEffect(() => {
    if (textErrors.includes(nameSurnameError)) {
      setHasNameSurnameError(true);
    } else {
      setHasNameSurnameError(false);
    }

    if (textErrors.includes(birthDateError)) {
      setHasBirthDateError(true);
    } else {
      setHasBirthDateError(false);
    }

    if (textErrors.includes(emailError)) {
      setHasEmailError(true);
    } else {
      setHasEmailError(false);
    }

    if (textErrors.includes(phoneNumberError)) {
      setHasPhoneNumberError(true);
    } else {
      setHasPhoneNumberError(false);
    }

    if (textErrors.includes(passwordError)) {
      setHasPasswordError(true);
    } else {
      setHasPasswordError(false);
    }
  }, [textErrors]);

  async function submitHandler(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      const result = await response.json();
      setTextErrors(result.message);
      console.log('result: ', result);
      console.log('Успех:', JSON.stringify(result));

      // if (result.success) {
      //   toast.success('Application successfully submitted', {
      //     duration: 3000,
      //   });
      //   setValue({
      //     nameSurname: '',
      //     companyName: '',
      //     email: '',
      //     phoneNumber: '',
      //     problemDescription: '',
      //   });
      // }
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }

  useEffect(() => {
    // console.log('value: ', value);
    console.log('textErrors: ', textErrors);
  }, [textErrors]);

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
                name="nameSurname"
                placeholder="Name Surname"
                label="Name Surname"
                value={value.nameSurname}
                onChange={(val: string) => setNewValue(val, 'nameSurname')}
                error={hasNameSurnameError}
              />
            </li>

            <li>
              <DatePicker
                className={`${s.DataPicker} ${
                  focus || value.birthDate !== '' ? s.DataPicker_Focus : ''
                } ${!focus ? s.DataPicker_Blur : ''} ${
                  hasBirthDateError ? s.DataPicker_Error : ''
                }`}
                format="YYYY-MM-DD"
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
                type="mail"
                name="email"
                placeholder="Email"
                label="Email"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={hasEmailError}
              />
            </li>

            <li>
              <InputPhone
                country="us"
                value={value.phone}
                onChange={(val: string) => setNewValue(val, 'phone')}
                error={hasPhoneNumberError}
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
                error={hasPasswordError}
              />

              <ul
                className={`${s.PasswordCheck} ${
                  value.password || hasPasswordError
                    ? s.PasswordCheck_Visible
                    : ''
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
                name="confirmPassword"
                placeholder="Confirm password"
                label="Confirm password"
                value={value.confirmPassword}
                onChange={(val: string) => setNewValue(val, 'confirmPassword')}
                error={
                  hasPasswordError || value.confirmPassword != value.password
                }
              />

              <ul
                className={`${s.PasswordCheck} ${
                  value.confirmPassword ||
                  hasPasswordError ||
                  value.confirmPassword != value.password
                    ? s.PasswordCheck_Visible
                    : ''
                }`}
              >
                <li
                  className={`${s.PasswordCheck_Item} ${
                    value.confirmPassword &&
                    value.password === value.confirmPassword
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
        <BaseButton onClick={submitHandler} className={s.NextStep}>
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
