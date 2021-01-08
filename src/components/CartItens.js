import React from 'react'
import styled from 'styled-components'

const ContainerCartItem = styled.div`
    border: 1px solid black;
    height: 200px;
    

`


export default class CartItem extends React.Component{
    render(){
        console.log(this.props.estado)
        const cartItem = this.props.estado.map((produto) =>{

            return(
                <div>
                <p>Nome do Produto:{produto.item}</p>
                
                <p> R$: {produto.price}</p>
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