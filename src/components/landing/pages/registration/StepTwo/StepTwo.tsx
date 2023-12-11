import { BaseButton } from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './StepTwo.module.scss';
import { InputUploadPhoto } from '@content/landing/index';
import toast from 'react-hot-toast';

interface Props {
  nextStep?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  backStep?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IFile {
  file: File;
  thumbnail: string;
}

interface INewFormData {
  nameSurname: string;
  birthDate: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  idOrPassportImg: string[];
}

const StepTwo: React.FC<Props> = ({ nextStep, backStep }) => {
  const [disabled, setDisabled] = useState(true);
  const [images, setImages] = useState<IFile[]>([]);

  const [idOrPassportImg, setIdOrPassportImg] = useState<string[]>([]);

  useEffect(() => {
    if (images.length) {
      const formData = new FormData();
      formData.set('file', images[images.length - 1].file);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('data: ', data);
          setIdOrPassportImg((prev) => {
            return [...prev, data.url];
          });
        });
    }
  }, [images, images.length]);

  useEffect(() => {
    let formData = sessionStorage.getItem('formData');
    let newFormData = {} as INewFormData;
    if (formData !== null) {
      newFormData = JSON.parse(formData);
    }

    console.log('newformData11111: ', newFormData);

    newFormData['idOrPassportImg'] = idOrPassportImg;
    sessionStorage.setItem('formData', JSON.stringify(newFormData));
  }, [idOrPassportImg]);

  useEffect(() => {
    console.log('images1111111111122222222: ', images);
  }, [images]);

  return (
    <div className={s.Step}>
      <div className={s.Step_Counter}>
        <span>Step&nbsp;2/3</span>
      </div>

      <div className={s.Step_Title}>
        <h1>ID/Passport</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>
          Make sure that photo is of high quality and there are no highlights on
          the documents
        </p>
      </div>

      <div className={s.Step_Form}>
        <div className={s.Title}>
          <h2>Upload Passport or ID card (up to two photos)</h2>
        </div>

        <InputUploadPhoto setDisabled={setDisabled} uploadImage={setImages} />
      </div>

      <div className={s.Step_Actions}>
        <BaseButton onClick={backStep} className={s.Back} type="empty">
          Back
        </BaseButton>

        <BaseButton
          onClick={nextStep}
          className={s.NextStep}
          disabled={disabled}
        >
          Next step
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={`${s.NextStep_Icon} ${
              disabled ? s.NextStep_Icon_Disabled : null
            }`}
          >
            <path
              d="M4 12.5H20M20 12.5L14 6.5M20 12.5L14 18.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BaseButton>
      </div>
    </div>
  );
};

export default StepTwo;
