import React from 'react';
import useJwtToken from '../../hooks/useJwtToken';

const UserProfile = () => {

  const { decodedToken } = useJwtToken();
  const { username } = decodedToken();

  return <p>Hello {username}!</p>;
};

export default UserProfile;
