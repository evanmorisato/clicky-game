import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Counters from "./components/Counters"
import Players from "./components/Players";
import players from "./players.json";
import './App.css';

class App extends Component {

  state = {
    players,
    lastId: 0,
    counter: 0,
    highScore: 0,
  };

  handleIncrement = (id) => {
    if (this.state.lastId !== id) {
      this.setState({ 
        counter: this.state.counter + 1,
        lastId: id,
        highScore: 
          this.state.counter >= this.state.highScore 
          ? 
          this.state.counter + 1 : this.state.highScore,
        players: this.state.players.sort(() => Math.random() - 0.5)
      })
    }
    else {
      this.setState({ counter: 0 })
    }
  };

  render() {
   
    return (
      <Wrapper>
        <Header>Clicky Game</Header>
        <Counters 
            current={this.state.counter}
            highScore={this.state.highScore}
            />
        <Main>
          {this.state.players.map(player => (
            <Players
            key={player.id}
            alt={player.name}
            id={player.id} 
            image={player.image}
            handleIncrement={this.handleIncrement} 
            />
          ))}
        </Main>
      </Wrapper>
    );
  }
}

export default App;