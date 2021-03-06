import React, { Component } from "react";
import api from "../../services/api";

import { Container } from "./styles";

export default class Main extends Component {
  state = {
    question: "",
    text: "",
    questionNumber: 0
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("/watson", {
      text: this.state.text,
      context: {},
      counter: this.state.questionNumber
    });
    const generic = response.data.result.output.generic[0].text;
    console.log(response);
    const counter = this.state.questionNumber + 1;
    this.setState({ question: generic });
    this.setState({ questionNumber: counter });
    this.setState({ text: "" });
  };

  handleAnswerChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <Container>
        <h1>
          {this.state.question ? this.state.question : "Qual é o seu nome?"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleAnswerChange}
            value={this.state.text}
            placeholder="..."
            name="answer-input"
            id="answer-input"
            type="text"
          />

          <button>Enviar</button>
        </form>

        <div>
          <h2>Perguntas recomendadas</h2>
          <ul>
            <li>
              <a href="http">Quanto ganha um programador?</a>
              <a href="http">É possível trabalhar de casa como programador?</a>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
