import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-9xl font-semibold text-primary/20"
      >
        404
      </motion.span>
      <h1 className="text-3xl font-semibold text-text">Page not found</h1>
      <p className="max-w-md text-text/70">
        The page you are looking for might have been moved or no longer exists. Let us guide you back home.
      </p>
      <Button onClick={() => navigate('/')}>Return home</Button>
    </div>
  );
};

export default NotFound;
