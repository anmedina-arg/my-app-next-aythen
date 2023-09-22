// const page = require('./mockPage');

function generarComponenteNextJS(nombreComponente, contenido) {
  // Plantilla del componente Next.js
  const template = `import React, { ReactNode } from 'react';

interface MainProps {
  ${contenido}: ReactNode;
}

const ${nombreComponente}: React.FC<MainProps> = ({${contenido}}) => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      {${contenido}}
    </div>
  );
}

export default ${nombreComponente};
  `;

  return template;
}

console.log(generarComponenteNextJS('MainContainer', 'children'));
