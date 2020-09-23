import React, { Component } from 'react';
import './SelectedCardsArray.css'


class SelectedCardsArray extends Component {
    constructor(props){
        super(props)
        this.state = { 
            
        }
    }
    render() { 
        return ( <div className='selected-cards-array'>
                {
                    this.props.selectedCards.map(ele=>
                        <div className='selected-card-single'>
                            <img className='selected-card-single-image' src={ele.image} alt='Hearthstone card' />
                            </div>)
                }

        </div> );
    }
}
 
export default SelectedCardsArray;