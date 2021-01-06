import React from "react";
import { InputsFilters, Texts } from "./styled";

export default class Filters extends React.Component {
  render() {
    return (
      <InputsFilters>
        <h1>Filtros:</h1>
        <div>
          <Texts>Valor Mínimo: </Texts>
          <input min='0'type="number" />
        </div>

        <div>
          <Texts>Valor Máximo: </Texts>
          <input min='0' type="number" />
        </div>

        <div>
          <Texts>uscar Produto: </Texts>
          <input type="text" />
        </div>
      </InputsFilters>
    );
  }
}
