import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { InputsFilters, Texts } from "./components/styled";

class App extends React.Component {
  state = {
    itemCard: [
      {
        img: "https://picsum.photos/300/300?a=1",
        item: `Teste`,
        price: 1000,
      },
      {
        img: "https://picsum.photos/300/300?a=2",
        item:`juliana`,
        price: 2000,
      },
      {
        img: "https://picsum.photos/300/300?a=3",
        item: `Ana`,
        price: 25.50,
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
  };

  onChangeValueMin = (e) => {
    const valueMin = e.target.value

    this.setState({
      inputValueMin: valueMin
    })
  }

  onChangeValueMax = (e) =>{
    const valueMax = e.target.value

    this.setState({
      inputValueMax: valueMax
    })
  }
  filterName = (e) =>{
    const value = e.target.value
    const filterItem = this.state.itemCard.filter((produto) => {
      console.log(produto.item)
      if(produto.item === value){
        return (
          this.setState({itemCard: filterItem})
        )
      }
    })
  }
  render() {
    const itemList = this.state.itemCard.map((item) => {
      return (
          // console.log(item)

        <div >
          <Cards
            itemPhoto={item.img}
            itemName={item.item}
            priceItem={item.price}
          />
          
        </div>
        
      );
    });
    return (
      <div className="App">
        <InputsFilters>
          <Texts>Valor Mínimo: </Texts>
          <input value={this.state.inputValueMin} onChange={this.onChangeValueMin} min="0" type="number" />
          <Texts>Valor Máximo: </Texts>
          <input  value={this.state.inputValueMax} onChange={this.onChangeValueMax} min='0' type="number" />

          <Texts>Buscar Produto: </Texts>
          <input onChange={this.filterName} type="text" />
        </InputsFilters>

        {/* <Cards /> */}
        {itemList}
        <Filters />
      </div>
    );
  }
}

export default App;
