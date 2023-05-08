import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useJwtToken from '../../hooks/useJwtToken';

const Logout = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { clearToken } = useJwtToken();

  const handleClick = () => {
    clearToken();
    navigate('/login');
  };

  return <button className="btn btn-primary" onClick={handleClick}>{t('button.logout')}</button>;
};

export default Logout;
