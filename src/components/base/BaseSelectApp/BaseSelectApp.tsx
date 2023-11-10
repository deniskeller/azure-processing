import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { BaseIcon } from '..';
import s from './BaseSelectApp.module.scss';

interface Props {
  placeholder?: string;
  withLabel?: boolean;
  type?: string;
  className?: string;
  error?: string | boolean;
  disabled?: boolean;
  options: ISelectItem[];
  value: ISelectItem[];
  onChange: (value: ISelectItem | ISelectItem[]) => void;
  onClear?: (e: { stopPropagation: () => void }) => void;
  onBlur: () => void;
  name?: string;
  ref?: MutableRefObject<null>;
  multiple?: boolean;
  withCounter?: boolean;
}

export interface ISelectItem {
  value: string;
  label: string;
}

const BaseSelectApp: React.FC<Props> = ({
  placeholder,
  withLabel = false,
  className,
  type = 'default',
  options,
  error,
  disabled = false,
  onChange,
  onClear,
  onBlur,
  value,
  multiple,
  withCounter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = value;
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen) {
      onBlur();
    }
  }, [isOpen, onBlur]);

  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => {
    setIsOpen(false);
    onBlur();
  };
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: ISelectItem) => () => {
    if (multiple) {
      const isSelected = selectedOption.find((el) => el.value === option.value);
      if (isSelected) {
        const newSelected = selectedOption.filter(
          (el) => el.value !== option.value
        );
        onChange(newSelected);
      } else {
        onChange([...selectedOption, option]);
      }
    } else {
      onChange([option]);
    }
    multiple ? setIsOpen(true) : setIsOpen(false);
  };

  // useEffect(() => {
  // 	console.log('value: ', value);
  // }, [value]);

  return (
    <div
      className={`${s.SelectContainer} ${className}`}
      ref={selectContainerRef}
    >
      <div
        className={`${s.SelectHeader}  ${isOpen ? s.SelectHeader_Focus : ''}  ${
          selectedOption?.length && selectedOption[0].label !== placeholder
            ? s.NotEmpty
            : ''
        } ${error ? s.SelectHeader_Error : ''} ${
          !withLabel ? s.SelectHeader_DefaultPadding : ''
        } ${disabled ? s.Disabled : ''}`}
        onClick={toggling}
      >
        <p className={`${selectedOption?.length ? s.NotEmpty : ''}`}>
          {!multiple ? selectedOption[0]?.label : placeholder}
        </p>

        {multiple && withCounter && selectedOption.length > 0 && (
          <span className={s.SelectedCounter}>
            &nbsp;({selectedOption.length})
          </span>
        )}

        <label
          className={`${s.Label} ${
            selectedOption?.length && withLabel ? s.Label_Focus : ''
          }`}
          style={{
            display: placeholder && !selectedOption?.length ? 'block' : 'none',
          }}
        >
          {placeholder}
        </label>

        {withCounter && value.length >= 1 ? (
          <div onClick={onClear} className={s.ClearValue}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3.66797 10.3327L10.3346 3.66602M3.66797 3.66602L10.3346 10.3327"
                stroke="#6E7079"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : null}

        <BaseIcon
          icon={ALL_ICONS.SELECT_CHEVRON_DASHBOARD}
          viewBox="0 0 11 6"
          className={`${s.SelectHeader_Chevron} ${
            isOpen ? s.SelectHeader_Chevron_Active : ''
          }`}
        />
      </div>

      <ul
        className={s.SelectList}
        ref={listRef}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        {options.map((option: ISelectItem) => {
          const selected =
            selectedOption &&
            selectedOption.find((el) => el.value === option.value);
          return (
            <li
              className={`${s.ListItem} ${selected ? s.ListItem_Active : ''}`}
              onClick={onOptionClicked(option)}
              key={option.value}
            >
              <span className={s.ListItemTitle}>{option.label}</span>

              {selected && (
                <BaseIcon
                  icon={ALL_ICONS.SELECT_CHECK}
                  viewBox="0 0 26 19"
                  className={s.ListItem_IconCheck}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BaseSelectApp;
