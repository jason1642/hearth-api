import React, { Component } from 'react';
import './Container.css'
import CardDisplay from '../CardDisplay/CardDisplay.jsx'
import SearchInput from '../SearchInput/SearchInput.jsx'
import SelectedCardsArray from '../SelectedCardsArray/SelectedCardsArray.jsx'
import axios from 'axios'



class Container extends Component {
    constructor(props){
        super(props)
    this.state = { 
        gameData : undefined,
        selectedCards: []
     }
    }

      searchInputHandleSubmit = async event => {
          event.preventDefault();
          this.setState({
              currentCardDisplaying : this.state.inputValue
            })
            const response = await axios(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&textFilter=${this.state.inputValue}&access_token=USTwhU8sZL0s8o2JtcTSTYp6KAUD4eIxxa`)

            this.setState({
                gameData : response.data,
                currentCardDisplayingArray : response.data.cards.slice(0,10)
              })
            console.log(this.state)
      }

      handleInput = async (e) => {
        this.setState({
            inputValue: e
        })
        console.log(this.state.inputValue)
       
    }

    addCardToArray = (i) => {
            let joined = this.state.selectedCards;
            this.setState({
                selectedCards : joined.concat(this.state.currentCardDisplayingArray[i])
            })
            console.log(this.state.currentCardDisplayingArray[i])
            console.log(this.state.selectedCards)
    }

    render() { 
        console.log(this.state)
        return ( 

            <main className='container'>


                <SearchInput handleSubmit={this.searchInputHandleSubmit.bind(this)} handleInput={this.handleInput}/>


                <CardDisplay gameDataArray={this.state.gameData} onClickAddCardToArray={this.addCardToArray} />


                <SelectedCardsArray selectedCards={this.state.selectedCards}/>


            </main>

         );
    }
}
 
export default Container;