import Teste from "./sessionmedia/src/teste";
import Contador from "./sessionmedia/comunicacaoComps/contador";
import Pedido from "./sessionmedia/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./sessionmedia/comunicacaoComps/finalizacaoPedido/conclusao";
import Home from './sessionmedia/src/home/index'
import DetalheProduto from './sessionmedia/src/detalheProduto/index'
import Carrinho from './sessionmedia/src/carrinho'

ReactDOM.render(
  <React.StrictMode>
        <Route path="/" exact={true} component={Home} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/teste" component={Teste} />
        <Route path="/opa/contador" exact={true} component={Contador} />
        <Route path="/opa/pedido" component={Pedido} />
        <Route path="/opa/conclusao" component={ConclusaoPedido} />
  </React.StrictMode>,
  document.getElementById('root')
);



