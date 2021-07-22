import React, {Component} from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: [
                'Sabrina', 'Spencer', 'Sami', 'Vernon', 'Vale', 'Darren', 'Shae','Stephanie'
            ], 
            filteredArray: [], 
            userInput:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterString = this.filterString.bind(this);
    };

    filterString() {
        const userInput = this.state.userInput;
        const result = this.state.unFilteredArray.filter(string => string.includes(userInput));
        this.setState({filteredArray: result});
        console.log(result);
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
    };

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{this.state.unFilteredArray.toLocaleString()}</span>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.filterString}>Filter String</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {this.state.filteredArray.toLocaleString()}</span>
            </div>
            
        )};
}
export default FilterString;