import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props){
        super(props)
        this.state = { 
        //    inputValue : 'stqw'
         }
    }


    


    render() { 
        return ( 
            <div>
                <input name='card-search' type="text" onChange={e => this.props.handleInput(e.target.value)} placeholder='Search a card name'/>
                <button onClick={this.props.handleSubmit }>Search</button>
            </div>
         );
    }
}
 
export default SearchInput;