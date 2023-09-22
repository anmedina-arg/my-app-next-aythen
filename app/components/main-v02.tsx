import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Body: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default Body;
