import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import service from 'domain/services';
import HomePage from 'presentation/pages/HomePage';

export default function CallbackPage({ setIsLoading }) {
  const component = useLocation().search;
  const { driver } = useParams();
  let error = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      const response = await service.auth.callback(
        setIsLoading,
        driver,
        component
      );
      if (response.status === 'OK') {
        sessionStorage.setItem('logged_user', JSON.stringify(response.data));
        window.location.reload();
      } else {
        error = true;
      }
    };

    fetchAuth().catch(() => {
      error = true;
    });
  }, []);

  return <HomePage setIsloading={setIsLoading} error={error} />;
}
