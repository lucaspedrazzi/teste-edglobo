import React, { Component, Fragment } from "react";
import News from "../Components/News/News";
import { noticias } from "../noticias";
import "./App.css";
import Header from "../Components/Header/Header";
import AddNovaNoticia from "../Components/AddNovaNoticia/AddNovaNoticia";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: noticias
    };
    this.submitForm = this.submitForm.bind(this);
  }
 
//   componentDidMount() {}

  submitForm = (e) => {
    alert('Um nome foi enviado: ' + this.state.value);
    e.preventDefault();
}

  setNewNoticia(newNoticia) {
    this.setState({ noticias: [...this.state.noticias, newNoticia] });
  }

  render() {
    return (
      <Fragment>
{/*         <Header /> */}
        <div className="container-fluid">
          <AddNovaNoticia setNewNoticia={this.setNewNoticia.bind(this)} />
          <News noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;