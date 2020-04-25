import React from "react";
import "./News.css";

const populaTabela = (noticias) => {
  return noticias.map((noticia) => {
    return (
      <tr key={noticia.id}>
        <td>{noticia.titulo}</td>
        <td>{noticia.conteudo}</td>
        <td>{noticia.data_publicacao}</td>
        <td>
          <i className='btn-link margin-right-10'>Editar</i>
          <i className='btn-link' onClick={this.props.onDelete}>Deletar</i>
        </td>
      </tr>
    );
  });
};

const News = ({ noticias }) => {
  return (
    <section>
      <table id="noticias" className="table table-striped table-borderless">
        <thead>
          <th>Título</th>
          <th>Conteúdo</th>
          <th>Data de Publicação</th>
          <th>Ações</th>
        </thead>
        <tbody>{populaTabela(noticias)}</tbody>
      </table>
    </section>
  );
};

export default News;