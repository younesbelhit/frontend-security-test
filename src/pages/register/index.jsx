import React from 'react';
import Head from '../../components/head';
import RegisterForm from '../../components/auth/register';

const Register = () => {
  return (
    <>
      <Head title="Register" />
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div className="card border shadow p-3 mb-5 bg-body rounded bg-white mt-5">
              <div className="card-body">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
