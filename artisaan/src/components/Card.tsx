import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={clsx('glass relative overflow-hidden rounded-[var(--radius-lg)] p-6', className)}
    {...props}
  />
);

export default Card;
