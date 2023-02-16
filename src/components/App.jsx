import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Header = lazy(() => import('./Header'));
const Movies = lazy(() => import('../pages/Movies'));
const SingleMovie = lazy(() => import('../pages/SingleMovie'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));


export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/react-homework-template' element={<Navigate to={'/'} />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<SingleMovie />}>
            <Route path='review' element={<Review />} />
            <Route path='cast' element={<Cast />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
