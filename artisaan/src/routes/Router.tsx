import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="apps" element={<Apps />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default router;
