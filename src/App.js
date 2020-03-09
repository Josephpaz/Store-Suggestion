import React, { Component } from 'react';
import './App.css';
import feliz from './assets/icons/icons8-feliz-50.png';
import triste from './assets/icons/icons8-triste-50.png';
import confuso from './assets/icons/icons8-confuso-50.png';
import neutro from './assets/icons/icons8-neutro-50.png';
import sorridente from './assets/icons/icons8-sorridente-50.png';
// import info_store_logo from './assets/img/info_store_logo.png'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Insira seu(s) outro(s) motivo(s)...'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="header-content">
          <h1>Sugestões Info Store</h1>
          {/* <img src={info_store_logo} alt="info store logo" /> */}
          <h2>Deixe-nos sua opnião sobre a sua experiência com a Info Store</h2>
          <div>
            <ol>
              <li>
                <h3>O que motiva você a comprar com a Info Store?</h3>
                <h4>Preço</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Mix de Produtos</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Atendimento</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Rapidez na Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Ambiente Agradável</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div> <br />
                <h4>Outros? Quais?</h4>
                <textarea style={{ fontFamily: 'Segoe UI' }} cols="80" rows="6" value={this.state.value} onChange={this.handleChange} />
              </li> <br /> <br />
              <li>
                <h3>O quão satisfeito você ficou com nosso atendimento?</h3>
                <h4>Consultores de Vendas</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Equipe Balcão</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Equipe Caixa</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
                <h4>Equipe de Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
              </li> <br /> <br />
              <li>
                <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
              </li> <br /> <br />
              <li>
                <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
              </li> <br /> <br />
              <li>
                <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" />
                  <img src={confuso} alt="emoji confuso" />
                  <img src={neutro} alt="emoji neutro" />
                  <img src={feliz} alt="emoji feliz" />
                  <img src={sorridente} alt="emoji sorridente" />
                </div>
              </li> <br /> <br />
              <li>
                <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
                <h4>Sugestão:</h4>
                <textarea cols="80" rows="6" value={this.state.value} onChange={this.handleChange} />
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
