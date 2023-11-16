import { BaseContainer, BaseTitle } from '@base/index';
import React from 'react';
import s from './HowItWork.module.scss';
import Image from 'next/image';

const HowItWork: React.FC = () => {
  return (
    <section className={s.HowItWork}>
      <BaseContainer>
        <BaseTitle type="h2" className={s.HowItWork_Title}>
          How it work?
        </BaseTitle>

        <ul className={s.HowItWork_Steps}>
          <li className={s.Step}>
            <Image
              src="/pictures/images/how-it-work-step-image-1.png"
              width={140}
              height={140}
              alt=""
              className={s.Step_Image}
            />

            <div className={s.Step_Title}>
              <h3>Sending a request</h3>
            </div>

            <div className={s.Step_Description}>
              <p>You send us merchant account opening request.</p>
            </div>
          </li>

          <li className={s.Step}>
            <Image
              src="/pictures/images/how-it-work-step-image-2.png"
              width={140}
              height={140}
              alt=""
              className={s.Step_Image}
            />

            <div className={s.Step_Title}>
              <h3>Response in 24 hours</h3>
            </div>

            <div className={s.Step_Description}>
              <p>
                During 24 hours we review your application and provide feedback.
              </p>
            </div>
          </li>

          <li className={s.Step}>
            <Image
              src="/pictures/images/how-it-work-step-image-3.png"
              width={140}
              height={140}
              alt=""
              className={s.Step_Image}
            />

            <div className={s.Step_Title}>
              <h3>Sending an offer</h3>
            </div>

            <div className={s.Step_Description}>
              <p>
                During 48 hours we send you reply and merchant account offers
                from variety of banks and service providers.
              </p>
            </div>
          </li>
        </ul>
      </BaseContainer>
    </section>
  );
};

export default HowItWork;
