import React, { ReactNode } from 'react';
import s from './PartnerCard.module.scss';
import Link from 'next/link';

interface Props {
  href: string;
  name: string;
  card_type: string;
  country: string;
  children?: ReactNode | ReactNode[];
}

const PartnerCard: React.FC<Props> = ({
  href = '/',
  name,
  card_type,
  country,
  children,
}) => {
  return (
    <Link href={href} className={s.PartnerCard}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        fill="none"
        className={s.PartnerCard_Icon}
      >
        <path
          d="M10 30L30 10M30 10H15M30 10V25"
          stroke="#1A1A1A"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={s.PartnerCard_Logo}>{children}</div>

      <div className={s.PartnerCard_Name}>
        <p>{name}</p>
      </div>

      <div className={s.PartnerCard_CardType}>
        <p>
          {card_type}&nbsp;/&nbsp;{country}
        </p>
      </div>
    </Link>
  );
};

export default PartnerCard;
