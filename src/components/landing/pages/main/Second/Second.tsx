import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import s from './Second.module.scss';

const Second: React.FC = () => {
  return (
    <section className={s.Second}>
      <BaseContainer>
        <BaseTitle type="h2" className={s.Second_Title}>
          We are working with international network of payment providers
          offering only trusted and secured companies for e-commerce services
        </BaseTitle>

        <BaseText className={s.Second_Subtitle}>
          We also do merchant due-diligence and protection in case of acquirers
          or payment service providers unprofessional behavior.
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default Second;
