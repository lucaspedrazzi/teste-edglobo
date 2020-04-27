import React from "react";

const EditNews = ({editForm}) => {
  return(
<section className="form-container">
      <form id="myForm" onSubmit={editForm}>
        <div className="form-row">
          <div className="col-md-8">
            <label htmlFor="novoTituloMateria">Título da Matéria</label>
            <input
              type="text"
              className="form-control"
              id="novoTituloMateria"
              required
              placeholder="Digite o título da sua matéria aqui"
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
            />
          </div>
          <div className="col-md-12 padding-top-15">
            <label for="novoConteudoMateria">Conteúdo da matéria</label>
            <textarea
              className="form-control"
              id="novoConteudoMateria"
              placeholder="Digite o conteúdo da matéria aqui."
              required
            ></textarea>
          </div>
        </div>
        <button class="btn btn-primary" type="submit" onClick={editForm}>
          Salvar edição
        </button>
      </form>
      </section>
  );
} 

export default EditNews;