import React, { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};
export const Main: React.FC<MainProps> = ({ children }) => {
  return <body>{children}</body>;
};
