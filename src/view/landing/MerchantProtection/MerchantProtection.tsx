import { BaseButton, BaseContainer, BaseText, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './MerchantProtection.module.scss';
import Image from 'next/image';
import { Gradient } from '@content/landing/index';
import Link from 'next/link';

const MerchantProtection: React.FC = () => {
  const router = useRouter();

  return (
    <div className={s.MerchantProtection}>
      <section className={s.Header}>
        <BaseContainer>
          <div className={s.Header_Container}>
            <div className={s.Header_Text}>
              <BaseTitle type="h2" className={s.Title}>
                We are helping merchants to protect themselves from illegal,
                unprofessional behavior of acquiring banks or payment service
                providers in different situations
              </BaseTitle>

              <BaseText className={s.Description}>
                In case your funds were frozen, merchant account blocked or you
                are receiving letters with fines and warnings without any reason
                – we can immediately help get things clear and resolve any
                situation no matter where you are.
              </BaseText>
            </div>

            <div className={s.Header_Pictures}>
              <Image
                src="/pictures/images/techny-fraud-detection-and-prevention-cybersecurity.png"
                width={643}
                height={643}
                priority
                quality={100}
                alt="Merchant protection image"
                className={s.Image}
              />

              <div className={`${s.Circle} ${s.Circle_Small}`}></div>
              <div className={`${s.Circle} ${s.Circle_Middle}`}></div>
              <div className={`${s.Circle} ${s.Circle_Large}`}></div>
            </div>
          </div>
        </BaseContainer>
        <Gradient className={s.Header_Gradient} />
      </section>

      <section className={s.DescriptionProblem}>
        <BaseContainer>
          <BaseTitle type="h2" className={s.DescriptionProblem_Title}>
            Please send us a brief description of your issue and we will contact
            you within 24 hours
          </BaseTitle>

          <div className={s.DescriptionProblem_Form}>
            <div className={s.Title}>
              <h3>Contact form</h3>
            </div>

            <div className={s.Subtitle}>
              <p>
                Please make sure youI have read&nbsp;
                <Link href="/terms-and-agreements">Terms & Agreements</Link>
                &nbsp;and agree with them before submitting
              </p>
            </div>

            <ul className={s.Inputs}>
              <li></li>
              <li></li>
            </ul>

            <BaseButton className={s.Button} onClick={() => router.push('/')}>
              Send request
            </BaseButton>
          </div>
        </BaseContainer>
      </section>
    </div>
  );
};

export default MerchantProtection;
