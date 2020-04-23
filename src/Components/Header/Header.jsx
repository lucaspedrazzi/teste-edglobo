import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className='header-container'>
      <h1>Desafio Editora Globo</h1>
      <p>CRUD de notícias, usando React, com os seguintes campos: Título, Conteúdo e Data de Publicação</p>
    </section>
  );
}

export default Header;