import React from 'react';

class Paper extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return this.props.onClickChanged('Paper');
    }

    render() {
        if (this.props.selected === 'Paper') {
            document.querySelector('#paper').style.borderColor = 'aqua';
        } else if (document.querySelector('#paper') === null || document.querySelector('#paper') === undefined) {
            return (
                    <img id="paper" className="Rock" src={require('../Paper.jpg')} alt="Paper" height={50} onClick={this.handleClick}/>
            );
        } else {
            document.querySelector('#paper').removeAttribute('style');
        }
        return (
            <img id="paper" className="Rock" src={require('../Paper.jpg')} alt="Paper" height={50} onClick={this.handleClick}/>
        )
    }
}

export default Paper;