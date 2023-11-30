import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { BaseIcon } from '..';
import s from './BaseInput.module.scss';

interface Props {
  type?: string;
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  error,
  name,
  min,
  max,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  //ДЛЯ ПАРОЛЯ НААЛО
  const [typeIcon, setTypeIcon] = React.useState<string>('eye-off');
  const [newType, setType] = React.useState<string>(type);

  const changeType = (value: string) => {
    if (value == 'eye') {
      setTypeIcon('eye');
      setType('text');
    } else {
      setTypeIcon('eye-off');
      setType('password');
    }
  };
  //ДЛЯ ПАРОЛЯ КОНЕЦ

  return (
    <div className={`${s.BaseInput} ${className}`}>
      <input
        value={value}
        type={newType || type}
        className={`${s.Input} ${error ? s.Input_Error : ''} ${
          type == 'password' ? s.Input_Password : ''
        }`}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          <span>{label}</span>
        </label>
      ) : null}

      {typeIcon === 'eye' ? (
        <BaseIcon
          viewBox="0 0 24 24"
          icon={ALL_ICONS.EYE_OFF}
          className={s.Icon}
          onClick={() => changeType('eye-off')}
        />
      ) : null}

      {type === 'password' && typeIcon === 'eye-off' ? (
        <BaseIcon
          viewBox="0 0 24 24"
          icon={ALL_ICONS.EYE}
          className={s.Icon}
          onClick={() => changeType('eye')}
        />
      ) : null}
    </div>
  );
};
export default BaseInput;
