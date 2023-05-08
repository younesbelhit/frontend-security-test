import React from 'react';
import Head from '../../components/head';
import LoginForm from '../../components/auth/login';

const Login = () => {
  return (
    <>
      <Head title="Login" />
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div className="card border shadow p-3 mb-5 bg-body rounded bg-white mt-5">
              <div className="card-body">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
