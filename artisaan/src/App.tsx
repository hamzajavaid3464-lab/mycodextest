import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

const App = () => {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading…</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
