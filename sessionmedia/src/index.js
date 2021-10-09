import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Pedido from "./comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./comunicacaoComps/finalizacaoPedido/conclusao/index";

import Carrinho from "./carrinho";

import App from './home'
import DetalheProduto from './detalheProduto'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        
      
        
        <Route path="/opa/pedido" component={Pedido} />
        <Route path="/opa/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
