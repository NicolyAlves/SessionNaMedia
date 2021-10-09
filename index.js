import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'



import Contador from "./sessionmedia/comunicacaoComps/contador";
import Pedido from "./sessionmedia/finalizacaoPedido/pedido";
import ConclusaoPedido from "./sessionmedia/comunicacaoComps/finalizacaoPedido/conclusao";

import Carrinho from "./sessionmedia/src/carrinho";

import App from './sessionmedia/home'
import DetalheProduto from './sessionmedia/detalheProduto'
import Carrinho from './sessionmedia/carrinho'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        
      
        <Route path="/opa/contador" exact={true} component={Contador} />
        <Route path="/opa/pedido" component={Pedido} />
        <Route path="/opa/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
