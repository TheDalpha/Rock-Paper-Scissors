import React from 'react';

class Scissors extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return this.props.onClickChanged('Scissors');
    }

    render() {
        if (this.props.selected === 'Scissors') {
            document.querySelector('#scissors').style.borderColor = 'aqua';
        } else if (document.querySelector('#scissors') === null || document.querySelector('#scissors') === undefined) {
            return (
                <div>
                    <img id="scissors" className="Rock" src={require('../Scissors.jpg')} alt="Scissors" height={50}
                         onClick={this.handleClick}/>
                </div>
            );
        } else {
            document.querySelector('#scissors').removeAttribute('style');
        }
        return (
            <div>
                <img id="scissors" className="Rock" src={require('../Scissors.jpg')} alt="Scissors" height={50}
                     onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Scissors;