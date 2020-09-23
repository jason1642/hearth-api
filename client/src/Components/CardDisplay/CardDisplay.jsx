import React, { Component } from 'react';
import './CardDisplay.css'

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
            
            {console.log(this.props.gameDataArray.cards[0])}

            {this.props.gameDataArray.cards.slice(0,10).map((ele, index)=>
            <div onClick={()=>this.props.onClickAddCardToArray(index)} className='single-card-display'><p>{ele.flavorText}</p>
            <img className='single-card-display-image' src={ele.image} alt='card' /></div>
            )}
            </> : <></>}
        </div> );
    }
}
 
export default CardDisplay;