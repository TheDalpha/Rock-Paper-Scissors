import React from 'react'
import '../App.css'

class Rock extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return this.props.onClickChanged('Rock');
    }

render() {
        if (this.props.selected === 'Rock') {
            document.querySelector('#rock').style.borderColor = 'aqua';
        } else if (document.querySelector('#rock') === null || document.querySelector('#rock') === undefined) {
            return (
                <div>
                    <img id="rock" className="Rock" src={require('../Rock.jpg')} alt="Rock" height={50} onClick={this.handleClick}/>
                </div>
            );
        } else {
            document.querySelector('#rock').removeAttribute('style');
        }
    return(
        <div>
            <img id="rock" className="Rock" src={require('../Rock.jpg')} alt="Rock" height={50} onClick={this.handleClick}/>
        </div>
    )
}
}

export default Rock;