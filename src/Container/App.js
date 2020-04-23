import React, {Component, Fragment} from 'react';
import News from '../Components/News/News';
import './App.css';
import Header from '../Components/Header/Header';
import AddNovaNoticia from '../Components/AddNovaNoticia/AddNovaNoticia';

export const noticias = [
  {
      id: 1,
      titulo: "Madrinha aparece no casamento da irmã fantasiada de tiranossauro nos EUA.",
      conteudo: "Uma madrinha apareceu no casamento de sua irmã fantasiada de dinossauro, no estado americano de Nebraska, e uma foto dela no traje viralizou.",
      data_publicacao: "10/04/2020"
  },
  {
      id: 2,
      titulo: "Homem procurado não gosta de foto divulgada pela polícia e sugere outra",
      conteudo: "Um homem procurado no Reino Unido ficou insatisfeito com a foto dele publicada pela polícia e sugeriu que os policiais trocassem seu retrato por um em que ele acreditava estar com melhor aparência.",
      data_publicacao: "14/03/2020"
  },
  {
      id: 3,
      titulo: "Guaxinim bêbado esquece filhos em rodízio de pizza",
      conteudo: "Entre lambidas e outras de garrafas que ficaram pelo chão, o animal tropeça, cai e segue cambaleando para casa. Vamos torcer para que ele não tenha escalado nenhuma árvore nessas condições.",
      data_publicacao: "11/03/2020"
  },
  {
      id: 4,
      titulo: "Macaco é visto soltando pipa durante quarentena na Índia",
      conteudo: "A cena está sendo comparada nas redes sociais a Planeta dos Macacos. E não é para menos. Um macaco foi visto no telhado de uma casa na Índia simplesmente soltando pipa durante a quarentena por causa do coronavírus.",
      data_publicacao: "02/04/2020"
  },
  {
      id: 5,
      titulo: "Vizinho é flagrado tentando escapar da quarentena disfarçado de arbusto.",
      conteudo: "Um homem decidiu se disfarçar de arbusto para “fugir” da quarentena em Stevenage, no Reino Unido, e a cena hilária foi flagrada por um vizinho e muito compartilhada. Nas redes sociais, as pessoas comentam que o bom-humor do homem as salvaram de “mais um dia de tédio” em momento de isolamento por conta da pandemia do novo coronavírus. As informações são do The Sun.",
      data_publicacao: "11/04/2020"
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noticias: []
    };
  }

  componentDidMount() {
    fetch('./noticias.js')
      .then(response => {
        return response.json();
      })
      .then(noticia => {
        this.setState({
          noticias: noticia
        });
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container" >
          <AddNovaNoticia />
          <News noticias={noticias} />
        </div> 
      </Fragment>
    );
  }
}

export default App;