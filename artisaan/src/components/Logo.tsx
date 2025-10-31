import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold">
      <motion.span
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg"
      >
        A
      </motion.span>
      <span className="text-lg tracking-tight">Artisaan</span>
    </Link>
  );
};

export default Logo;
