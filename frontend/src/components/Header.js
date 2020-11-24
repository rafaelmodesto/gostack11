import React, { Children } from 'react';

/*Utilizando prop "children" que é uma prop que já vem por padrão nos componentes,
* usamos para trazer o conteúdo do nosso componente.
*/
export default function Header({title, children}/*ou props*/) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}