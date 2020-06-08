import React, { Component } from 'react';

import cars from './cars.json';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';

class App extends Component {
    state = {
        cars,
        clickedCar: [],
        score: 0,
        highScore: 0,
        isGuessed: false
    };

    randomGenerator = (a, b) => (Math.random() > 0.5 ? -1 : 1);

    imageClick = id => {
        const currentCar = id;
        const CarAlreadyClicked =
            this.state.clickedCar.indexOf(currentCar) > -1;

        if (CarAlreadyClicked) {
            this.setState({
                cars: this.state.cars.sort(this.randomGenerator),
                clickedCar: [],
                score: 0,
                highScore: 0,
                isGuessed: false
            });
            alert('You lose. Play again?');
        } else {
            let score = this.state.score;
            let cars = this.state.cars;

            this.setState(
                {
                    cars: this.state.cars.sort(this.randomGenerator),
                    clickedCar: this.state.clickedCar.concat(currentCar),
                    score: score + 1,
                    highScore: Math.max(this.state.highScore, score),
                    isGuessed: true
                },
                () => {
                    if (this.state.score === cars.length) {
                        alert('Yay! You Win!');
                        this.setState({
                            cars: this.state.cars.sort(this.randomGenerator),
                            clickedCar: [],
                            score: 0,
                            highScore: 0
                        });
                    }
                }
            );
        }
    };

    render() {
        const { cars, score, highScore, isGuessed } = this.state;

        return (
            <div className='application'>
                <Header score={score} highScore={highScore} isGuessed={isGuessed} />
                <div className='wrapper'>
                    <CardList cars={cars} imageClick={this.imageClick} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;