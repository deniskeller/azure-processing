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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionScrollRef.current,
        toggleActions: 'play none none none',
        // markers: true,
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
    <section className={s.Second} ref={sectionScrollRef}>
      <BaseContainer>
        <BaseTitle type="h2" className={s.Second_Title} ref={refTitle}>
          We are working with international network of payment providers
          offering only trusted and secured companies for e-commerce services
        </BaseTitle>

        <BaseText className={s.Second_Subtitle} ref={refSubtitle}>
          We also do merchant due-diligence and protection in case of acquirers
          or payment service providers unprofessional behavior.
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default Second;
