import React from 'react';
import s from './Footer.module.scss';
import { Logo } from '../content';
import { BaseContainer } from '@base/index';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {}

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className={s.Footer}>
      <BaseContainer className={s.Footer_Container}>
        <div className={s.Footer_Logo}>
          <Logo />
        </div>

        <div className={s.Footer_Navbar}>
          <ul className={s.Column}>
            <li>
              <Link href={'/about-and-contacts'} className={s.Link}>
                About & Contacts
              </Link>
            </li>
            <li>
              <Link href={'/service-providers'} className={s.Link}>
                Service Providers
              </Link>
            </li>
            <li>
              <Link href={'/merchant-protection'} className={s.Link}>
                Merchant Protection
              </Link>
            </li>
          </ul>

          <ul className={s.Column}>
            <li>
              <Link href={'/terms-and-agreements'} className={s.Link}>
                Terms & Agreements
              </Link>
            </li>
            <li>
              <Link href={'/privacy-policy'} className={s.Link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.Footer_Info}>
          <div className={s.Contacts}>
            <p>123 King Street, Hammersmith, London, W9 9JG</p>
          </div>
          <div className={s.Copyright}>
            <p>© 2023 AZURE PAYMENTS LIMITED. All rights reserved.</p>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Footer;
