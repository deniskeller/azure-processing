import { BaseButton, BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import s from './Header.module.scss';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <section className={s.Header}>
      <BaseContainer>
        <BaseTitle type="h1" className={s.Header_Title}>
          Your time and security are our biggest values
        </BaseTitle>

        <BaseText className={s.Header_Subtitle}>
          Azure Processing is professional Agent with many years of experience
          made to solicit merchants for an acquiring banks or payment service
          providers under their name.
        </BaseText>

        <div className={s.Header_Buttons}>
          <BaseButton
            onClick={() => router.push('/service-providers')}
            className={s.Login}
          >
            Explore Service Providers
          </BaseButton>

          <BaseButton
            type="secondary"
            onClick={() => router.push('/merchant-protection')}
            className={s.SignUp}
          >
            Review Merchant Protection
          </BaseButton>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Header;
