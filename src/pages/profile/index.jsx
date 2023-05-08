import React from 'react';
import Head from '../../components/head';
import UserProfile from '../../components/profile';

const Profile = () => {
  return (
    <>
      <Head title="Profile" />
      <div className="container">
        <UserProfile />
      </div>
    </>
  );
};

export default Profile;
