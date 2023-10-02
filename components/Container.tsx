import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full max-w-[1300px] mx-auto ${className} px-4 md:px-6 lg:px-8 `}
    >
      {children}
    </div>
  );
};

export default Container;
