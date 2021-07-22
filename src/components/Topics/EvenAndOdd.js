import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {evenArray: [], oddArray: [], userInput:''};
        this.handleChange = this.handleChange.bind(this);
        this.splitOddAndEven = this.splitOddAndEven.bind(this);
    }

    splitOddAndEven() {
        const numbers = this.state.userInput.split(',');
        const evenArray = []
        const oddArray = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenArray.push(numbers[i]);
                console.log(evenArray);
            } else { 
               oddArray.push(numbers[i]);
            }
        }
        this.setState({evenArray: evenArray.toLocaleString(), oddArray: oddArray.toLocaleString()});
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
    }
    
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds</h4>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.splitOddAndEven}>Split Numbers</button>
                <span className='resultsBox'>Evens:[{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds:[{this.state.oddArray}]</span>         
            </div>
            
        )};
}
export default EvenAndOdd;