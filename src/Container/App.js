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
      noticias: noticias,
    };
  }
 
//   componentDidMount() {}
  // getFormData(e) {
  //   e.preventDefault();
  //   console.log(e);
  // }

  setNewNoticia(newNoticia) {
    this.setState({ noticias: [...this.state.noticias, newNoticia] });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <AddNovaNoticia setNewNoticia={this.setNewNoticia.bind(this)} />
          <News noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;