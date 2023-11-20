import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React, { useEffect, useRef } from 'react';
import s from './BenefitCards.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const BenefitCards: React.FC = () => {
  const sectionScrollRef = useRef(null);
  const refCard_1 = useRef(null);
  const refCard_2 = useRef(null);
  const refCard_3 = useRef(null);
  const refCard_4 = useRef(null);

  useEffect(() => {
    gsap.set(refCard_1.current, {
      y: '0%',
      opacity: 1,
      scale: 1,
    });

    gsap.from(refCard_1.current, {
      scrollTrigger: {
        trigger: refCard_1.current,
        toggleActions: 'play none none none',
      },
      y: '100%',
      opacity: 0,
      scale: 0.3,
    });
  }, []);

  return (
    <BaseContainer>
      <section className={s.BenefitCards} ref={sectionScrollRef}>
        <div className={`${s.Card} ${s.Card_1}`}>
          <div className={s.Card_Text}>
            <p>
              Chance to choose the best processing solution with the best rates
              and conditions.
            </p>
          </div>
          <Image
            src="/pictures/images/benefit-card-image-1.png"
            width={241}
            height={200}
            alt=""
            className={s.Card_Image}
          />
        </div>

        <div className={`${s.Card} ${s.Card_2}`}>
          <div className={s.Card_Text}>
            <p>
              Secured and verified network of acquiring banks and service
              providers.
            </p>
          </div>
          <Image
            src="/pictures/images/benefit-card-image-2.png"
            width={241}
            height={241}
            alt=""
            className={s.Card_Image}
          />
        </div>

        <div className={`${s.Card} ${s.Card_3}`}>
          <div className={s.Card_Text}>
            <p>
              Fast approval and easy boarding with own professional assistance.
            </p>
          </div>
          <Image
            src="/pictures/images/benefit-card-image-3.png"
            width={241}
            height={226}
            alt=""
            className={s.Card_Image}
          />
        </div>

        <div className={`${s.Card} ${s.Card_4}`}>
          <div className={s.Card_Text}>
            <p>Your time and security are our biggest values</p>
          </div>
        </div>
      </section>
    </BaseContainer>
  );
};

export default BenefitCards;
