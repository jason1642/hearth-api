import React, { Component } from 'react';

class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
         this.componentDidMount = async () => {

         }
    }
    render() { 
        
        return ( <div className='card-display'>

            



            {this.props.gameDataArray !== undefined ? <>
            {/* <h1>{this.props.gameDataArray.cards[5].id}</h1>
            <img src={this.props.gameDataArray.cards[30].image} alt='card' /> */}
            {console.log(this.props.gameDataArray.cards[0])}
            {this.props.gameDataArray.cards.map(ele=>
            <><h1>{ele.id}</h1>
            <img src={ele.image} alt='card' /></>
            )}
            </> : <></>}
        </div> );
    }
}
 
export default CardDisplay;