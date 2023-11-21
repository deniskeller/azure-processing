import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseText,
  BaseTitle,
} from '@base/index';
import React, { useEffect, useRef } from 'react';
import s from './Header.module.scss';
import { useRouter } from 'next/router';
import { ALL_ICONS } from '@constants/icons';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const router = useRouter();

  const sectionScrollRef = useRef(null);
  const refTitle = useRef(null);
  const refSubtitle = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionScrollRef.current,
        toggleActions: 'play none none none',
        start: 'top 50%',
      },
    });

    tl.fromTo(
      refTitle.current,
      {
        y: '100%',
      },
      {
        y: '0%',
      }
    ).fromTo(
      refSubtitle.current,
      {
        y: '100%',
      },
      {
        y: '0%',
      }
    );
  }, []);

  return (
    <section className={s.Header}>
      <div className={s.Header_Decor}>
        <div className={`${s.Circle} ${s.Circle_Large}`}></div>
        <div className={`${s.Circle} ${s.Circle_Middle}`}></div>
        <div className={`${s.Circle} ${s.Circle_Small}`}></div>

        <BaseIcon
          viewBox="0 0 96 96"
          icon={ALL_ICONS.AZURE}
          className={s.Logo}
        />

        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${s.Icon} ${s.Icon_Reset}`}
        >
          <circle cx="40" cy="40.0001" r="28.5714" fill="#DCE1FC" />
          <path
            d="M40 11.4286C24.2205 11.4286 11.4286 24.2204 11.4286 40"
            stroke="#7E93FA"
            strokeWidth="2.28571"
            strokeLinecap="round"
          />
          <path
            d="M26.7045 39.4602L25.5616 39.4602L25.5616 39.4602L26.7045 39.4602ZM26.7045 42.238L25.8995 43.0492C26.3451 43.4913 27.0638 43.4913 27.5094 43.0492L26.7045 42.238ZM30.3091 40.2715C30.7572 39.8269 30.76 39.1033 30.3154 38.6552C29.8709 38.2072 29.1473 38.2043 28.6992 38.6489L30.3091 40.2715ZM24.7097 38.6489C24.2617 38.2043 23.5381 38.2072 23.0935 38.6552C22.6489 39.1033 22.6518 39.8269 23.0998 40.2715L24.7097 38.6489ZM51.6887 32.8365C52.0192 33.3742 52.7231 33.5421 53.2608 33.2115C53.7985 32.881 53.9664 32.1771 53.6358 31.6394L51.6887 32.8365ZM40.7029 24.4284C32.3491 24.4284 25.5616 31.1499 25.5616 39.4602H27.8473C27.8473 32.4292 33.5945 26.7141 40.7029 26.7141V24.4284ZM25.5616 39.4602L25.5616 42.238L27.8473 42.238L27.8473 39.4602L25.5616 39.4602ZM27.5094 43.0492L30.3091 40.2715L28.6992 38.6489L25.8995 41.4267L27.5094 43.0492ZM27.5094 41.4267L24.7097 38.6489L23.0998 40.2715L25.8995 43.0492L27.5094 41.4267ZM53.6358 31.6394C50.9774 27.3151 46.1784 24.4284 40.7029 24.4284V26.7141C45.3573 26.7141 49.4317 29.1653 51.6887 32.8365L53.6358 31.6394Z"
            fill="#425EEC"
          />
          <path
            d="M54.4279 38.9053L55.2313 38.0924C54.786 37.6524 54.0697 37.6524 53.6245 38.0924L54.4279 38.9053ZM50.8141 40.8702C50.3652 41.3139 50.361 42.0375 50.8047 42.4864C51.2484 42.9354 51.972 42.9396 52.4209 42.4959L50.8141 40.8702ZM56.4349 42.4959C56.8838 42.9396 57.6074 42.9354 58.0511 42.4864C58.4948 42.0375 58.4906 41.3139 58.0416 40.8702L56.4349 42.4959ZM29.3434 48.3051C29.0119 47.7679 28.3078 47.6012 27.7707 47.9327C27.2335 48.2642 27.0668 48.9683 27.3983 49.5055L29.3434 48.3051ZM40.3759 56.7148C48.7552 56.7148 55.5707 49.9974 55.5707 41.6831H53.285C53.285 48.71 47.518 54.4291 40.3759 54.4291V56.7148ZM55.5707 41.6831V38.9053H53.285V41.6831H55.5707ZM53.6245 38.0924L50.8141 40.8702L52.4209 42.4959L55.2313 39.7181L53.6245 38.0924ZM53.6245 39.7181L56.4349 42.4959L58.0416 40.8702L55.2313 38.0924L53.6245 39.7181ZM27.3983 49.5055C30.0671 53.83 34.8831 56.7148 40.3759 56.7148V54.4291C35.7001 54.4291 31.6088 51.976 29.3434 48.3051L27.3983 49.5055Z"
            fill="#425EEC"
          />
        </svg>

        <svg
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${s.Icon} ${s.Icon_Wallet}`}
        >
          <circle cx="35" cy="35" r="25" fill="#DCE1FC" />
          <path
            d="M60 35C60 21.1929 48.8071 10 35 10C21.1929 10 10 21.1929 10 35"
            stroke="#7E93FA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.7427 35.0364C25.4142 31.6791 25.7499 30.0005 26.8593 28.9193C27.0643 28.7195 27.2861 28.5376 27.5223 28.3758C28.8 27.5 30.5119 27.5 33.9357 27.5H36.0644C39.4881 27.5 41.2 27.5 42.4778 28.3758C42.7139 28.5376 42.9357 28.7195 43.1408 28.9193C44.2501 30.0005 44.5858 31.6791 45.2573 35.0364C46.2213 39.8564 46.7033 42.2664 45.5937 43.9742C45.3928 44.2834 45.1583 44.5694 44.8945 44.8271C43.4375 46.25 40.9798 46.25 36.0644 46.25H33.9357C29.0202 46.25 26.5625 46.25 25.1055 44.8271C24.8417 44.5694 24.6072 44.2834 24.4063 43.9742C23.2967 42.2664 23.7787 39.8564 24.7427 35.0364Z"
            stroke="#425EEC"
            strokeWidth="2"
          />
          <circle cx="38.75" cy="31.25" r="1.25" fill="#425EEC" />
          <circle cx="31.25" cy="31.25" r="1.25" fill="#425EEC" />
          <path
            d="M31.25 27.5V26.25C31.25 24.1789 32.9289 22.5 35 22.5C37.0711 22.5 38.75 24.1789 38.75 26.25V27.5"
            stroke="#425EEC"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${s.Icon} ${s.Icon_Shield}`}
        >
          <circle cx="30" cy="29.9999" r="21.4286" fill="#DCE1FC" />
          <path
            d="M30 8.57157C18.1653 8.57157 8.57143 18.1655 8.57143 30.0001C8.57143 41.8348 18.1653 51.4287 30 51.4287"
            stroke="#7E93FA"
            strokeWidth="1.71429"
            strokeLinecap="round"
          />
          <path
            d="M20.3571 28.303C20.3571 24.877 20.3571 23.164 20.7616 22.5877C21.1661 22.0114 22.7768 21.4601 25.9981 20.3574L26.6118 20.1474C28.291 19.5726 29.1306 19.2852 30 19.2852C30.8693 19.2852 31.7089 19.5726 33.3881 20.1474L34.0019 20.3574C37.2232 21.4601 38.8339 22.0114 39.2384 22.5877C39.6428 23.164 39.6428 24.877 39.6428 28.303C39.6428 28.8205 39.6428 29.3817 39.6428 29.9902C39.6428 36.031 35.1011 38.9625 32.2515 40.2072C31.4785 40.5449 31.092 40.7137 30 40.7137C28.9079 40.7137 28.5214 40.5449 27.7484 40.2072C24.8989 38.9625 20.3571 36.031 20.3571 29.9902C20.3571 29.3817 20.3571 28.8205 20.3571 28.303Z"
            stroke="#425EEC"
            strokeWidth="1.60714"
          />
          <path
            d="M27.3214 30.4279L28.852 32.1422L32.6786 27.8564"
            stroke="#425EEC"
            strokeWidth="1.60714"
            strokeLinecap="round"
            strokeLinejoin="round"
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
      </div>

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
            className={s.Btn}
          >
            Explore Service Providers
          </BaseButton>

          <BaseButton
            type="secondary"
            onClick={() => router.push('/merchant-protection')}
            className={s.Btn}
          >
            Review Merchant Protection
          </BaseButton>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Header;
