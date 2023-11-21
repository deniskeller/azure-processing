import React, { useEffect, useRef } from 'react';
import s from './LinesWithGradient.module.scss';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

const LinesWithGradient: React.FC<Props> = ({ className = '' }) => {
  const sectionScrollRef = useRef<HTMLDivElement>(null);
  const refLine_1 = useRef(null);

  useEffect(() => {
    if (sectionScrollRef.current != null) {
      const line_list = sectionScrollRef.current.childNodes;

      line_list.forEach((line: gsap.TweenTarget, index) => {
        gsap.fromTo(
          line,
          {
            height: '0%',
          },
          {
            height: '100%',
            delay: index * 0.1,
            duration: 1.5,
            stagger: -0.05,
          }
        );
      });
    }
  }, []);

  return (
    <div
      className={`${s.LinesWithGradient} ${className}`}
      ref={sectionScrollRef}
    >
      <div className={`${s.Line} ${s.Line_1}`} ref={refLine_1}></div>
      <div className={`${s.Line} ${s.Line_2}`}></div>
      <div className={`${s.Line} ${s.Line_3}`}></div>
      <div className={`${s.Line} ${s.Line_4}`}></div>
      <div className={`${s.Line} ${s.Line_5}`}></div>
      <div className={`${s.Line} ${s.Line_6}`}></div>
      <div className={`${s.Line} ${s.Line_7}`}></div>
      <div className={`${s.Line} ${s.Line_8}`}></div>
      <div className={`${s.Line} ${s.Line_9}`}></div>
      <div className={`${s.Line} ${s.Line_10}`}></div>
      <div className={`${s.Line} ${s.Line_11}`}></div>
      <div className={`${s.Line} ${s.Line_12}`}></div>
      <div className={`${s.Line} ${s.Line_13}`}></div>

      <div className={s.Gradient}></div>
    </div>
  );
};

export default LinesWithGradient;
