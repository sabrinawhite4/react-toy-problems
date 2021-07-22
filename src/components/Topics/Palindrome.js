import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            palindrome:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.isPalindrome = this.isPalindrome.bind(this);
    }

    isPalindrome() {
        const newString = this.state.userInput.split("").reverse().join("");
        if (this.state.userInput === newString) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
    };

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.isPalindrome}>Palindrome?</button>
                <span className='resultsBox'>Palindrome:{this.state.palindrome}</span>
            </div>
            
        )};
}
export default Palindrome;