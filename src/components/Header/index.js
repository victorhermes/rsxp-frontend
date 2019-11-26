import React from "react";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <ul>
        <li>
          <a href="http">Gráficos</a>
          <a href="http">Configurações</a>
          <a href="http">Relatórios</a>
          <a href="http">Observações</a>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
