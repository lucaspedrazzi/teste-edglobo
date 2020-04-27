import React from "react";
import "./News.css";

const populaTabela = (noticias, onDelete, editForm) => {
  return noticias.map((noticia) => {
    return (
      <tr key={noticia.id}>
        <td>{noticia.titulo}</td>
        <td>{noticia.conteudo}</td>
        <td>{noticia.data_publicacao}</td>
        <td>
          <i id="edit" className="btn-link margin-right-10" onClick={() => editForm(noticia.id)}>Editar</i>
          <i className="btn-link" onClick={() => onDelete(noticia.id)}>Deletar</i>
        </td>
      </tr>
    );
  });
};

const News = ({ onDelete, noticias, editForm }) => {
  return (
    <section>
      <table id="noticias" className="table table-striped table-borderless">
        <thead>
          <th>Título</th>
          <th>Conteúdo</th>
          <th>Data de Publicação</th>
          <th>Ações</th>
        </thead>
        <tbody>{populaTabela(noticias, onDelete, editForm)}</tbody>
      </table>
    </section>
  );
};

export default News;