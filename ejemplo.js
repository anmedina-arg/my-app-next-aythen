function generarComponenteNextJS(nombreComponente, contenido) {
  // Plantilla del componente Next.js
  const template = `
import React { ReactNode } from 'react';

const ${nombreComponente}:  = ({${contenido}}) => {
  
  return (
    <div>
      {${contenido}}
    </div>
  );
}

export default ${nombreComponente};
  `;

  return template;
}

console.log(generarComponenteNextJS('Main', 'children'));
