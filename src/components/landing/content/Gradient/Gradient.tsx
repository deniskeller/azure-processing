import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Gradient.module.scss';

interface Props {
  className?: string;
}

const Gradient: React.FC<Props> = ({ className = '' }) => {
  return <div className={`${s.Gradient} ${className}`}></div>;
};

export default Gradient;
