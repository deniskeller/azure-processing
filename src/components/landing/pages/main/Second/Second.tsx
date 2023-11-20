import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React, { useEffect, useRef } from 'react';
import s from './Second.module.scss';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Second: React.FC = () => {
  const sectionScrollRef = useRef(null);
  const refTitle = useRef(null);
  const refSubtitle = useRef(null);

  useEffect(() => {
    gsap.set(refTitle.current, {
      y: '0%',
      opacity: 1,
      scale: 1,
    });

    gsap.from(refTitle.current, {
      scrollTrigger: {
        trigger: refTitle.current,
        toggleActions: 'play none none none',
      },
      y: '100%',
      opacity: 0,
      scale: 0.3,
    });

    gsap.set(refSubtitle.current, {
      y: '0%',
      opacity: 1,
      scale: 1,
    });

    gsap.from(refSubtitle.current, {
      scrollTrigger: {
        trigger: refSubtitle.current,
        toggleActions: 'play none none none',
      },
      y: '100%',
      opacity: 0,
      scale: 0.3,
    });
  }, []);

  return (
    <section className={s.Second} ref={sectionScrollRef}>
      <BaseContainer>
        <span>
          <BaseTitle type="h2" className={s.Second_Title} ref={refTitle}>
            We are working with international network of payment providers
            offering only trusted and secured companies for e-commerce services
          </BaseTitle>
        </span>

        <BaseText className={s.Second_Subtitle} ref={refSubtitle}>
          We also do merchant due-diligence and protection in case of acquirers
          or payment service providers unprofessional behavior.
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default Second;
