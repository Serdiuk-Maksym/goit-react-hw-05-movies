import React from 'react';

const BackLink = () => {
  const handleGoBack = () => {
    window.history.length > 1
      ? window.history.back()
      : window.location.assign('/');
  };

  return <button onClick={handleGoBack}>Go Back</button>;
};

export default BackLink;
