import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/images/404.png';
import Head from '../../components/head';

const Error = () => {
 
  return (
    <>
      <Head title="404" />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src={NotFound}
              alt="404"
              className="img-fluid"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <h1>Opps!</h1>
            <p className="fs-3">Page not found.</p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <Link className="btn btn-primary" to="/">
              Go Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
