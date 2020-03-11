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
    this.add_suggestions_motivos = this.add_suggestions_motivos.bind(this);
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
      motivo: e.target.value
    });
  }

  onChangeSugestao(e) {
    this.setState({
      sugestao: e.target.value
    });
  }

  add_suggestion_preco(e) {

    let a = this.state.resposta.preco;
    a = e.target.className;
    console.log("resposta do cliente em relação ao preco: " + a);

  }

  add_suggestion_mix_produtos(e) {

    let a = this.state.resposta.mix_produtos;
    a = e.target.className;
    console.log("resposta do cliente em relção ao mix de produtos: " + a);

  }

  add_suggestion_atendimento(e) {
    let a = this.state.resposta.atendimento;
    a = e.target.className;
    console.log("resposta do cliente em relação ao atendimento: " + a);
  }

  add_suggestion_rapidez_entrega(e) {
    let a = this.state.resposta.rapidez_entrega;
    a = e.target.className;
    console.log("resposta do cliente em relação à relação da rapidez de entrega: " + a);
  }

  add_suggestion_ambiente_agradavel(e) {
    let a = this.state.resposta.ambiente_agradavel;
    a = e.target.className;
    console.log("resposta do cliente em relação ao ambiente: " + a);
  }

  add_suggestions_motivos(e) {
    let a = this.state.resposta.sugestao;
    a = e.target.className;
    console.log("resposta do cliente em relação ao(s) motivo(s): " + a);
  }

  add_suggestion_consultor_vendas(e) {
    let a = this.state.resposta.consultor_venda;
    a = e.target.className;
    console.log("respota do cleinte em relação ao consultor de vendas: " + a);
  }

  add_suggestion_equipe_balcao(e) {
    let a = this.state.resposta.equipe_balcao;
    a = e.target.className;
    console.log("resposta do cliente em relação a equipe do balcao: " + a);
  }

  add_suggestion_equipe_caixa(e) {
    let a = this.state.resposta.equipe_caixa;
    a = e.target.className;
    console.log("respota do cliente em relação a equipe do caixa: " + a);
  }

  add_suggestion_equipe_entrega(e) {
    let a = this.state.resposta.equipe_entrega;
    a = e.target.className;
    console.log("respota do cliente em relação a equipe de entrega: " + a);
  }

  add_suggestion_expectativa(e) {
    let a = this.state.resposta.expectativa;
    a = e.target.className;
    console.log("resposta do cliente em relação à expectativa: " + a);
  }

  add_suggestion_possibilidade_nova_compra(e) {
    let a = this.state.resposta.possibilidade_nova_compra;
    a = e.target.className;
    console.log("resposta do cliente em relação a nova possibilidade de compra: " + a);
  }

  add_suggestion_recomendar_conhecidos(e) {
    let a = this.state.resposta.recomendar_conhecidos;
    a = e.target.className;
    console.log("resposta do cliente em relação à recomendação: " + a);
  }

  onSubmit(e) {
    e.preventDefault();
    this.resposta.motivo = this.state.motivo;
    this.resposta.sugestao = this.state.sugestao;
    const obj_resposta = this.resposta;
    alert('obj: '+obj_resposta);
    console.log("Obj: "+obj_resposta);
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
              </li> <br /> <br />
              <li>
                <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
                <h4>Sugestão:</h4>
                <textarea cols="80" rows="6" value={this.state.sugestao} onChange={this.onChangeSugestao} /> <br />
                <input type="submit" value="enviar" />
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}
