import React, { Component } from 'react';
import './AddNovaNoticia.css';

const initialState = {
    noticias: { titulo: '', conteudo: '', data_publicacao: ''}
}
class AddNovaNoticia extends Component {
  
  
  getFormData(e) {
    this.state.initialState();
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <section className='form-container'>
        <form onSubmit={this.getFormData}>
          <div className="form-row">
            <div className="col-md-8">
              <label htmlFor="tituloMateria">Título da Matéria</label>
              <input type="text" className="form-control" id="tituloMateria" required  placeholder="Digite o título da sua matéria aqui"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="dataPublicacao">Data de publicação</label>
              <input type="date" class="form-control" id="dataPublicacao" required  placeholder="dd/mm/yyyy"/>
            </div>
            <div className="col-md-12 padding-top-15">
              <label for="conteudoMateria">Conteúdo da matéria</label>
              <textarea className="form-control" id="conteudoMateria" placeholder="Digite o conteúdo da matéria aqui." required></textarea>
            </div>
          </div>
          <button class="btn btn-primary" type="submit" onClick="{this.setNewNoticia}">Adicionar matéria</button>
        </form>
      </section>
    );
  }
}

export default AddNovaNoticia;