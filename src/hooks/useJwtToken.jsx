import useLocalStorage from './useLocalStorage';
import { parseJwt } from '../utils/jwt';

const useJwtToken = () => {
  const [token, setToken] = useLocalStorage('token', null);

  const saveToken = (token) => {
    setToken(token);
  };

  const clearToken = () => {
    setToken(null);
  };

  const decodedToken = () => {
    return parseJwt(token);
  };

  return { token, saveToken, clearToken, decodedToken };
};

export default useJwtToken;
