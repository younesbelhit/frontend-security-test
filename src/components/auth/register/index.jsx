import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { registerApi, findByUsernameApi } from '../../../services/auth';
import { useTranslation } from 'react-i18next';
import useJwtToken from '../../../hooks/useJwtToken';

const RegisterForm = () => {
  
  const { t } = useTranslation();
  const { token } = useJwtToken();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(t('error.username.required')),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required(t('error.password.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('error.password.must_match'))
      .required(t('error.password.confirm_password')),
  });

  const handleSubmit = async (values) => {
    try {
      // Make API call to check if username exists
      const {
        data: { total },
      } = await findByUsernameApi(values.username);

      if (total > 0) {
        setSuccess(null);
        setError('Username already exists. !');
        return false;
      }

      // Make API call to register user
      const response = await registerApi(values);

      if (response.status === 200) {
        setError(null);
        setSuccess('registration successfully completed');
      }
    } catch (error) {
      setSuccess(null);
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
          <h1>{t('header.sign_up')}</h1>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
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
            <div id="passwordHelpBlock" className="form-text">
              {t('label.passwordHelpBlock')}
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">{t('label.confirm_password')}</label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="mb-3">
            <p className="text-center">
              By signing up you accept our{' '}
              <Link to="/">{t('label.termsOfUse')}</Link>
            </p>
          </div>
          <div className="col-md-12 text-center d-grid gap-2">
            <button
              type="submit"
              className=" btn btn-block mybtn btn-primary tx-tfm"
            >
              {t('button.register')}
            </button>
          </div>
          <hr className="hr-or" />
          <div className="mb-3">
            <p className="text-center">
              Do you have an account? <Link to="/login">{t('button.login')}</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
