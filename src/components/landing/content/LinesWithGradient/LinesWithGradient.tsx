import React from 'react';
import s from './LinesWithGradient.module.scss';

interface Props {
  className?: string;
}

const LinesWithGradient: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${s.LinesWithGradient} ${className}`}>
      <div className={`${s.Line} ${s.Line_1}`}></div>
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
