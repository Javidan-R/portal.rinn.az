import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Suspense } from 'react';
import Loader from './components/atoms/Loading';


export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
