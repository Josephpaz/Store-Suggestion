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
      motivo: '',
      sugestao: '',
      resposta: {
        preco: '',
        mix_produtos: '',
        atendimento: '',
        rapidez_entrega: '',
        ambiente_agradavel: '',
        motivo: '',
        consultor_venda: '',
        equipe_balcao: '',
        equipe_caixa: '',
        equipe_entrega: '',
        expectativa: '',
        possibilidade_nova_compra: '',
        recomendar_conhecidos: '',
        sugestao: '',
      }
    };


    this.onChangeMotivo = this.onChangeMotivo.bind(this);
    this.onChangeSugestao = this.onChangeSugestao.bind(this);
    this.add_suggestion_preco = this.add_suggestion_preco.bind(this);
    this.add_suggestion_mix_produtos = this.add_suggestion_mix_produtos.bind(this);
    this.add_suggestion_atendimento = this.add_suggestion_atendimento.bind(this);
    this.add_suggestion_consultor_vendas = this.add_suggestion_consultor_vendas.bind(this);
    this.add_suggestion_rapidez_entrega = this.add_suggestion_rapidez_entrega.bind(this);
    this.add_suggestion_ambiente_agradavel = this.add_suggestion_ambiente_agradavel.bind(this);
    this.add_suggestion_consultor_vendas = this.add_suggestion_consultor_vendas.bind(this);
    this.add_suggestion_equipe_balcao = this.add_suggestion_equipe_balcao.bind(this);
    this.add_suggestion_equipe_caixa = this.add_suggestion_equipe_caixa.bind(this);
    this.add_suggestion_equipe_entrega = this.add_suggestion_equipe_entrega.bind(this);
    this.add_suggestion_expectativa = this.add_suggestion_expectativa.bind(this);
    this.add_suggestion_possibilidade_nova_compra = this.add_suggestion_possibilidade_nova_compra.bind(this);
    this.add_suggestion_recomendar_conhecidos = this.add_suggestion_recomendar_conhecidos.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMotivo(e) {
    this.setState({
      motivo: e.target.value,
    });

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.motivo = this.state.motivo;
      return { resposta }
    });

    console.log("resposta do cliente em relação ao(s) motivo(s): " + JSON.stringify(this.state.resposta.motivo));
  }

  onChangeSugestao(e) {
    this.setState({
      sugestao: e.target.value,
    });

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.motivo = this.state.sugestao;
      return { resposta }
    });

    console.log("resposta do cliente em relação a(s) sugestao(oes): " + JSON.stringify(this.state.resposta.sugestao));
  }

  add_suggestion_preco(e) {
    let img_className = e.target.className;

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.preco = img_className;
      return { resposta }
    });

    console.log("resposta do cliente em relação ao preco: " + JSON.stringify(this.state.resposta.preco) + " a: " + img_className);
  }

  add_suggestion_mix_produtos(e) {

    let img_className = e.target.className;

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.mix_produtos = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao mix de produtos: " + JSON.stringify(this.state.resposta.mix_produtos));
  }

  add_suggestion_atendimento(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.atendimento = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao atendimento: " + JSON.stringify(this.state.resposta.atendimento));
  }

  add_suggestion_rapidez_entrega(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.rapidez_entrega = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a rapidez na entrega: " + JSON.stringify(this.state.resposta.rapidez_entrega));
  }

  add_suggestion_ambiente_agradavel(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.ambiente_agradavel = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao ambiente: " + JSON.stringify(this.state.resposta.ambiente_agradavel));
  }

  add_suggestion_consultor_vendas(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.consultor_venda = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao consultor de vendas" + JSON.stringify(this.state.resposta.consultor_venda));
  }

  add_suggestion_equipe_balcao(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.equipe_balcao = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a equipe do balcao: " + JSON.stringify(this.state.resposta.equipe_balcao));
  }

  add_suggestion_equipe_caixa(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.equipe_caixa = img_className;
    });
    console.log("resposta do cliente em relação a equipe do caixa: " + JSON.stringify(this.state.resposta.equipe_caixa));
  }

  add_suggestion_equipe_entrega(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.equipe_entrega = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a equipe de entrega: " + JSON.stringify(this.state.resposta.equipe_entrega));
  }

  add_suggestion_expectativa(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.expectativa = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação à expectativa: " + JSON.stringify(this.state.resposta.expectativa));
  }

  add_suggestion_possibilidade_nova_compra(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.possibilidade_nova_compra = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a nova possibilidade de compra: " + img_className);
  }

  add_suggestion_recomendar_conhecidos(e) {
    let img_className = e.target.className;
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.recomendar_conhecidos = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação da recomendação: " + JSON.stringify(this.state.resposta.recomendar_conhecidos));
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      resposta: {
        motivo: 'this.state.motivo',
        sugestao: this.state.sugestao
      }
    })
    alert('obj: ' + JSON.stringify(this.resposta.motivo));
    console.log("Obj: " + JSON.stringify(this.resposta.sugestao));
  }
  render() {
    return (
      <div className="App">
        <div className="header-content">
          <h1>PESQUISA DE SATISFAÇÃO DO CLIENTE</h1>
          {/* <img src={info_store_logo} alt="info store logo" /> */}
          <h2>Compartilhe conosco sua opinião e experiência na Info Store</h2>
        </div>

        <div className="content">
          <form onSubmit={this.onSubmit}>
            <ol>
              <li>
                <h3>O que motiva você a comprar com a Info Store?</h3>
                <h4>Preço</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_preco} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_preco} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_preco} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_preco} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_preco} />
                </div>
                <h4>Mix de Produtos</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_mix_produtos} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_mix_produtos} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_mix_produtos} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_mix_produtos} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_mix_produtos} />
                </div>
                <h4>Atendimento</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_atendimento} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_atendimento} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_atendimento} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_atendimento} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_atendimento} />
                </div>
                <h4>Rapidez na Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_rapidez_entrega} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_rapidez_entrega} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_rapidez_entrega} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_rapidez_entrega} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_rapidez_entrega} />
                </div>
                <h4>Ambiente Agradável</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_ambiente_agradavel} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_ambiente_agradavel} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_ambiente_agradavel} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_ambiente_agradavel} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_ambiente_agradavel} />
                </div> <br />
                <h4>Outros? Quais?</h4>
                <textarea style={{ fontFamily: 'Segoe UI' }} cols="80" rows="6" value={this.state.motivo} onChange={this.onChangeMotivo} />
              </li> <br /> <br />
              <li>
                <h3>O quão satisfeito você ficou com nosso atendimento?</h3>
                <h4>Consultores de Vendas</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_consultor_vendas} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_consultor_vendas} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_consultor_vendas} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_consultor_vendas} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_consultor_vendas} />
                </div>
                <h4>Equipe Balcão</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_equipe_balcao} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_equipe_balcao} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_equipe_balcao} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_equipe_balcao} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_equipe_balcao} />
                </div>
                <h4>Equipe Caixa</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_equipe_caixa} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_equipe_caixa} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_equipe_caixa} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_equipe_caixa} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_equipe_caixa} />
                </div>
                <h4>Equipe de Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_equipe_entrega} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_equipe_entrega} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_equipe_entrega} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_equipe_entrega} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_equipe_entrega} />
                </div>
              </li> <br /> <br />
              <li>
                <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_expectativa} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_expectativa} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_expectativa} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_expectativa} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_expectativa} />
                </div>
              </li> <br /> <br />
              <li>
                <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_possibilidade_nova_compra} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_possibilidade_nova_compra} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_possibilidade_nova_compra} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_possibilidade_nova_compra} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_possibilidade_nova_compra} />
                </div>
              </li> <br /> <br />
              <li>
                <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_recomendar_conhecidos} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_recomendar_conhecidos} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_recomendar_conhecidos} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_recomendar_conhecidos} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_recomendar_conhecidos} />
                </div>
              </li> <br />
              <li>
                <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
                <h4>Sugestão:</h4>
                <textarea style={{ fontFamily: 'Segoe UI' }} cols="80" rows="6" value={this.state.sugestao} onChange={this.onChangeSugestao} /> <br />
                <input type="submit" value="enviar" />
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}