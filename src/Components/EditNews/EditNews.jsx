import React, { useState, useEffect } from "react";
import './EditNew.css';

const EditNews = ({ submitEditForm, editForm, initialData, clearEditForm }) => {
  const [titulo, setTitulo] = useState(initialData.titulo);
  const [data, setData] = useState(initialData["data_publicacao"]);
  const [conteudo, setConteudo] = useState(initialData.conteudo);
  
  useEffect(() => {
    setTitulo(initialData.titulo);
  }, [initialData]);

  useEffect(() => {
    setData(initialData["data_publicacao"]);
  }, [initialData]);

  useEffect(() => {
    setConteudo(initialData.conteudo);
  }, [initialData]);


  return (
    <section className="edit-container">
      <h3>Editar Notícias</h3>
      <form id="myEditForm" onSubmit={editForm}>
        <div className="form-row">
          <div className="col-md-8">
            <label htmlFor="novoTituloMateria">Título da Matéria</label>
            <input
              type="text"
              className="form-control"
              id="novoTituloMateria"
              required
              placeholder="Digite o título da sua matéria aqui"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="novaDataPublicacao">Data de publicação</label>
            <input
              type="date"
              class="form-control"
              id="novaDataPublicacao"
              required
              placeholder="dd/mm/yyyy"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="col-md-12 padding-top-15">
            <label for="novoConteudoMateria">Conteúdo da matéria</label>
            <textarea
              className="form-control"
              id="novoConteudoMateria"
              placeholder="Digite o conteúdo da matéria aqui."
              required
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button class="btn btn-primary" type="submit" onClick={submitEditForm}>Salvar edição</button>
      </form>
    </section>
  );
};

export default EditNews;