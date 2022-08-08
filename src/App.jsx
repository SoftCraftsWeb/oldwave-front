import { RenderRoutes, ROUTES } from 'domain/helpers/routes';
import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='App'>
      <RenderRoutes
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        routes={ROUTES}
      />
    </div>
  );
}

export default App;
