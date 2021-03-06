import styled from "styled-components";

export const InputsFilters = styled.div`
  display: block;
  margin: 0.5em 0.5em 0 0.5em;
  text-align: left;
  border: 1px solid black;
  padding: 0.5em;
`;

export const Texts = styled.span`
  font-size: 19px;
`;

export const Container = styled.div`
  width: 99.8%;
  height: auto;
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: row;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
`;

export const ContainerCards = styled.div`
  margin-top: 0.5em;
  /* display: grid; */
  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3fr 2fr;
  row-gap: 1em;
  column-gap: 0.5em; */
`;

export const Images = styled.img`
    padding: 1em;
    width: 30vh;
`;


export const ItemCard = styled.div`
  border: 1px solid black;
  margin-top: 0,5em;
`;

export const ButtonAddCar = styled.button`
    margin-bottom: 0.5em;
    background-color: black;
    color: white;
    height: 3em;
    width: 16em;
    cursor: pointer;
`;