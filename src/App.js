import React, { lazy, Suspense } from 'react';
import Spinner from './Helper/Spinner/Spinner';
const Home = lazy(() => import('./Pages/Home'));

const App = () => {

   return (
      <Suspense fallback={<Spinner />}>
         <Home />
      </Suspense>
   );

}

export default App;
