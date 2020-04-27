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
      noticias: noticias,
      editingNoticia: {},
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
    newNoticia["data_publicacao"] = document.getElementById(
      "dataPublicacao"
    ).value;
    newNoticia.id = noticias[noticias.length - 1].id + 1;
    this.setNewNoticia(newNoticia);

    document.getElementById("myForm").reset();
  };

  setNewNoticia(newNoticia) {
    this.setState({ noticias: [...this.state.noticias, newNoticia] });
  }

  /* Editar */
  editForm(id) {
    const { noticias } = this.state;
    console.log("edited", id);

    const editingNoticia = noticias.filter((noticia) => noticia.id === id)[0];
    this.setState({ editingNoticia });
  }

  submitEditForm = (e) => {
    e.preventDefault();
    const { noticias, editingNoticia } = this.state;

    const newNoticia = {};

    newNoticia.titulo = document.getElementById("novoTituloMateria").value;
    newNoticia.conteudo = document.getElementById("novoConteudoMateria").value;
    newNoticia["data_publicacao"] = document.getElementById(
      "novaDataPublicacao"
    ).value;
    newNoticia.id = editingNoticia.id;

    const updatedNoticias = noticias.map((noticia) => {
      if (noticia.id === newNoticia.id) {
        return newNoticia;
      } else {
        return noticia;
      }
    });

    this.setState({ noticias: updatedNoticias });

    document.getElementById("myEditForm").reset();
  };

  clearEditForm() {
    document.getElementById("myForm").reset();
  }

  setEditedNoticia(editedNoticia) {
    this.setState({ noticias: [...this.state.noticias, editedNoticia] });
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
            editForm={this.editForm.bind(this)}
            noticias={this.state.noticias}
            onDelete={this.deleteNoticia.bind(this)}
          />
        </div>
        <EditNews
          initialData={this.state.editingNoticia}
          editForm={this.editForm.bind(this)}
          submitEditForm={this.submitEditForm.bind(this)}
        />
      </Fragment>
    );
  }
}

export default App;