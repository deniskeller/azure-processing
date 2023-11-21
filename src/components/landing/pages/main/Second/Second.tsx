import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React, { useEffect, useRef } from 'react';
import s from './Second.module.scss';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Second: React.FC = () => {
  const refTitle = useRef(null);
  const refSubtitle = useRef(null);

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
          start: 'top 70%',
        },
      })
      .fromTo(refSubtitle.current, { y: '100%' }, { y: '0%', delay: 0.5 });
  }, []);

  return (
    <section className={s.Second}>
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
