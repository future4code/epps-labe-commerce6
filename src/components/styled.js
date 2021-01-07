import styled from "styled-components";

export const InputsFilters = styled.div`
  display: block;
  float: left;
  margin: 0.5em;
  text-align: left;
  border: 1px solid black;
  height: 47.2em;
  width: 21.5em;
  padding: 0.5em;
`;

export const Texts = styled.span`
  font-size: 19px;
`;



export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1em;
  column-gap: 2em;
`;


export const ItemCard = styled.div`
  border: 1px solid black;
  margin-top: 0,5em;
`;

export const ButtonAddCar = styled.button`
    background-color: black;
    color: white;
    height: 3em;
    width: 22.5em;
    cursor: pointer;
`;