import React from "react";
import { ItemCard, ContainerCards, ButtonAddCar, Images } from "./styled";

export default class Cards extends React.Component {

  render() {
   
    return (
      <ContainerCards>
        <ItemCard>
          <Images
            src={this.props.itemPhoto}
            alt="Imagem do produto"
          />
          <p>{this.props.itemName}</p>
          <p>R$ {this.props.priceItem}</p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

         {/* <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=2"
            alt="Imagem do produto"
          />
          <p>Item 2</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=3"
            alt="Imagem do produto"
          />
          <p>Item 3</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=4"
            alt="Imagem do produto"
          />
          <p>Item 4</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=5"
            alt="Imagem do produto"
          />
          <p>Item 5</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=6"
            alt="Imagem do produto"
          />
          <p>Item 6</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=7"
            alt="Imagem do produto"
          />
          <p>Item 7</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

        <ItemCard>
          <img
            src="https://picsum.photos/300/300?a=8"
            alt="Imagem do produto"
          />
          <p>Item 8</p>
          <p>R$ </p>
          <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard> */}
      </ContainerCards>
    );
  }
}
