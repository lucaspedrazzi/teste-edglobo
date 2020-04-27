import React, { Component, Fragment } from "react";
import News from "../Components/News/News";
import { noticias } from "../noticias";
import "./App.css";
import Header from "../Components/Header/Header";
import AddNovaNoticia from "../Components/AddNovaNoticia/AddNovaNoticia";
import EditNews from "../Components/EditNews/EditNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: noticias
    };
    this.submitForm = this.submitForm.bind(this);
  }
/* Nova Noticia */
  submitForm = (e) => {
    e.preventDefault();
    const { noticias } = this.state;

    const newNoticia = {};

    newNoticia.titulo = document.getElementById("tituloMateria").value;
    newNoticia.conteudo = document.getElementById("conteudoMateria").value;
    newNoticia["data_publicacao"] = document.getElementById("dataPublicacao").value;
    newNoticia.id = noticias[noticias.length - 1].id + 1;
    this.setNewNoticia(newNoticia);

    document.getElementById("myForm").reset();
  };


  setNewNoticia(newNoticia) {
    this.setState({ noticias: [...this.state.noticias, newNoticia] });
  }

/* Editar */
editForm = (e) => {
  e.preventDefault();
  const { noticias } = this.state;
  const editedNoticia = {};

  editedNoticia.titulo = document.getElementById("novoTituloMateria").value;
  editedNoticia.conteudo = document.getElementById("novoConteudoMateria").value;
  editedNoticia["data_publicacao"] = document.getElementById("novaDataPublicacao").value;

  const noticias = noticias.filter((noticia) => )
}

setEditedNoticia(editedNoticia) {
  this.setState({ noticias: [...this.state.noticias, editedNoticia]});
}


/* Deletar */
  deleteNoticia(id) {
    const { noticias } = this.state;

    const delNoticias = noticias.filter((noticia) => {
      return noticia.id !== id;
    });

    this.setState({ noticias: delNoticias });
  }
 
  render() {
    return (
      <Fragment>
        <Header />

        <div className="container-fluid">

          <AddNovaNoticia submitForm={this.submitForm.bind(this)} />

          <News
            noticias={this.state.noticias}
            onDelete={this.deleteNoticia.bind(this)}
          />
        </div> 
        <EditNews  editForm={this.editForm.bind(this)}/>
      </Fragment>
    );
  }
}

export default App;