import React from 'react';
import './App.css';
import './Component/Rock'
import Rock from "./Component/Rock";
import Paper from "./Component/Paper";
import Scissors from "./Component/Scissors";
import Bot from "./Component/Bot";

function calculateWinner(selected, rand) {
    if (selected === 'Rock' && rand === './Scissors.jpg' || selected === 'Paper' && rand === './Rock.jpg' || selected === 'Scissors' && rand === './Paper.jpg') {
        return 'WINNER!';
    } else if (rand === './Rock.jpg' && selected === 'Scissors' || rand === './Paper.jpg' && selected === 'Rock' || rand === './Scissors.jpg' && selected === 'Paper') {
        return 'LOSER!'
    } else {
        return 'TIE!'
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.test = this.test.bind(this);
        this.state = {selected: '', random: './Rock.jpg', label: 'Choose: ', wins: 0, lost: 0, tie: 0};
    }

    handleChange(selected) {
        this.setState({selected: selected});
    }

    test(rand) {
        this.setState({random: rand, label: calculateWinner(this.state.selected, rand)});
        setTimeout(() => {
            if (this.state.label === 'WINNER!') {
                this.setState({wins: this.state.wins + 1});
            } else if (this.state.label === 'LOSER!') {
                this.setState({lost: this.state.lost + 1});
            } else {
                this.setState({tie: this.state.tie + 1});
            }
        }, 50);
    }

    render() {
        return (
            <div className="margin">
                <h1>Rock, Paper, Scissors!</h1>
                <h2>Wins: {this.state.wins} Lost: {this.state.lost} Tie: {this.state.tie}</h2>
                <h2 id="winner">{this.state.label}</h2>
                <div>
                    <Rock selected={this.state.selected} onClickChanged={this.handleChange}/>
                    <Paper id="Paper" selected={this.state.selected} onClickChanged={this.handleChange}/>
                    <Scissors id="Scissors" selected={this.state.selected} onClickChanged={this.handleChange}/>
                    <h2 className="bot">BOT</h2>
                    <img className="button" src={require(this.state.random + '')} alt="bot" height={50}/>
                </div>
                <Bot onClickChanged={this.test} random={this.state.random}/>
            </div>
        );
    }
}

export default App;
