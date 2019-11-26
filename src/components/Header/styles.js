import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 350px;
  background: #7900f2;
  display: flex;
  align-items: center;

  ul {
    margin-left: 45px;
  }

  ul li {
    display: flex;
    flex-direction: column;
  }

  a {
    font-size: 25px;
    color: #ffff;
    margin-top: 20px;
  }
`;
