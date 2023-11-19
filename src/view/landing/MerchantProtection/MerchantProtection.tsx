import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './MerchantProtection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { InputPhone, LinesWithGradient } from '@content/landing/index';

interface IFormData {
  name_surname: string;
  company_name: string;
  email: string;
  phone: string;
  text_problem: string;
}

const MerchantProtection: React.FC = () => {
  const router = useRouter();

  const [value, setValue] = React.useState<IFormData>({
    name_surname: 'Maxim Ivanov',
    company_name: 'Azure Processing',
    email: 'example@mail.com',
    phone: '',
    text_problem:
      'There is something to think about: representatives of modern social reserves are presented in an exceptionally positive light.',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <div className={s.MerchantProtection}>
      <LinesWithGradient />
      <section className={s.Header}>
        <BaseContainer>
          <div className={s.Header_Container}>
            <div className={s.Header_Text}>
              <BaseTitle type="h2" className={s.Title}>
                We are helping merchants to protect themselves from illegal,
                unprofessional behavior of acquiring banks or payment service
                providers in different situations
              </BaseTitle>

              <BaseText className={s.Description}>
                In case your funds were frozen, merchant account blocked or you
                are receiving letters with fines and warnings without any reason
                – we can immediately help get things clear and resolve any
                situation no matter where you are.
              </BaseText>
            </div>

            <div className={s.Header_Pictures}>
              <Image
                src="/pictures/images/merchant-protection-header-image.png"
                width={643}
                height={643}
                priority
                quality={100}
                alt="Merchant protection image"
                className={s.Image}
              />

              <div className={`${s.Circle} ${s.Circle_Small}`}></div>
              <div className={`${s.Circle} ${s.Circle_Middle}`}></div>
              <div className={`${s.Circle} ${s.Circle_Large}`}></div>
            </div>
          </div>
        </BaseContainer>
      </section>
      <section className={s.DescriptionProblem}>
        <BaseContainer>
          <BaseTitle type="h2" className={s.DescriptionProblem_Title}>
            Please send us a brief description of your issue and we will contact
            you within 24 hours
          </BaseTitle>

          <div className={s.DescriptionProblem_Form}>
            <div className={s.Title}>
              <h3>Contact form</h3>
            </div>

            <div className={s.Subtitle}>
              <p>
                Please make sure youI have read&nbsp;
                <Link href="/terms-and-agreements">Terms & Agreements</Link>
                &nbsp;and agree with them before submitting
              </p>
            </div>

            <ul className={s.Inputs}>
              <li>
                <BaseInput
                  name="name_surname"
                  placeholder="Name Surname"
                  label="Name Surname"
                  value={value.name_surname}
                  onChange={(val: string) => setNewValue(val, 'name_surname')}
                />
              </li>

              <li>
                <BaseInput
                  name="company_name"
                  placeholder="Company name"
                  label="Company name"
                  value={value.company_name}
                  onChange={(val: string) => setNewValue(val, 'company_name')}
                />
              </li>

              <li>
                <BaseInput
                  name="email"
                  placeholder="Email"
                  label="Email"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                />
              </li>

              <li>
                <InputPhone
                  value={value.phone}
                  onChange={(val: string) => setNewValue(val, 'phone')}
                />
              </li>

              <li>
                <BaseTextarea
                  name="text_problem"
                  label="Describe your problem"
                  value={value.text_problem}
                  onChange={(val: string) => setNewValue(val, 'text_problem')}
                />
              </li>
            </ul>

            <BaseButton className={s.Button} onClick={() => router.push('/')}>
              Send request
            </BaseButton>
          </div>
        </BaseContainer>
      </section>
    </div>
  );
};

export default MerchantProtection;
