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
    const counter = this.state.questionNumber + 1;
    const response = await api.post("/message", {
      text: this.state.text,
      counter: this.state.questionNumber
    });
    this.setState({ question: response.data.message });
    this.setState({ questionNumber: counter });
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
      </Container>
    );
  }
}
