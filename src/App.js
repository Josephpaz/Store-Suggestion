import React from 'react';
import logo from './logo.svg';
import './App.css';
import feliz from './assets/icons/icons8-feliz-50.png';
import triste from './assets/icons/icons8-triste-50.png';
import confuso from './assets/icons/icons8-confuso-50.png';
import neutro from './assets/icons/icons8-neutro-50.png';
import sorridente from './assets/icons/icons8-sorridente-50.png';

function App() {
  return (
    <div className="App">
      <div className="header-content">
        <h1>Store Suggestion</h1>
        <h2>Deixe-nos sua opnião sobre a sua experiencia com a Info Store</h2>
        <ol>
          <li>
            <h3>O que motiva você a comprar com a Info Store?</h3>
            <h4>Preço</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Mix de Produtos</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Atendimento</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Rapidez na Entrega</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Ambiente Agradável</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4 style={{ marginBottom: '4px' }}>Outros? Quais?</h4>
            <input type="text" />
          </li>
          <li>
            <h3>O quão satisfeito você ficou com nosso atendimento?</h3>
            <h4>Consultores de Vendas</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Equipe Balcão</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Equipe Caixa</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
            <h4>Equipe de Entrega</h4>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
          </li>
          <li>
            <h3>O quanto conseguimos atender todas as suas expectativas?</h3>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
          </li>
          <li>
            <h3>Qual a probabilidade de você fazer novas compras na Info Store?</h3>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
          </li>
          <li>
            <h3>O quanto você recomendaria a empresa Info Store para seus amigos e/ou parentes?</h3>
            <div>
              <img src={triste} style={{ marginRight: '12px' }} />
              <img src={confuso} style={{ marginRight: '12px' }} />
              <img src={neutro} style={{ marginRight: '12px' }} />
              <img src={feliz} style={{ marginRight: '12px' }} />
              <img src={sorridente} />
            </div>
          </li>
          <li>
            <h3>Você gostaria de acrescentar algo mais para futuras melhorias?</h3>
            <p>Sugestão:</p>
            <input type="text" />
          </li>
        </ol>
      </div>
    </div >
  );
}

export default App;
