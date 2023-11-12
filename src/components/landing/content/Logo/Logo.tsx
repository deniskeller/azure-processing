import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <Link href="/" className={`${s.Logo} ${className}`}>
      <BaseIcon viewBox="0 0 177 48" icon={ALL_ICONS.LOGO} />
    </Link>
  );
};

export default Logo;
