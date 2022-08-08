import { RenderRoutes, ROUTES } from 'domain/helpers/routes';
import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenShoppingCar, setIsOpenShoppingCar] = useState(false);
  return (
    <div className='App'>
      <RenderRoutes
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isOpenShoppingCar={isOpenShoppingCar}
        setIsOpenShoppingCar={setIsOpenShoppingCar}
        routes={ROUTES}
      />
    </div>
  );
}

export default App;
