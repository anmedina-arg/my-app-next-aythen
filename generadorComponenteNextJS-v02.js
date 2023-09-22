const { Children } = require('react');
const page = require('./mockPage');

const andres = {
  nombre: 'andres',
  apellido: 'medina',
};

// Esta funcion no está terminada, se dejó pendiente en función de tareas pendientes, necesarias para terminar esta tarea
// La idea de esta función es recibir como input el proyecto (a este momento: el input llega en formato de objeto)

function generarComponenteNextJS(input) {
  const { data } = input;

  const my_data = {
    body: data.body,
    children: [...data.body.children],
  };

  let componentName =
    data.body.name.charAt(0).toUpperCase() + data.body.name.slice(1);

  let props = {
    name: 'props',
    contain: data.body.children,
  };

  const template = `import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const ${componentName}: React.FC<MainProps> = ({children}) => {


  return (
    <div className="flex justify-center items-center h-screen">
      {children}
    </div>
  );
}

export default ${componentName};
  `;

  return template;

  // return componentName;
}

console.log(generarComponenteNextJS(page));
// console.log(generarComponenteNextJS(andres));
