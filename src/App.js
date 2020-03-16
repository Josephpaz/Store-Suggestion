import React, { Component } from 'react';
import './App.css';
import feliz from './assets/icons/icons8-feliz-50.png';
import triste from './assets/icons/icons8-triste-50.png';
import insatisfeito from './assets/icons/icons8-insatisfeito-50.png';
import neutro from './assets/icons/icons8-neutro-50.png';
import sorridente from './assets/icons/icons8-sorridente-50.png';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      motivo: '',
      sugestao: '',
      resposta: {
        freight_id: null,
        price: '',
        product_mix: '',
        customer_service: '',
        delivery_speed: '',
        pleasant_environment: '',
        purchase_motivation: '',
        sales_consultants: '',
        service_team: '',
        cash_team: '',
        delivery_team: '',
        customer_expectations: '',
        new_purchases: '',
        recommendation: '',
        complementary_suggestion: '',
      }
    };


    this.onChangeMotivo = this.onChangeMotivo.bind(this);
    this.onChangeSuggestion = this.onChangeSuggestion.bind(this);
    this.add_suggestion_price = this.add_suggestion_price.bind(this);
    this.add_suggestion_product_mix = this.add_suggestion_product_mix.bind(this);
    this.add_suggestion_customer_service = this.add_suggestion_customer_service.bind(this);
    this.add_suggestion_sales_consultants = this.add_suggestion_sales_consultants.bind(this);
    this.add_suggestion_delivery_speed = this.add_suggestion_delivery_speed.bind(this);
    this.add_suggestion_pleasant_motivation = this.add_suggestion_pleasant_motivation.bind(this);
    this.add_suggestion_sales_consultants = this.add_suggestion_sales_consultants.bind(this);
    this.add_suggestion_service_team = this.add_suggestion_service_team.bind(this);
    this.add_suggestion_cash_team = this.add_suggestion_cash_team.bind(this);
    this.add_suggestion_delivery_team = this.add_suggestion_delivery_team.bind(this);
    this.add_suggestion_customer_expectations = this.add_suggestion_customer_expectations.bind(this);
    this.add_suggestion_new_purchases = this.add_suggestion_new_purchases.bind(this);
    this.add_suggestion_recommendation = this.add_suggestion_recommendation.bind(this);
    this.parserToNumber = this.parserToNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMotivo(e) {
    this.setState({
      motivo: e.target.value,
    });

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.purchase_motivation = this.state.motivo;
      return { resposta }
    });

    console.log("resposta do cliente em relação ao(s) purchase_motivation(s): " + JSON.stringify(this.state.resposta.purchase_motivation));
  }

  onChangeSuggestion(e) {
    this.setState({
      sugestao: e.target.value,
    });

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.complementary_suggestion = this.state.sugestao;
      return { resposta }
    });

    console.log("resposta do cliente em relação a(s) complementary_suggestion(oes): " + JSON.stringify(this.state.resposta.complementary_suggestion));
  }

  add_suggestion_price(e) {
    
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.price = img_className;
      return { resposta }
    });

    console.log("resposta do cliente em relação ao price: " + JSON.stringify(this.state.resposta.price));
  }

  add_suggestion_product_mix(e) {

    let img_className = this.parserToNumber(e.target.className);

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.product_mix = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao mix de produtos: " + JSON.stringify(this.state.resposta.product_mix));
  }

  add_suggestion_customer_service(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.customer_service = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao customer_service: " + JSON.stringify(this.state.resposta.customer_service));
  }

  add_suggestion_delivery_speed(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.delivery_speed = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a rapidez na entrega: " + JSON.stringify(this.state.resposta.delivery_speed));
  }

  add_suggestion_pleasant_motivation(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.pleasant_environment = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao ambiente: " + JSON.stringify(this.state.resposta.pleasant_environment));
  }

  add_suggestion_sales_consultants(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.sales_consultants = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação ao consultor de vendas" + JSON.stringify(this.state.resposta.sales_consultants));
  }

  add_suggestion_service_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.service_team = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a equipe do balcao: " + JSON.stringify(this.state.resposta.service_team));
  }

  add_suggestion_cash_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.cash_team = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a equipe do caixa: " + JSON.stringify(this.state.resposta.cash_team));
  }

  add_suggestion_delivery_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.delivery_team = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a equipe de entrega: " + JSON.stringify(this.state.resposta.delivery_team));
  }

  add_suggestion_customer_expectations(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.customer_expectations = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação à customer_expectations: " + JSON.stringify(this.state.resposta.customer_expectations));
  }

  add_suggestion_new_purchases(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.new_purchases = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação a nova possibilidade de compra: " + this.state.resposta.new_purchases);
  }

  add_suggestion_recommendation(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.recommendation = img_className;
      return { resposta }
    });
    console.log("resposta do cliente em relação da recomendação: " + JSON.stringify(this.state.resposta.recommendation));
  }
  parserToNumber(e) {
    if (e === 'pessimo') return 1;
    if (e === 'insatisfeito') return 2;
    if (e === 'neutro') return 3;
    if (e === 'bom') return 4;
    if (e === 'excelente') return 5;

  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.motivo === '') {
      this.setState(prevState => {
        let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
        resposta.purchase_motivation = null;
        return { resposta }
      });
    }
    if (this.state.sugestao === '') {
      this.setState(prevState => {
        let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
        resposta.complementary_suggestion = null
        return { resposta }
      });
    }

    axios.post('http://logistica.navegam.com.br:3000/api/v4/frete/feedback', this.state.resposta).then(res => console.log(res.data));
    // window.location.reload();
    console.log("Obj: " + JSON.stringify(this.state.resposta));
  }
  render() {
    return (
      <div className="App">
        <div className="header-content">
          <h1>PESQUISA DE SATISFAÇÃO DO CLIENTE</h1>
          <h2>Compartilhe conosco sua opinião e experiência na Info Store</h2>
        </div>
        <div className="content">
          <form onSubmit={this.onSubmit}>
            <ol>
              <li>
                <h3 style={{ marginTop: '14px' }}>O que motiva você a comprar com a Info Store?</h3>
                <h4>Preço</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_price} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_price} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_price} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_price} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_price} />
                </div>
                <h4>Mix de Produtos</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_product_mix} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_product_mix} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_product_mix} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_product_mix} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_product_mix} />
                </div>
                <h4>customer_service</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_customer_service} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_customer_service} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_customer_service} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_customer_service} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_customer_service} />
                </div>
                <h4>Rapidez na Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_delivery_speed} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_delivery_speed} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_delivery_speed} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_delivery_speed} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_delivery_speed} />
                </div>
                <h4>Ambiente Agradável</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_pleasant_motivation} />
                </div>
                <h4>Outros? Quais?</h4>
                <textarea style={{ fontFamily: 'Segoe UI', fontSize: '18px' }} cols="80" rows="4" value={this.state.motivo} onChange={this.onChangeMotivo} />
              </li> <br />
              <li>
                <h3>O quão satisfeito você ficou com nosso serviço?</h3>
                <h4>Consultores de Vendas</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_sales_consultants} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_sales_consultants} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_sales_consultants} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_sales_consultants} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_sales_consultants} />
                </div>
                <h4>Equipe Balcão</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_service_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_service_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_service_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_service_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_service_team} />
                </div>
                <h4>Equipe Caixa</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_cash_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_cash_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_cash_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_cash_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_cash_team} />
                </div>
                <h4>Equipe de Entrega</h4>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_delivery_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_delivery_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_delivery_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_delivery_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_delivery_team} />
                </div>
              </li> <br />
              <li>
                <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_customer_expectations} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_customer_expectations} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_customer_expectations} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_customer_expectations} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_customer_expectations} />
                </div>
              </li> <br />
              <li>
                <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_new_purchases} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_new_purchases} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_new_purchases} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_new_purchases} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_new_purchases} />
                </div>
              </li> <br />
              <li>
                <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
                <div className="emojis-box">
                  <img src={triste} alt="emoji triste" className="pessimo" onClick={this.add_suggestion_recommendation} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" onClick={this.add_suggestion_recommendation} />
                  <img src={neutro} alt="emoji neutro" className="neutro" onClick={this.add_suggestion_recommendation} />
                  <img src={feliz} alt="emoji feliz" className="bom" onClick={this.add_suggestion_recommendation} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" onClick={this.add_suggestion_recommendation} />
                </div>
              </li> <br />
              <li>
                <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
                <h4>Sugestão:</h4>
                <textarea style={{ fontFamily: 'Segoe UI', fontSize: '18px' }} cols="80" rows="4" value={this.state.complementary_suggestion} onChange={this.onChangeSuggestion} /> <br />
                <input type="submit" value="enviar" className="btn btn-primary" />
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}