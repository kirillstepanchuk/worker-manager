import axios from 'axios';

export default function handleError(e: unknown) {
  if (axios.isAxiosError(e)) {
    return true;
  }
  return false;
}
