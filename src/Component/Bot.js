import React from 'react';

class Bot extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
    }

    start() {
        const min = 1;
        const max = 3;
        const rand = Math.floor(Math.random() * max) + min;
        switch (rand) {
            case 1:
                return this.props.onClickChanged('./Rock.jpg');
            case 2:
                return this.props.onClickChanged('./Paper.jpg');
            case 3:
                return this.props.onClickChanged('./Scissors.jpg');
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.start}>Start</button>
                <div>

                </div>
            </div>
        )
    }
}

export default Bot;