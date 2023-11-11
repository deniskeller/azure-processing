import { BaseButton } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './NotFound.module.scss';
import Image from 'next/image';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <section className={s.NotFound}>
      <div className={s.NotFound_Image}>
        <Image
          src="/pictures/images/404.png"
          width={500}
          height={500}
          priority
          quality={100}
          alt="404 image"
        />
      </div>

      <BaseButton
        className={s.NotFound_Button}
        onClick={() => router.push('/')}
      >
        Go to main page
      </BaseButton>
    </section>
  );
};

export default NotFound;
