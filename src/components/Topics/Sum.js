import React, {Component} from 'react';

class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
        this.changeNum1 = this.changeNum1.bind(this);
        this.changeNum2 = this.changeNum2.bind(this);
        this.sumNums = this.sumNums.bind(this);
    }

    sumNums() {
        const sum = parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10);
        this.setState({sum: sum});
    }

    changeNum1(event) {
        this.setState({num1: event.target.value});
    };

    changeNum2(event) {
        this.setState({num2: event.target.value});
    };

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' value={this.state.num1} onChange={this.changeNum1}></input>
                <input className='inputLine' type='number' value={this.state.num2} onChange={this.changeNum2}></input>
                <button className='confirmationButton' onClick={this.sumNums}> Sum the Nums!</button>
                <span className='resultsBox'>Sum:{this.state.sum}</span>
            </div>
            
        )};
}
export default Sum;