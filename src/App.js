import React, { Component } from 'react';
import './App.css';
import feliz from './assets/icons/icons8-feliz-50.png';
import triste from './assets/icons/icons8-triste-50.png';
import insatisfeito from './assets/icons/icons8-insatisfeito-50.png';
import neutro from './assets/icons/icons8-neutro-50.png';
import sorridente from './assets/icons/icons8-sorridente-50.png';
// import info_store_logo from './assets/img/info_store_logo.png'

export default class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      motivo: 'Insira seu(s) outro(s) motivo(s)...',
      sugestao: 'Insira sua(s) sugestão(ões)...'
    };

    
    this.onChangeMotivo = this.onChangeMotivo.bind(this);
    this.onChangeSugestao = this.onChangeSugestao.bind(this);
    this.addArray = this.addArray.bind(this);
  }
  
  addArray() {
    var answer = {
      preco: '',
      mix_produtos: '',
      atendimento: '',
      rapidez_entrega: '',
      ambiente_agradavel: '',
      motivos: '',
      consultor_venda: '',
      equipe_balcao: '',
      equipe_caixa : '',
      equipe_entrega: '',
      expectativa: '',
      possibilidade_nova_compra: '',
      recomendar_conhecidos: '',
      sugestao: '',

    }
    answer.preco = 'triste';
    console.log("Escolha: "+answer.preco);
  }

  onChangeMotivo(e) {
    this.setState({
      motivo: e.target.value
    });
  }

  onChangeSugestao(e) {
    this.setState({
      sugestao: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header-content">
          <h1>Sugestões Info Store</h1>
          {/* <img src={info_store_logo} alt="info store logo" /> */}
          <h2>Deixe-nos sua opnião sobre a sua experiência com a Info Store</h2>
        </div>
        <div className="content">
          <ol>
            <li>
              <h3>O que motiva você a comprar com a Info Store?</h3>
              <h4>Preço</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" onClick={this.addArray} />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Mix de Produtos</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Atendimento</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Rapidez na Entrega</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Ambiente Agradável</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div> <br />
              <h4>Outros? Quais?</h4>
              <textarea style={{ fontFamily: 'Segoe UI' }} cols="80" rows="6" value={this.state.motivo} onChange={this.onChangeMotivo} />
            </li> <br /> <br />
            <li>
              <h3>O quão satisfeito você ficou com nosso atendimento?</h3>
              <h4>Consultores de Vendas</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Equipe Balcão</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Equipe Caixa</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
              <h4>Equipe de Entrega</h4>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
            </li> <br /> <br />
            <li>
              <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
            </li> <br /> <br />
            <li>
              <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
            </li> <br /> <br />
            <li>
              <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
              <div className="emojis-box">
                <img src={triste} alt="emoji triste" className="pessimo" />
                <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" />
                <img src={neutro} alt="emoji neutro" className="neutro" />
                <img src={feliz} alt="emoji feliz" className="bom" />
                <img src={sorridente} alt="emoji sorridente" className="excelente" />
              </div>
            </li> <br /> <br />
            <li>
              <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
              <h4>Sugestão:</h4>
              <textarea cols="80" rows="6" value={this.state.sugestao} onChange={this.onChangeSugestao} />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
