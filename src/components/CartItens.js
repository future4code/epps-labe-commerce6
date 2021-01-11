import React from "react";
import styled from "styled-components";

const ContainerCartItem = styled.div`
  border: 1px solid black;
  height: auto;
  margin: 0.5em 0.5em 0 0.5em;
  padding: 0.5em;
`;

export default class CartItem extends React.Component {
  render() {
    const cartItem = this.props.estado.map((produto) => {
      console.log(produto.id);
      return (
        <div key={produto.id}>
          <p>
            <strong>Produto: </strong>
            {produto.item}
          </p>

          <p> R$ {produto.price}</p>
          <p>-------------------------</p>
          <button onClick={() => this.props.remove(this.props.id)}>X</button>
        </div>
      );
    });
    return (
      <ContainerCartItem>
        <p>{cartItem}</p>
      </ContainerCartItem>
    );
  }
}
