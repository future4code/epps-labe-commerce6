import React from 'react'
import styled from 'styled-components'

const ContainerCartItem = styled.div`
    border: 1px solid black;
    height: 200px;
    

`



export default class CartItem extends React.Component{
    render(){
        const cartItem = this.props.estado.map((produto) =>{
            console.log(produto.id)
            return(
                <div key={produto.id}>
                <p>Produto: {produto.item}</p>
                
                <p> R$ {produto.price}</p>
                <button onClick={() => this.props.remove(this.props.id)}>X</button>
                </div>
            )
        })
        return(
            <ContainerCartItem>
                <p>{cartItem}</p>          
            </ContainerCartItem>
        )
    }

}