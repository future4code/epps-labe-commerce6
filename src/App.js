import React from "react";
import "./App.css";
// import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { InputsFilters, Texts } from "./components/styled";
import styled from "styled-components";
import CartItem from "./components/CartItens";
// import CartButton from "./components/Button";

const Container = styled.div`
  width: 99.8%;
  height: 99vh;
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: row;
  border: 1px solid red;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
`;

class App extends React.Component {
  state = {
    itemCard: [
      {
        id: 1,
        img: "https://picsum.photos/300/300?a=1",
        item: `Teste`,
        price: 1,
      },
      {
        id: 2,
        img: "https://picsum.photos/300/300?a=2",
        item: `juliana`,
        price: 2000,
      },
      {
        id: 3,
        img: "https://picsum.photos/300/300?a=3",
        item: `Ana`,
        price: 25.5,
      },
      {
        id: 4,
        img: "https://picsum.photos/300/300?a=4",
        item: `Felipe`,
        price: 25.95,
      },
      {
        id: 5,

        img: "https://picsum.photos/300/300?a=5",
        item: `Labenu`,
        price: 789.87,
      },
      {
        id: 6,
        img: "https://picsum.photos/300/300?a=6",
        item: `Amanda`,
        price: 453.28,
      },
      {
        id: 7,
        img: "https://picsum.photos/300/300?a=7",
        item: `Laís`,
        price: 236.63,
      },
      {
        id: 8,
        img: "https://picsum.photos/300/300?a=8",
        item: `Leticia`,
        price: 456.98,
      },
    ],
    cart: [],
    inputValueMin: 0,
    inputValueMax: Infinity,
    inputText: "",
    cartVisible: false,
  };

  onChangeValueMin = (e) => {
    const valueMin = e.target.value;
    this.setState({
      inputValueMin: valueMin,
    });
  };

  onChangeValueMax = (e) => {
    const valueMax = e.target.value;
    this.setState({
      inputValueMax: valueMax,
    });
  };

  filterName = (e) => {
    const valueText = e.target.value;
    this.setState({
      inputText: valueText,
    });

    console.log(valueText);
  };

  getFilterAddLista = () => {
    return this.state.itemCard
      .filter((produto) => {
        return this.state.inputValueMin > 0
          ? produto.price > this.state.inputValueMin
          : produto;
      })
      .filter((produto) => {
        return this.state.inputValueMax < Infinity
          ? produto.price < this.state.inputValueMax
          : produto;
      })
      .filter((produto) => {
        const produtoNome = produto.item.toLowerCase();
        return produtoNome.indexOf(this.state.inputText.toLowerCase()) > -1;
      });

    // console.log(filter)
    // return (filter)
  };

  cartVisible = () => {
    this.setState({
      cartVisible: !this.state.cartVisible,
    });
  };

  addCartItem = (id) => {
    const addItem = this.state.itemCard.filter((item) => {
      return item.id === id;
    });
    const newCart = [...this.state.cart, addItem[0]];
    this.setState({
      cart: newCart,
    });
  };

  removeCartItem = (id) => {
    const novoCarrinho = this.state.cart
    const indexProduto = novoCarrinho.findIndex((item)=> {
      return item.id === id
    })

    novoCarrinho.splice(indexProduto, 1)

    this.setState({cart: novoCarrinho})
    
  }

  render() {
    const listaFiltrada = this.getFilterAddLista();
    const itemList = listaFiltrada.map((item) => {
      return (
        <div key={item.id}>
          <Cards
            id={item.id}
            itemPhoto={item.img}
            itemName={item.item}
            priceItem={item.price}
            addCartItem={this.addCartItem}
            removeCartItem={this.removeCartItem}
          />
        </div>
      );
    });

    // console.log(this.state.cart)

    return (
      <div className="App">
        <Container cartVisible={this.state.cartVisible}>
          <InputsFilters>
            <Texts>Valor Mínimo: </Texts>
            <input
              value={this.state.inputValueMin}
              onChange={this.onChangeValueMin}
              min="0"
              type="number"
            />
            <Texts>Valor Máximo: </Texts>
            <input
              value={this.state.inputValueMax}
              onChange={this.onChangeValueMax}
              min="0"
              type="number"
            />

            <Texts>Buscar Produto: </Texts>
            <input onChange={this.filterName} type="text" />
          </InputsFilters>
          <CardContainer>
            {/* <div>
              <p>Quantidade de Produtos</p>
              <select>
                <option value="crescente">Crescente</option>
                <option value="decrescente">decrescente</option>
                </select>
              </div> */}

            {itemList}
          </CardContainer>
          {this.state.cartVisible && ( <CartItem estado={this.state.cart} remove={this.removeCartItem}/>)}
        </Container>
        {/* <CartButton showCart={this.cartVisible}></CartButton> */}
        <button onClick={this.cartVisible}>Teste</button>
      </div>
    );

  }
}

export default App;
