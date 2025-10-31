import { ReactNode } from 'react';

const GradientText = ({ children }: { children: ReactNode }) => (
  <span className="bg-brand-gradient bg-clip-text text-transparent">{children}</span>
);

export default GradientText;
