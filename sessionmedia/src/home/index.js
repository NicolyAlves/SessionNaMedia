import Produto from '../produto'
import { useState } from 'react'

import { Container } from './styled';


export default function Home() {
  const [produtos, setProdutos] = useState([]);

  function listar() {
    const r = [
      {
        id: 10001,
        imagem: "https://rotacult.com.br/wp-content/uploads/2019/04/Triplo-Mocha-Frappuccino.png",
        titulo: "Triplo Mocha Latte",
        preco: "R$ 12,50",
        descricao: "Os baristas da marca utilizaram suas habilidades artesanais e paixão pelo café para criar mais uma novidade – e é claro, não pôde faltar um toque de chocolate: o resultado é o Triplo Mocha Frappuccino®, um lançamento exclusivo para o Brasil que fica disponível nas 122 lojas da Starbucks®",
        especificacoes: "Produzido com base de café, o Frappuccino® é preparado com leite e gelo batido, acrescidos das deliciosas caldas de café e mocha. O destaque fica por conta do chantilly, que é preparado com adição de Cold Brew, um café de sabor adocicado e intenso produzido em uma longa infusão de água fria, no qual passa cerca de 20 horas."
      },
      {
        id: 10002,
        imagem: "https://pbs.twimg.com/media/Dmv6VoaXsAAvC5R.jpg",
        titulo: "Cold Brew Gelado",
        preco: "R$ 15,50",
        descricao: "A fabricação de 'Cold Brewing' é um método de preparação que combina café moído e água fria e usa o tempo em vez do calor para extrair o sabor. É fermentado em pequenos lotes e embebido por até 48 horas. O concentrado de café Cold Brew resultante é usado para fazer nossa nova bebida Cold Brew Iced Coffee.",
        especificacoes: "Feito à mão em pequenos lotes diários, embebido lentamente em água fria por 20 horas, sem tocar no calor - o Starbucks® Cold Brew é feito de nossa mistura personalizada de grãos cultivados para infusão longa e fria para um sabor super suave."
      },
      {
        id: 10003,
        imagem: "https://www.maquinascafeexpresso.com/wp-content/uploads/2015/07/cha-verde-frappuccino-starbucks.jpg",
        titulo: "Chá verde matcha",
        preco: "R$ 11,80",
        descricao: "Nosso espresso rico e encorpado combinado com molho de mocha agridoce e leite vaporizado, em seguida, coberto com chantilly adoçado. A clássica bebida de café que sempre satisfaz docemente.",
        especificacoes: "Um matchá latte consiste em matchá em pó (feito de folhas finamente moídas de certas plantas de chá verde), água e leite. Se o pó de matchá não for açucarado, a bebida geralmente é adoçada com mel ou xarope." 
      }
    ]

    setProdutos(r);
  }



  return (
    <Container>

      <h1> Sejam bem-vindos! </h1>
      <br />
    

        <button onClick={listar}>Listar</button>
          
          <div className="lista-produtos">
               {produtos.map(item => 
              <Produto 
               key={item.id}
               info={item} />
          )}

          </div>
         
    </Container>
  )

}