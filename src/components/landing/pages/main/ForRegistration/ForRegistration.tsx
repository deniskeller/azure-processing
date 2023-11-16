import { BaseButton, BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import s from './ForRegistration.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ForRegistration: React.FC = () => {
  const router = useRouter();
  return (
    <section className={s.ForRegistration}>
      <BaseContainer>
        <BaseTitle type="h2" className={s.ForRegistration_Title}>
          Fast onboarding. Get stated just within a few minutes
        </BaseTitle>
        <BaseText className={s.ForRegistration_Subtitle}>
          Once we get your application, our manager will continue you in 3 to 24
          hours. After confirmation you will be able to work in our platform.
        </BaseText>

        <div className={s.ForRegistration_Form}>
          <Image
            src="/pictures/images/quick-form-image.png"
            width={368}
            height={368}
            alt=""
            className={s.Image}
          />

          <div className={s.Title}>
            <h3>Quick start</h3>
          </div>

          <div className={s.Subtitle}>
            <p>Submit your onboarding request. In 3 minutes.</p>
          </div>

          <BaseButton
            onClick={() => router.push('/login')}
            className={s.Button}
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 25"
              fill="none"
              className={s.Button_Icon}
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
      </BaseContainer>
    </section>
  );
};

export default ForRegistration;
