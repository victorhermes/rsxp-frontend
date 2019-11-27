import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  select {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #7900f2;
    color: #7900f2;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const AllCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
