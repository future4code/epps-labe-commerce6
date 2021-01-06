import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import Cards from "./components/Cards";


class App extends React.Component {
  state = {
    itemCard: [
      {
        img: "https://picsum.photos/300/300?a=1",
        item: `item ${1}`,
        price: 1000,
      },
      {
        img: "https://picsum.photos/300/300?a=2",
        item:`item ${2}`,
        price: 2000,
      },
      {
        img: "https://picsum.photos/300/300?a=3",
        item: `item ${3}`,
        price: 25.50,
      },
      {
        img: "https://picsum.photos/300/300?a=4",
        item: `item ${4}`,
        price: 25.95,
      },
      {
        img: "https://picsum.photos/300/300?a=5",
        item: `item ${5}`,
        price: 789.87,
      },
      {
        img: "https://picsum.photos/300/300?a=6",
        item: `item ${6}`,
        price: 453.28,
      },
      {
        img: "https://picsum.photos/300/300?a=7",
        item: `item ${7}`,
        price: 236.63,
      },
      {
        img: "https://picsum.photos/300/300?a=8",
        item: `item ${8}`,
        price: 456.98,
      },
    ],
  };
  render() {
    const itemList = this.state.itemCard.map((item) => {
      return(
        <div key={item.item}>
          <Cards
          itemPhoto = {item.img}
          itemName = {item.item}
          priceItem ={item.price}
          />
        </div>
      )
    })
    return (
      <div className="App">
        <Filters />

        {/* <Cards /> */}
        {itemList}

      </div>
    );
  }
}

export default App;
