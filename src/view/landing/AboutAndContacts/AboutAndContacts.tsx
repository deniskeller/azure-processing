import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import s from './AboutAndContacts.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { LinesWithGradient, MapContacts } from '@content/landing/index';
import { ALL_ICONS } from '@constants/icons';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const AboutAndContacts: React.FC = () => {
  const router = useRouter();

  //КООРДИНАТЫ МАРКЕРА КАРТЫ
  const london = {
    lat: 51.512619649633486,
    lng: -0.07756605745821402,
  };

  //АНИМАЦИИ
  const refTitle = useRef(null);
  const refSubtitle = useRef(null);
  const refCard_1 = useRef(null);
  const refCard_2 = useRef(null);
  const refTitle2 = useRef(null);
  const refSubtitle2 = useRef(null);
  const refMap = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: refTitle.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(refTitle.current, { y: '100%' }, { y: '0%' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refSubtitle.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(refSubtitle.current, { y: '100%' }, { y: '0%', delay: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refCard_1.current,
          toggleActions: 'play none none none',
          start: 'top 100%',
        },
      })
      .fromTo(refCard_1.current, { y: '100%' }, { y: '0%', opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refCard_2.current,
          toggleActions: 'play none none none',
          start: 'top 100%',
        },
      })
      .fromTo(refCard_2.current, { y: '100%' }, { y: '0%', opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refTitle2.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(refTitle2.current, { y: '100%' }, { y: '0%' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refSubtitle2.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(refSubtitle2.current, { y: '100%' }, { y: '0%', delay: 0.5 });

    gsap.to(refMap.current, {
      scrollTrigger: {
        trigger: refMap.current,
        toggleActions: 'play none none none',
        start: 'top 80%',
      },
      scale: 1,
      duration: 0.6,
    });
  }, []);

  return (
    <div className={s.AboutAndContacts}>
      <LinesWithGradient />
      <section className={s.Header}>
        <BaseContainer className={s.Header_Container}>
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${s.Icon} ${s.Icon_Wallet}`}
          >
            <circle
              cx="39.5714"
              cy="39.5714"
              r="28.5714"
              fill="#DCE1FC"
              id="theMotionPath"
            />
            <path
              d="M36 68.3139C51.6374 70.4276 66.0274 59.4645 68.1411 43.8271"
              stroke="#7E93FA"
              strokeWidth="2.28571"
              strokeLinecap="round"
            ></path>
            <path
              d="M30 36.6667H36.6667"
              stroke="#425EEC"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M54.7222 38.3333H50.3846C47.4108 38.3333 45 40.5718 45 43.3333C45 46.0947 47.4108 48.3333 50.3846 48.3333H54.7222C54.8611 48.3333 54.9306 48.3333 54.9892 48.3297C55.888 48.275 56.6039 47.6102 56.6628 46.7756C56.6667 46.7211 56.6667 46.6567 56.6667 46.5277V40.1388C56.6667 40.0098 56.6667 39.9454 56.6628 39.8909C56.6039 39.0563 55.888 38.3915 54.9892 38.3368C54.9306 38.3333 54.8611 38.3333 54.7222 38.3333Z"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
            <path
              d="M54.9417 38.3333C54.8121 35.2128 54.3943 33.2996 53.0474 31.9526C51.0947 30 47.952 30 41.6666 30H36.6666C30.3813 30 27.2386 30 25.2859 31.9526C23.3333 33.9052 23.3333 37.0479 23.3333 43.3333C23.3333 49.6187 23.3333 52.7614 25.2859 54.714C27.2386 56.6667 30.3813 56.6667 36.6666 56.6667H41.6666C47.952 56.6667 51.0947 56.6667 53.0474 54.714C54.3943 53.3671 54.8121 51.4538 54.9417 48.3333"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
            <path
              d="M30 30L36.2258 25.8719C37.9791 24.7094 40.3543 24.7094 42.1075 25.8719L48.3333 30"
              stroke="#425EEC"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M49.9854 43.3333H50.0004"
              stroke="#425EEC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${s.Icon} ${s.Icon_Planet}`}
          >
            <circle cx="39.5715" cy="39.5712" r="28.5714" fill="#DCE1FC" />
            <path
              d="M40 11.4286C24.2205 11.4286 11.4286 24.2204 11.4286 40"
              stroke="#7E93FA"
              strokeWidth="2.28571"
              strokeLinecap="round"
            />
            <circle
              cx="40"
              cy="39.9999"
              r="16.6667"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
            <path
              d="M30 27.851C31.3004 29.0352 33.9792 32.272 34.2913 35.7457C34.5831 38.9926 36.7262 41.631 40 41.6667C41.2581 41.6805 42.5306 40.7716 42.5273 39.5134C42.5263 39.1243 42.4621 38.7265 42.3616 38.3605C42.2218 37.8515 42.2094 37.2658 42.5 36.6667C43.5165 34.571 45.5156 34.008 47.0998 32.8698C47.8023 32.3651 48.4432 31.8325 48.7259 31.4036C49.5061 30.2194 50.2864 27.851 49.8962 26.6667"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
            <path
              d="M56.6667 41.6667C56.1177 43.2185 55.7292 47.2917 49.5304 47.3564C49.5304 47.3564 44.041 47.3564 42.3941 50.4599C41.0767 52.9426 41.8452 55.6323 42.3941 56.6667"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
          </svg>
          <svg
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${s.Icon} ${s.Icon_Cash}`}
          >
            <circle cx="35" cy="35" r="25" fill="#DCE1FC" />
            <path
              d="M60 35C60 21.1929 48.8071 10 35 10"
              stroke="#7E93FA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="35" cy="35" r="12.5" stroke="#425EEC" strokeWidth="2" />
            <path
              d="M35 41.25V41.875V42.5"
              stroke="#425EEC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M35 27.5V28.125V28.75"
              stroke="#425EEC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M38.75 31.875C38.75 30.1491 37.0711 28.75 35 28.75C32.9289 28.75 31.25 30.1491 31.25 31.875C31.25 33.6009 32.9289 35 35 35C37.0711 35 38.75 36.3991 38.75 38.125C38.75 39.8509 37.0711 41.25 35 41.25C32.9289 41.25 31.25 39.8509 31.25 38.125"
              stroke="#425EEC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${s.Icon} ${s.Icon_Piece}`}
          >
            <circle cx="39.5714" cy="39.5712" r="28.5714" fill="#DCE1FC" />
            <path
              d="M12.1815 36.7694C10.2969 52.436 21.4695 66.6641 37.1362 68.5486"
              stroke="#7E93FA"
              strokeWidth="2.28571"
              strokeLinecap="round"
            />
            <path
              d="M53.3333 45.9208C51.3771 52.149 45.5585 56.6667 38.6847 56.6667C30.2064 56.6667 23.3333 49.7937 23.3333 41.3154C23.3333 34.4415 27.8511 28.6229 34.0793 26.6667"
              stroke="#425EEC"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M56.5218 36.5787C54.7526 30.2405 49.7594 25.2473 43.4212 23.4781C40.6819 22.7134 38.3333 25.0902 38.3333 27.9343V39.0918C38.3333 40.5138 39.4861 41.6666 40.9081 41.6666H52.0656C54.9097 41.6666 57.2865 39.318 56.5218 36.5787Z"
              stroke="#425EEC"
              strokeWidth="2.3"
            />
          </svg>
          <BaseTitle type="h1" className={s.Header_Title} ref={refTitle}>
            We help to open merchant accounts for different kind of businesses
            worldwide
          </BaseTitle>

          <BaseText className={s.Header_Description} ref={refSubtitle}>
            Azure Processing is an independent sales organization founded in
            2017 and acting on behalf of acquiring banks and service providers.
            We also initiate the boarding procedure on our side and make
            preliminary KYC and due-diligence to evaluate merchant and offer him
            the most beneficial processing solution.
          </BaseText>

          <div className={s.Header_WhoAreWe}>
            <div
              className={`${s.WhoAreWeItem} ${s.WhoAreWeItem_1}`}
              ref={refCard_1}
            >
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

            <div
              className={`${s.WhoAreWeItem} ${s.WhoAreWeItem_2}`}
              ref={refCard_2}
            >
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
          <BaseTitle type="h2" className={s.WhyAreWeHere_Title} ref={refTitle2}>
            Why are we here?
          </BaseTitle>

          <BaseText className={s.WhyAreWeHere_Description} ref={refSubtitle2}>
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

      <BaseContainer>
        <section className={s.Contacts}>
          <div className={s.Contacts_Info}>
            <BaseTitle type="h2" className={s.Title}>
              Company
            </BaseTitle>

            <ul className={s.Content}>
              <li className={s.Item}>
                <div className={s.Label}>
                  <p>AZURE PAYMENTS LIMITED</p>
                </div>
                <p className={s.Value}>
                  (LTD - Limited Responsibility Company)
                </p>
              </li>

              <li className={s.Item}>
                <div className={s.Label}>
                  <p>Reg.nr.</p>
                </div>
                <p className={s.Value}>12108869</p>
              </li>

              <li className={s.Item}>
                <div className={s.Label}>
                  <p>Legal address:</p>
                </div>
                <p className={s.Value}>
                  1123 King Street, Hammersmith, London, United Kingdom, W9 9JG
                </p>
              </li>

              <li className={s.Item}>
                <div className={s.Label}>
                  <p>Email:</p>
                </div>
                <p className={s.Value}>info@azureprocessing.solutions</p>
              </li>

              <li className={s.Item}>
                <div className={s.Label}>
                  <p>Working Hours</p>
                </div>
                <p className={s.Value}>
                  Monday to Friday starting from 9:00 AM till 18:00 PM. Saturday
                  to Sunday office is closed.
                </p>
              </li>
            </ul>
          </div>

          <div className={s.Contacts_Map} ref={refMap}>
            <MapContacts
              center={london}
              marker_title="1123 King Street, Hammersmith, London, United Kingdom, W9 9JG"
            />
          </div>
        </section>
      </BaseContainer>
    </div>
  );
};

export default AboutAndContacts;
