import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import s from './InputPhone.module.scss';

interface Props {
  placeholder?: string;
  className?: string;
  error?: string | boolean;
  value: string;
  disabled?: boolean;
  onChange(value: string | number): void;
}

const InputPhone: React.FC<Props> = ({
  value,
  error,
  placeholder,
  className = '',
  onChange,
  disabled = false,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`${s.BaseInput} ${className} ${
        disabled ? s.BaseInput_Disabled : ''
      }`}
    >
      <PhoneInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        country={'ru'}
        value={value}
        onChange={onChange}
        enableSearch
        searchPlaceholder="Search"
        searchNotFound="Nothing found"
        inputClass={error ? 'phone-input-error' : ''}
        disabled={disabled}
        inputStyle={{ borderColor: focus ? '#425eec' : '#e8e8ea' }}
      />
    </div>
  );
};
export default InputPhone;
