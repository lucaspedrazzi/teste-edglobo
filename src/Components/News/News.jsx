import React from "react";
import "./News.css";

const populaTabela = (noticias) => {
  noticias.map(noticia => {
    return (
      <tr key={noticia.id}>
        <td>{noticia.titulo}</td>
        <td>{noticia.conteudo}</td>
        <td>{noticia.data_publicacao}</td>
      </tr>
    );
  });
};

// const populaTabela= () => {
//   return (
//     this.state.noticias.map((noticia, i) => {
//       const {id, titulo, conteudo, data_publicacao} = noticia;
//       return (
//         <tr key={id}>
//           <td>{titulo}</td>
//           <td>{conteudo}</td>
//           <td>{data_publicacao}</td>
//         </tr>
//       );
//     })
//   );
// }

const News = ({noticias}) => {
  return (
    <section className='container'>
    <table id="noticias" className="table table-hover table-striped">
      <thead>
        <th>Título</th>
        <th>Conteúdo</th>
        <th>Data de Publicação</th>
      </thead>
      <tbody>{populaTabela(noticias)}</tbody>
    </table>
    </section>
  );
};

export default News;
