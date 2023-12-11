/* global sessionStorage */
export const STEPPER_FORM_DATA_KEY = "stepper-form-data";

export  const setFormData = (formData) => {
  sessionStorage.setItem(STEPPER_FORM_DATA_KEY, JSON.stringify(formData));
};

export const getFormData = () => {
  const rawFormData = sessionStorage.getItem(STEPPER_FORM_DATA_KEY);

  if (!rawFormData) {
    return [];
  }

  return JSON.parse(rawFormData);
};

export const clearFormData = () => {
  sessionStorage.removeItem(STEPPER_FORM_DATA_KEY);
};