import { useRouter } from 'next/router';
import React from 'react';
import s from './AboutAndContacts.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { LinesWithGradient } from '@content/landing/index';

const AboutAndContacts: React.FC = () => {
  const router = useRouter();

  return (
    <div className={s.AboutAndContacts}>
      <LinesWithGradient />
      <section className={s.Header}>
        <BaseContainer>
          <BaseTitle type="h1" className={s.Header_Title}>
            We help to open merchant accounts for different kind of businesses
            worldwide
          </BaseTitle>

          <BaseText className={s.Header_Description}>
            Azure Processing is an independent sales organization founded in
            2017 and acting on behalf of acquiring banks and service providers.
            We also initiate the boarding procedure on our side and make
            preliminary KYC and due-diligence to evaluate merchant and offer him
            the most beneficial processing solution.
          </BaseText>

          <div className={s.Header_WhoAreWe}>
            <div className={`${s.WhoAreWeItem} ${s.WhoAreWeItem_1}`}>
              <div className={s.Text}>
                <p>
                  We are not a bank, nor a payment system. We are professional
                  merchant agents and sales affiliates
                </p>
              </div>

              <Image
                src="/pictures/images/about-and-contacts-who-are-we-image-1.png"
                width={200}
                height={200}
                quality={100}
                alt=""
                className={s.Image}
              />
              <div></div>
            </div>

            <div className={`${s.WhoAreWeItem} ${s.WhoAreWeItem_2}`}>
              <Image
                src="/pictures/images/about-and-contacts-who-are-we-image-2.png"
                width={200}
                height={200}
                quality={100}
                alt=""
                className={s.Image}
              />

              <div className={s.Text}>
                <p>
                  We also initiate the boarding procedure on our side and make
                  preliminary KYC and due-diligence to evaluate merchant and
                  offer him the most beneficial processing solution
                </p>
              </div>
            </div>
          </div>
        </BaseContainer>
      </section>
    </div>
  );
};

export default AboutAndContacts;
