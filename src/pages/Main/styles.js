import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #7900f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  h1 {
    color: #ffff;
    margin-bottom: 50px;
    font-size: 34px;
    font-weight: 100;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    align-items: center;

    input {
      background: transparent;
      border: 0;
      border-bottom: 1px solid #ffffff;
      color: #ffffff;
      font-size: 25px;
      padding: 5px;
      width: 500px;
    }

    button {
      margin-top: 50px;
      background: transparent;
      color: #ffffff;
      padding: 20px;
      border-radius: 5px;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  div {
    margin-top: 30px;
    width: 500px;

    h2 {
      color: #ffffff;
      font-size: 25px;
      margin-bottom: 10px;
    }

    ul li {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    ul li a {
      display: flex;
      color: #ffffff;
      font-size: 15px;
      border: 1px solid #fff;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 50px;
    }
  }
`;
