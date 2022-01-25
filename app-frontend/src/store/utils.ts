import axios from 'axios';

export const handleError = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    return true;
  }
  return false;
};

export const fromObjectToFormData = (object: any) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};
