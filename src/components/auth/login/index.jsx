import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { loginApi } from '../../../services/auth';
import useJwtToken from '../../../hooks/useJwtToken';

const LoginForm = () => {

  const { t } = useTranslation();
  const [error, setError] = useState('');
  const { token, saveToken } = useJwtToken();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(t('error.username.required')),
    password: Yup.string().required(t('error.password.required')),
  });

  const handleSubmit = async (values) => {
    try {
      const { data } = await loginApi(values);
      saveToken(data?.token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto">
      <div className="logo mb-3">
        <div className="col-md-12 text-center">
          <h1>{t('header.sign_in')}</h1>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="username">{t('label.username')}</label>
            <Field
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">{t('label.password')}</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="mb-3">
            <p className="text-center">
              By signing in you accept our{' '}
              <Link to="/">{t('label.termsOfUse')}</Link>
            </p>
          </div>
          <div className="col-md-12 text-center d-grid gap-2">
            <button
              type="submit"
              className=" btn btn-block mybtn btn-primary tx-tfm"
            >
              {t('button.login')}
            </button>
          </div>
          <hr className="hr-or" />
          <div className="mb-3">
            <p className="text-center">
              Don't have account?{' '}
              <Link to="/register">{t('button.register')}</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
