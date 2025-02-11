import React, { useLayoutEffect, useEffect, useMemo, useState } from 'react';
import s from './InputUploadPhoto.module.scss';

interface Props {
  className?: string;
  multiple?: boolean;
  type?: string;
  setDisabled: (value: boolean) => void;
}

interface IInputData {
  files: File[];
}

interface INewFormData {
  nameSurname: string;
  birthDate: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  idOrPassportImg?: string[];
  selfieWithPassportImg?: string[];
}

export async function loadPhotoToServer(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();

  return data as { url: string };
}

const InputUploadPhoto: React.FC<Props> = ({
  className = '',
  multiple = true,
  type,
  setDisabled,
}) => {
  //ЛОКАЛЬНЫЙ СТЕЙТ
  const [value, setValue] = useState<IInputData>({
    files: [],
  });

  //ДОБАВЛЕНИЕ ФОТКИ В ЛОКАЛЬНЫЙ СТЕЙТ
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    if (!files) return;

    const filesLength = files.length;

    if (filesLength >= 2 || filesLength === 0) {
      return;
    }

    // load photo to server
    const promises = files.map(async (file) => {
      const data = await loadPhotoToServer(file);

      if (type == 'idOrPassportImg') {
        // write to sessionStorage
        const sessionStorageData = JSON.parse(
          sessionStorage.getItem('formData') ?? ''
        ) as INewFormData;
        sessionStorageData.idOrPassportImg = [
          ...(sessionStorageData.idOrPassportImg
            ? sessionStorageData.idOrPassportImg
            : []),
          data.url,
        ];
        sessionStorage.setItem('formData', JSON.stringify(sessionStorageData));
      }

      if (type == 'selfieWithPassportImg') {
        // write to sessionStorage
        const sessionStorageData = JSON.parse(
          sessionStorage.getItem('formData') ?? ''
        ) as INewFormData;
        sessionStorageData.selfieWithPassportImg = [
          ...(sessionStorageData.selfieWithPassportImg
            ? sessionStorageData.selfieWithPassportImg
            : []),
          data.url,
        ];
        sessionStorage.setItem('formData', JSON.stringify(sessionStorageData));
      }

      console.log(
        JSON.parse(sessionStorage.getItem('formData') ?? '') as INewFormData
      );
    });

    await Promise.all(promises);

    setValue((prevState) => {
      return {
        ...prevState,
        files: [...prevState.files, ...files],
      };
    });

    e.target.value = '';
  };

  //УДАЛЕНИЕ ФОТКИ ИЗ ЛОКАЛЬНОГО СТЕЙТА
  const deletePhoto = (index: number) => {
    let newFiles = [...value.files];
    newFiles.splice(index, 1);
    setValue((prev) => ({ ...prev, files: newFiles }));
    // remove from sessionStorage
    const sessionStorageData = JSON.parse(
      sessionStorage.getItem('formData') ?? ''
    ) as INewFormData;
    if (type == 'idOrPassportImg') {
      sessionStorageData.idOrPassportImg?.splice(index, 1);
    }
    if (type == 'selfieWithPassportImg') {
      sessionStorageData.selfieWithPassportImg?.splice(index, 1);
    }
    sessionStorage.setItem('formData', JSON.stringify(sessionStorageData));
    console.log(
      JSON.parse(sessionStorage.getItem('formData') ?? '') as INewFormData
    );
  };

  useEffect(() => {
    if (value.files.length == 0) {
      setDisabled(true);
    }

    return () => {
      setDisabled(false);
    };
  }, [setDisabled, value.files.length]);

  useEffect(() => {
    const sessionStorageData = JSON.parse(
      sessionStorage.getItem('formData') ?? ''
    ) as INewFormData;
    if (type == 'idOrPassportImg') {
      sessionStorageData.idOrPassportImg = [];
    }
    if (type == 'selfieWithPassportImg') {
      sessionStorageData.selfieWithPassportImg = [];
    }
    sessionStorage.setItem('formData', JSON.stringify(sessionStorageData));
    console.log(
      JSON.parse(sessionStorage.getItem('formData') ?? '') as INewFormData
    );
  }, [type]);

  return (
    <div className={`${s.InputUploadPhoto} ${className}`}>
      {value.files.map((thumbnail, index) => {
        const thumbnailUrl = URL.createObjectURL(thumbnail);

        return (
          <div
            key={index}
            className={s.UploadedPhoto}
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          >
            <div className={s.UploadedPhoto_Overlay}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className={s.UploadedPhoto_Delete}
              onClick={() => {
                deletePhoto(index);
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                fill="white"
              />
            </svg>
          </div>
        );
      })}

      {value.files.length < 2 ? (
        <div
          className={`${s.Uploader} ${s.Uploader_Empty} ${
            value.files.length >= 1 ? s.Uploader_NotEmpty : ''
          }`}
        >
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            multiple={multiple || false}
            onChange={handleInputChange}
            className={s.Uploader_Input}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className={s.Uploader_Icon}
          >
            <circle
              cx="30"
              cy="32.5"
              r="7.5"
              stroke="#425EEC"
              strokeWidth="2"
            />
            <path
              d="M24.4444 52.5H35.5556C43.3581 52.5 47.2594 52.5 50.0619 50.6615C51.2751 49.8656 52.3168 48.8428 53.1274 47.6517C55 44.9001 55 41.0698 55 33.4091C55 25.7484 55 21.918 53.1274 19.1665C52.3168 17.9753 51.2751 16.9526 50.0619 16.1567C48.2611 14.9753 46.0067 14.5531 42.555 14.4021C40.9079 14.4021 39.4897 13.1767 39.1667 11.5909C38.6821 9.21222 36.5549 7.5 34.0842 7.5H25.9158C23.4451 7.5 21.3179 9.21222 20.8333 11.5909C20.5103 13.1767 19.0921 14.4021 17.445 14.4021C13.9933 14.5531 11.7389 14.9753 9.93811 16.1567C8.72488 16.9526 7.68321 17.9753 6.87256 19.1665C5 21.918 5 25.7484 5 33.4091C5 41.0698 5 44.9001 6.87256 47.6517C7.68321 48.8428 8.72488 49.8656 9.93811 50.6615C12.7406 52.5 16.6419 52.5 24.4444 52.5Z"
              stroke="#425EEC"
              strokeWidth="2"
            />
            <path
              d="M47.5 25H45"
              stroke="#425EEC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <p className={s.Uploader_Label}>Drag file here to upload or browse</p>
        </div>
      ) : null}
    </div>
  );
};

export default InputUploadPhoto;
