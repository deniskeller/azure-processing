import { BaseButton } from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './StepThree.module.scss';
import { InputUploadPhoto } from '@content/landing/index';

interface Props {
  confirm?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
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
  selfieWithPassportImg: string[];
}

const StepThree: React.FC<Props> = ({ confirm, backStep }) => {
  const [images, setImages] = useState<IFile[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [selfieWithPassportImg, setSelfieWithPassportImg] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (images.length > 0) {
      // console.log('images: ', images);
      const formData = new FormData();
      formData.set('file', images[images.length - 1].file);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // console.log('response: ', response);
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setSelfieWithPassportImg((prev) => [...prev, data.url]);
        });
    }
  }, [images]);

  useEffect(() => {
    let formData = sessionStorage.getItem('formData');
    let newFormData = {} as INewFormData;
    if (formData !== null) {
      newFormData = JSON.parse(formData);
    }

    console.log('newformData11111: ', newFormData);

    newFormData['selfieWithPassportImg'] = selfieWithPassportImg;

    sessionStorage.setItem('formData', JSON.stringify(newFormData));
  }, [selfieWithPassportImg]);

  return (
    <div className={s.Step}>
      <div className={s.Step_Counter}>
        <span>Step&nbsp;3/3</span>
      </div>

      <div className={s.Step_Title}>
        <h1>Selfie with ID/Password</h1>
      </div>

      <div className={s.Step_Subtitle}>
        <p>Make sure both your face and the document are clearly visible</p>
      </div>

      <div className={s.Step_Form}>
        <div className={s.Title}>
          <h2>Upload selfie photos (up to two photos)</h2>
        </div>

        <InputUploadPhoto setDisabled={setDisabled} uploadImage={setImages} />
      </div>

      <div className={s.Step_Actions}>
        <BaseButton onClick={backStep} className={s.Back} type="empty">
          Back
        </BaseButton>

        <BaseButton
          onClick={confirm}
          className={s.NextStep}
          disabled={disabled}
        >
          Сonfirm
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

export default StepThree;
