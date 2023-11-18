//@ts-nocheck
import React, { useEffect, useState } from 'react';
import s from './UploadMerchPhoto.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className?: string;
  multiple?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

interface IFile {
  file: File;
  thumbnail: string;
}
interface IInputData {
  files: IFile[];
  previewIndex: number;
  showDropArea: boolean;
}

const UploadMerchPhoto: React.FC<Props> = ({
  className = '',
  multiple,
  onClick,
}) => {
  const [value, setValue] = useState<IInputData>({
    files: [],
    previewIndex: 0,
    showDropArea: false,
  });

  const readFileData = (file: Blob) => {
    const promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject('Something went wrong when reading the file');
      };
      reader.readAsDataURL(file);
    });
    return promise;
  };

  const selectImageForPreview = (previewIndex: number, relative = false) => {
    if (relative) {
      setValue((prevState) => {
        let newState = Object.assign({}, prevState);
        let imageCount = value.files.length;
        newState.previewIndex =
          (prevState.previewIndex + previewIndex + imageCount) % imageCount;
        return newState;
      });
    } else {
      setValue((prev) => ({ ...prev, previewIndex: previewIndex }));
    }
  };

  const removeCurrentImage = (e: { preventDefault: () => any }) => {
    e && e.preventDefault();
    let indexToRemove = value.previewIndex;
    setValue((prevState) => {
      let nextState = Object.assign({}, prevState);
      nextState.files = prevState.files.filter(
        (_, index) => index !== indexToRemove
      );
      nextState.previewIndex = Math.max(
        Math.min(nextState.files.length - 1, prevState.previewIndex),
        0
      );
      return nextState;
    });
  };

  const handleInputChange = (e: {
    preventDefault: () => any;
    stopPropagation: () => any;
    target: { files: any };
  }) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    let files = e.target.files.length <= 2 ? e.target.files : false;

    let fileReadProcesses = Array.prototype.map.call(files, (file) =>
      readFileData(file)
    );
    Promise.all(fileReadProcesses).then((thumbnails) => {
      let filesData = thumbnails.map((thumbnail, index) => ({
        file: files[index],
        thumbnail,
      }));
      setValue((prevState) => {
        let newState = Object.assign({}, prevState);
        newState.files = prevState.files.concat(filesData);
        return newState;
      });
    });
  };

  return (
    <div className={`${s.UploadPhoto} ${className}`}>
      <div className={s.UploadPhoto_Container}>
        <div className={s.Uploader}>
          {!value.files.length || value.showDropArea ? (
            <div className={s.Uploader_Empty}>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                multiple={multiple || false}
                onChange={handleInputChange}
                className={s.Uploader_Empty_Input}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29 30"
                fill="none"
                className={s.Uploader_Empty_Icon}
              >
                <path
                  d="M27.1875 22.9948H26.8202C25.6843 22.9948 24.5521 22.6637 23.722 21.8868C22.7345 20.9635 21.8946 19.8942 21.2316 18.7161L20.2408 16.9531H19.6366L18.6434 18.7161C18.0665 19.7405 17.3554 20.6833 16.5288 21.5194C15.6638 21.2847 14.8683 20.8445 14.21 20.2362C12.8348 18.9421 11.666 17.4449 10.7445 15.7968L9.36458 13.3281H8.76283L7.38413 15.7968C6.35077 17.6445 5.00772 19.3011 3.41354 20.6941C2.94876 21.0966 2.40268 21.3942 1.8125 21.5665M1.8125 27.8281V2.45312H27.1875V27.8281H1.8125ZM19.9375 12.1198C19.2966 12.1198 18.6819 11.8652 18.2287 11.412C17.7754 10.9588 17.5208 10.3441 17.5208 9.70313C17.5208 9.06219 17.7754 8.4475 18.2287 7.99428C18.6819 7.54107 19.2966 7.28646 19.9375 7.28646C20.5784 7.28646 21.1931 7.54107 21.6463 7.99428C22.0996 8.4475 22.3542 9.06219 22.3542 9.70313C22.3542 10.3441 22.0996 10.9588 21.6463 11.412C21.1931 11.8652 20.5784 12.1198 19.9375 12.1198Z"
                  stroke="#1A1A1A"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
              </svg>

              <p className={s.Uploader_Empty_Label}>Click to download</p>
            </div>
          ) : (
            <>
              <div
                className={s.Uploader_Preview}
                style={{
                  backgroundImage: `url(${
                    value.files.length
                      ? value.files[value.previewIndex].thumbnail
                      : ''
                  })`,
                }}
              ></div>

              <div className={s.Uploader_Actions}>
                <div className={s.Change} onClick={onClick}>
                  <BaseIcon
                    viewBox="0 0 22 22"
                    icon={ALL_ICONS.EDIT}
                    className={s.Change_Icon}
                  />
                </div>

                <div className={s.Delete} onClick={removeCurrentImage}>
                  <BaseIcon
                    viewBox="0 0 24 24"
                    icon={ALL_ICONS.DELETE}
                    className={s.Delete_Icon}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {multiple && value.files.length ? (
          <div className={s.Thumbnails}>
            {value.files.length < 2 ? (
              <div className={s.Thumbnails_Upload}>
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  multiple={multiple || false}
                  onChange={handleInputChange}
                  className={s.Thumbnails_Upload_Input}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                  className={s.Thumbnails_Upload_Icon}
                >
                  <path
                    d="M6.99967 2.87891V12.2122M11.6663 7.54557L2.33301 7.54557"
                    stroke="#1A1A1A"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}

            {value.files.map((thumbnail, index) => {
              return (
                <div
                  key={index}
                  className={`${s.Thumbnails_Image} ${
                    index === value.previewIndex
                      ? s.Thumbnails_Image_Selected
                      : ''
                  }`}
                  style={{ backgroundImage: `url(${thumbnail.thumbnail})` }}
                  onClick={(e) => {
                    selectImageForPreview(index);
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UploadMerchPhoto;
