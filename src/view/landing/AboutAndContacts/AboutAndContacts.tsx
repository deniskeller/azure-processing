import { useRouter } from 'next/router';
import React from 'react';
import s from './AboutAndContacts.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { LinesWithGradient } from '@content/landing/index';
import { ALL_ICONS } from '@constants/icons';

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

      <section className={s.WhyAreWeHere}>
        <BaseContainer>
          <BaseTitle type="h1" className={s.WhyAreWeHere_Title}>
            Why are we here?
          </BaseTitle>

          <BaseText className={s.WhyAreWeHere_Description}>
            Because we help you find safe and secure payment service providers
            for your business avoiding fraudsters and Ponzi schemes.
          </BaseText>

          <div className={s.WhyAreWeHere_System}>
            <div className={s.Merchant}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="70"
                viewBox="0 0 71 70"
                fill="none"
                className={s.Merchant_Icon}
              >
                <ellipse
                  cx="35.5"
                  cy="17.5"
                  rx="11.6667"
                  ry="11.6667"
                  stroke="#425EEC"
                  strokeWidth="2.5"
                />
                <ellipse
                  cx="35.5"
                  cy="49.5833"
                  rx="20.4167"
                  ry="11.6667"
                  stroke="#425EEC"
                  strokeWidth="2.5"
                />
              </svg>

              <div className={s.Merchant_Label}>Merchant</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 16"
                fill="none"
                className={s.Merchant_Row}
              >
                <path
                  d="M150.707 8.70712C151.098 8.3166 151.098 7.68343 150.707 7.29291L144.343 0.928945C143.953 0.53842 143.319 0.53842 142.929 0.928945C142.538 1.31947 142.538 1.95263 142.929 2.34316L148.586 8.00001L142.929 13.6569C142.538 14.0474 142.538 14.6806 142.929 15.0711C143.319 15.4616 143.953 15.4616 144.343 15.0711L150.707 8.70712ZM-8.74228e-08 9L150 9.00001L150 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="#425EEC"
                />
              </svg>
            </div>

            <div className={s.We}>
              <BaseIcon
                viewBox="0 0 96 96"
                icon={ALL_ICONS.AZURE}
                className={s.We_Icon}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 16"
                fill="none"
                className={s.We_Row}
              >
                <path
                  d="M0.292892 7.29289C-0.0976257 7.68342 -0.0976257 8.31658 0.292892 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07108 15.0711C8.46159 14.6805 8.46159 14.0474 8.07108 13.6569L2.41422 8L8.07108 2.34315C8.46159 1.95262 8.46159 1.31946 8.07108 0.928932C7.68054 0.538408 7.04738 0.538408 6.65686 0.928932L0.292892 7.29289ZM151 7L1 7V9L151 9V7Z"
                  fill="#425EEC"
                />
              </svg>
            </div>

            <div className={s.ServiceProviders}>
              <svg
                viewBox="0 0 24 459"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.ServiceProviders_Border}
              >
                <rect
                  x="1"
                  y="1"
                  width="106"
                  height="457"
                  rx="19"
                  stroke="#425EEC"
                  strokeWidth="2"
                />
              </svg>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/terminal.png"
                  width={36}
                  height={50}
                  alt=""
                  className={`${s.Image} ${s.Image_Terminal}`}
                />
                <div className={s.Label}>Acquiring Bank</div>
              </div>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/cash.png"
                  width={55}
                  height={55}
                  alt=""
                  className={`${s.Image} ${s.Image_Cash}`}
                />
                <div className={s.Label}>Payment System</div>
              </div>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/cash.png"
                  width={36}
                  height={50}
                  alt=""
                  className={`${s.Image} ${s.Image_Cash}`}
                />
                <div className={s.Label}>Payment System</div>
              </div>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/terminal.png"
                  width={55}
                  height={55}
                  alt=""
                  className={`${s.Image} ${s.Image_Terminal}`}
                />
                <div className={s.Label}>Acquiring Bank</div>
              </div>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/terminal.png"
                  width={36}
                  height={50}
                  alt=""
                  className={`${s.Image} ${s.Image_Terminal}`}
                />
                <div className={s.Label}>Acquiring Bank</div>
              </div>

              <div className={s.ServiceProviders_Item}>
                <Image
                  src="/pictures/images/cash.png"
                  width={55}
                  height={55}
                  alt=""
                  className={`${s.Image} ${s.Image_Cash}`}
                />
                <div className={s.Label}>Payment System</div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </section>
    </div>
  );
};

export default AboutAndContacts;
