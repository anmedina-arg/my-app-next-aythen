import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default MainContainer;
