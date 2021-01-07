import React from "react";
import { ItemCard, ContainerCards, ButtonAddCar, Images } from "./styled";

export default class Cards extends React.Component {

  render() {
   
    return (
      <ContainerCards >
        <ItemCard >
          
          <Images
            src={this.props.itemPhoto}
            alt="Imagem do produto"
          />
          <p>{this.props.itemName}</p>
          <p>R$ {this.props.priceItem}</p>
          
          <ButtonAddCar onClick={this.props.addCartItem}>Adicionar ao carrinho</ButtonAddCar>
        </ItemCard>

      </ContainerCards>
    );
  }
}
