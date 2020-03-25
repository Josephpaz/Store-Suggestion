import React, { Component } from 'react';
import './App.css';
import feliz from './assets/icons/icons8-feliz-50.png';
import triste from './assets/icons/icons8-triste-50.png';
import insatisfeito from './assets/icons/icons8-insatisfeito-50.png';
import neutro from './assets/icons/icons8-neutro-50.png';
import sorridente from './assets/icons/icons8-sorridente-50.png';
import info_store_logo from './assets/img/info_store_logo.png';
import footer from './assets/img/footer_prancheta.png';
import axios from 'axios';
import $ from 'jquery';

var search = window.location.search;
var params = new URLSearchParams(search);
var freight_id = params.get('freight_id');
//funcao para pegar um parametro via url
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      motivo: '',
      sugestao: '',
      resposta: {
        freight_id: '',
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

  componentDidMount() {
    $(document).ready(function () {

      var id_img1 = '';
      $('.box-1 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img1 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img1 = e.target.id;
          } else if (id_img1 !== e.target.id) {
            $(`#${id_img1}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img1 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img2 = '';
      $('.box-2 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img2 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img2 = e.target.id;
          } else if (id_img2 !== e.target.id) {
            $(`#${id_img2}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img2 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img3 = '';
      $('.box-3 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img3 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img3 = e.target.id;
          } else if (id_img3 !== e.target.id) {
            $(`#${id_img3}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img3 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img4 = '';
      $('.box-4 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img4 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img4 = e.target.id;
          } else if (id_img4 !== e.target.id) {
            $(`#${id_img4}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img4 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });


      var id_img5 = '';
      $('.box-5 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img5 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img5 = e.target.id;
          } else if (id_img5 !== e.target.id) {
            $(`#${id_img5}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img5 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img6 = '';
      $('.box-6 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img6 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img6 = e.target.id;
          } else if (id_img6 !== e.target.id) {
            $(`#${id_img6}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img6 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img7 = '';
      $('.box-7 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img7 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img7 = e.target.id;
          } else if (id_img7 !== e.target.id) {
            $(`#${id_img7}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img7 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img8 = '';
      $('.box-8 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img8 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img8 = e.target.id;
          } else if (id_img8 !== e.target.id) {
            $(`#${id_img8}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img8 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img9 = '';
      $('.box-9 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img9 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img9 = e.target.id;
          } else if (id_img9 !== e.target.id) {
            $(`#${id_img9}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img9 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img10 = '';
      $('.box-10 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img10 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img10 = e.target.id;
          } else if (id_img10 !== e.target.id) {
            $(`#${id_img10}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img10 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img11 = '';
      $('.box-11 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img11 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img11 = e.target.id;
          } else if (id_img11 !== e.target.id) {
            $(`#${id_img11}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img11 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });

      var id_img12 = '';
      $('.box-12 > img').click(function (e) {
        if ($(`#${e.target.id}`).css('opacity') === '0.6') {
          if (id_img12 === '') {
            $(`#${e.target.id}`).css('opacity', 1);
            id_img12 = e.target.id;
          } else if (id_img12 !== e.target.id) {
            $(`#${id_img12}`).css('opacity', 0.6);
            $(`#${e.target.id}`).css('opacity', 1);
            id_img12 = e.target.id;
          }
        } else {
          $(`#${e.target.id}`).css('opacity', 0.6);
        }
      });
    });
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
  }

  add_suggestion_price(e) {

    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.price = img_className;
      resposta.freight_id = parseInt(freight_id, 10);
      return { resposta }
    });
  }

  add_suggestion_product_mix(e) {

    let img_className = this.parserToNumber(e.target.className);

    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.product_mix = img_className;
      return { resposta }
    });
  }

  add_suggestion_customer_service(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.customer_service = img_className;
      return { resposta }
    });
  }

  add_suggestion_delivery_speed(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.delivery_speed = img_className;
      return { resposta }
    });
  }

  add_suggestion_pleasant_motivation(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.pleasant_environment = img_className;
      return { resposta }
    });
  }

  add_suggestion_sales_consultants(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.sales_consultants = img_className;
      return { resposta }
    });
  }

  add_suggestion_service_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.service_team = img_className;
      return { resposta }
    });
  }

  add_suggestion_cash_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.cash_team = img_className;
      return { resposta }
    });
  }

  add_suggestion_delivery_team(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.delivery_team = img_className;
      return { resposta }
    });
  }

  add_suggestion_customer_expectations(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.customer_expectations = img_className;
      return { resposta }
    });
  }

  add_suggestion_new_purchases(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.new_purchases = img_className;
      return { resposta }
    });
  }

  add_suggestion_recommendation(e) {
    let img_className = this.parserToNumber(e.target.className);
    this.setState(prevState => {
      let resposta = Object.assign({ ...prevState.resposta }, prevState.resposta);
      resposta.recommendation = img_className;
      return { resposta }
    });
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
    axios.post('http://logistica.navegam.com.br:3000/api/v4/frete/feedback', this.state.resposta)
      .then(res => {
        alert('Formulário Enviado com sucesso!');
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="header-content">
          <div>
            <h1 style={{ fontWeight: 'bold', marginTop: '12px' }}>PESQUISA DE SATISFAÇÃO DO CLIENTE</h1>
            <h2>Compartilhe conosco sua opinião e experiência na Info Store</h2>
          </div>
          <img className="logo_info_store" src={info_store_logo} alt="logo_info_store" />
        </div>
        <img src={footer} alt="footer" style={{ display: 'block', width: '100%', backgroundColor: ' #243573' }} />
        <div className="content">
          <form onSubmit={this.onSubmit}>
            <ol>
              <li>
                <h3 style={{ marginTop: '14px' }}>O que motiva você a comprar com a Info Store?</h3>
                <h4>Preço</h4>
                <div className="emojis-box box-1">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p1" onClick={this.add_suggestion_price} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i1" onClick={this.add_suggestion_price} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n1" onClick={this.add_suggestion_price} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f1" onClick={this.add_suggestion_price} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s1" onClick={this.add_suggestion_price} />
                </div>
                <h4>Mix de Produtos</h4>
                <div className="emojis-box box-2">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p2" onClick={this.add_suggestion_product_mix} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i2" onClick={this.add_suggestion_product_mix} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n2" onClick={this.add_suggestion_product_mix} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f2" onClick={this.add_suggestion_product_mix} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s2" onClick={this.add_suggestion_product_mix} />
                </div>
                <h4>Atendimento</h4>
                <div className="emojis-box box-3">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p3" onClick={this.add_suggestion_customer_service} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i3" onClick={this.add_suggestion_customer_service} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n3" onClick={this.add_suggestion_customer_service} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f3" onClick={this.add_suggestion_customer_service} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s3" onClick={this.add_suggestion_customer_service} />
                </div>
                <h4>Rapidez na Entrega</h4>
                <div className="emojis-box box-4">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p4" onClick={this.add_suggestion_delivery_speed} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i4" onClick={this.add_suggestion_delivery_speed} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n4" onClick={this.add_suggestion_delivery_speed} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f4" onClick={this.add_suggestion_delivery_speed} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s4" onClick={this.add_suggestion_delivery_speed} />
                </div>
                <h4>Ambiente Agradável</h4>
                <div className="emojis-box box-5">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p5" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i5" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n5" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f5" onClick={this.add_suggestion_pleasant_motivation} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s5" onClick={this.add_suggestion_pleasant_motivation} />
                </div>
                <h4>Outros? Quais?</h4>
                <textarea cols="80" rows="4" value={this.state.motivo} onChange={this.onChangeMotivo} />
              </li>
              <li>
                <h4>O quão satisfeito você ficou com nosso serviço?</h4>
                <div className="emojis-box box-6">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p6" onClick={this.add_suggestion_sales_consultants} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i6" onClick={this.add_suggestion_sales_consultants} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n6" onClick={this.add_suggestion_sales_consultants} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f6" onClick={this.add_suggestion_sales_consultants} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s6" onClick={this.add_suggestion_sales_consultants} />
                </div>
                <h4>Equipe Balcão</h4>
                <div className="emojis-box box-7">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p7" onClick={this.add_suggestion_service_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i7" onClick={this.add_suggestion_service_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n7" onClick={this.add_suggestion_service_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f7" onClick={this.add_suggestion_service_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s7" onClick={this.add_suggestion_service_team} />
                </div>
                <h4>Equipe de Caixa</h4>
                <div className="emojis-box box-8">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p8" onClick={this.add_suggestion_cash_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i8" onClick={this.add_suggestion_cash_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n8" onClick={this.add_suggestion_cash_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f8" onClick={this.add_suggestion_cash_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s8" onClick={this.add_suggestion_cash_team} />
                </div>
                <h4>Equipe de Entrega</h4>
                <div className="emojis-box box-9">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p9" onClick={this.add_suggestion_delivery_team} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i9" onClick={this.add_suggestion_delivery_team} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n9" onClick={this.add_suggestion_delivery_team} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f9" onClick={this.add_suggestion_delivery_team} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s9" onClick={this.add_suggestion_delivery_team} />
                </div>
              </li> <br />
              <li>
                <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
                <div className="emojis-box box-10">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p10" onClick={this.add_suggestion_customer_expectations} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i10" onClick={this.add_suggestion_customer_expectations} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n10" onClick={this.add_suggestion_customer_expectations} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f10" onClick={this.add_suggestion_customer_expectations} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s10" onClick={this.add_suggestion_customer_expectations} />
                </div>
              </li> <br />
              <li>
                <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
                <div className="emojis-box box-11">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p11" onClick={this.add_suggestion_new_purchases} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i11" onClick={this.add_suggestion_new_purchases} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n11" onClick={this.add_suggestion_new_purchases} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f11" onClick={this.add_suggestion_new_purchases} />
                  <img src={sorridente} alt="emoji sorridente" id="s11" className="excelente" onClick={this.add_suggestion_new_purchases} />
                </div>
              </li> <br />
              <li>
                <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
                <div className="emojis-box box-12">
                  <img src={triste} alt="emoji triste" className="pessimo" id="p12" onClick={this.add_suggestion_recommendation} />
                  <img src={insatisfeito} alt="emoji confuso" className="insatisfeito" id="i12" onClick={this.add_suggestion_recommendation} />
                  <img src={neutro} alt="emoji neutro" className="neutro" id="n12" onClick={this.add_suggestion_recommendation} />
                  <img src={feliz} alt="emoji feliz" className="bom" id="f12" onClick={this.add_suggestion_recommendation} />
                  <img src={sorridente} alt="emoji sorridente" className="excelente" id="s12" onClick={this.add_suggestion_recommendation} />
                </div>
              </li> <br />
              <li>
                <h3>Você gostaria de acrescentar algo para futuras melhorias?</h3>
                <h4>Sugestão: </h4>
                <textarea cols="80" rows="4" value={this.state.complementary_suggestion} onChange={this.onChangeSuggestion} /> <br />
                <input type="submit" value="enviar" className="btn btn-primary" />
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}