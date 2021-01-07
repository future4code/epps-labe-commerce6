import React from "react";
import "./App.css";
// import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { InputsFilters, Texts } from "./components/styled";
import styled from "styled-components";
import CartButton from "./components/Button";

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: row;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
`;

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

// const CartItem = styled.div`
//   width: 100px;
//   border: 1px solid black;
// `;
class App extends React.Component {
  state = {
    itemCard: [
      {
        img: "https://picsum.photos/300/300?a=1",
        item: `Teste`,
        price: 1,
      },
      {
        img: "https://picsum.photos/300/300?a=2",
        item: `juliana`,
        price: 2000,
      },
      {
        img: "https://picsum.photos/300/300?a=3",
        item: `Ana`,
        price: 25.5,
      },
      {
        img: "https://picsum.photos/300/300?a=4",
        item: `Felipe`,
        price: 25.95,
      },
      {
        img: "https://picsum.photos/300/300?a=5",
        item: `Labenu`,
        price: 789.87,
      },
      {
        img: "https://picsum.photos/300/300?a=6",
        item: `Amanda`,
        price: 453.28,
      },
      {
        img: "https://picsum.photos/300/300?a=7",
        item: `Laís`,
        price: 236.63,
      },
      {
        img: "https://picsum.photos/300/300?a=8",
        item: `Leticia`,
        price: 456.98,
      },
    ],
    inputValueMin: 0,
    inputValueMax: Infinity,
    cartVisible: false,
  };


  onChangeValueMin = (e) => {
    const valueMin = e.target.value;
    this.setState({
      inputValueMin: valueMin,
    });
    
    // const filterValueMin = this.state.itemCard.filter((produto) =>{
     
    //   return(produto.price >= valueMin )
      
    // })

    // this.setState({
    //   itemCard: filterValueMin
    // })
    // console.log(valueMin)
    // console.log(this.state.inputValueMin)
    // console.log(filterValueMin)
  };

  onChangeValueMax = (e) => {
    const valueMax = e.target.value;
    this.setState({
      inputValueMax: valueMax,
    });
    
    
    // const filterValueMax = this.state.itemCard.filter((produto) =>{
    //   console.log(produto)
    //   return(console.log(produto.price < valueMax))
    // })

    // this.setState({
    //   itemCard: filterValueMax
    // })
  };

  getFilterAddLista = () =>{
    console.log(this.state.inputValueMin)
    console.log(this.state.inputValueMin > 0)
    return this.state.itemCard
      .filter((produto) =>{
      console.log(produto.price > this.state.inputValueMin)
      return (this.state.inputValueMin > 0 ? produto.price > this.state.inputValueMin : produto)
      
    }
    )
    .filter((produto) =>{
      return(this.state.inputValueMax < Infinity ? produto.price < this.state.inputValueMax : produto)
    })
    
    // console.log(filter)
    // return (filter)
  }
 
  cartVisible = () => {
    this.setState({
      cartVisible: !this.state.cartVisible,
    });
    console.log(this.state.cartVisible)
  
  };

  render() {
    const listaFiltrada = this.getFilterAddLista()
    const itemList = listaFiltrada.map((item) => {
      return (
        <div>
          <Cards
            itemPhoto={item.img}
            itemName={item.item}
            priceItem={item.price}
          />
        </div>
      );
    })
    
    return (
      <Container >
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
  
        <InputsFilters></InputsFilters>
      </Container>
        // <CartButton onClick={this.cartVisible} />
    );
  }
}

export default App;
