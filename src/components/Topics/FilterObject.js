import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: [
                {name:'Spencer', age: 25, eyeColor:'blue'},
                {name:'Spencer', age: 25, height:175},
                {name:'Spencer', age: 25, gender:'Male'},
                {name:'Spencer', hairColor: 'Blonde', eyeColor:'blue'}
            ], 
            filteredArray: [], 
            userInput:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterObject = this.filterObject.bind(this);
    }
    filterObject() {
        const userInput = this.state.userInput;
        const result = this.state.unFilteredArray.filter(person => person[userInput]);
        this.setState({filteredArray: result});
        console.log(result);
    }
    handleChange(event) {
        this.setState({userInput: event.target.value});
    }
    render() {
        const unFilteredArray = JSON.stringify(this.state.unFilteredArray);
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{unFilteredArray}</span>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.filterObject}>Filter Objects</button>
                <span className='resultsBox filterObjectRB'>Filtered:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
            
        )};
}
export default FilterObject;