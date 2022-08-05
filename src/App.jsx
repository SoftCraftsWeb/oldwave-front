import { RenderRoutes, ROUTES } from 'domain/helpers/routes';

function App() {
  return (
    <div className='App'>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
