import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import s from './BaseTextarea.module.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseTextarea: React.FC<Props> = ({
  value,
  label,
  error,
  name,
  maxLength,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  onChange,
  onKeyDown,
}) => {
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);
  const [focus, setFocus] = useState(false);

  const onBlur = () => {
    if (refTextarea.current != null) {
      const scrollHeight = refTextarea.current.scrollHeight;
      refTextarea.current.style.height = scrollHeight + 'px';
    }
    setFocus(false);
  };

  useEffect(() => {
    if (refTextarea.current != null) {
      refTextarea.current.style.height = 'inherit';
      refTextarea.current.style.height =
        refTextarea.current.scrollHeight + 'px';
    }

    setTimeout(() => {
      if (refTextarea.current != null && value.length > 1) {
        refTextarea.current.style.height = 'initial';
        refTextarea.current.style.height =
          refTextarea.current.scrollHeight + 'px';
      }
    }, 10);
  }, [value]);

  return (
    <div
      className={`${s.BaseTextarea} ${className} ${
        disabled ? s.BaseTextarea_Disabled : null
      } ${error ? s.BaseTextarea_Error : ''} ${
        focus ? s.BaseTextarea_Focus : ''
      }`}
      onClick={() => refTextarea.current?.focus()}
    >
      <textarea
        ref={refTextarea}
        value={value}
        className={s.Textarea}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          <span>{label}</span>
        </label>
      ) : null}
    </div>
  );
};
export default BaseTextarea;
