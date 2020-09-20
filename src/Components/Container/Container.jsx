import React, { Component } from 'react';
import './Container.css'
import CardDisplay from '../CardDisplay/CardDisplay.jsx'
import SearchInput from '../SearchInput/SearchInput.jsx'
import axios from 'axios'



class Container extends Component {
    constructor(props){
        super(props)
    this.state = { 
        gameData : undefined
     }
    }

    // componentDidMount = async () => {
    //     const API_KEY = "5TcC5bPPSpTi6c90Q5OTeAYg25RQ3bAe";
    //     // const response = await axios(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=rise-of-shadows&class=mage&manaCost=10&attack=4&health=10&collectible=1&rarity=legendary&type=minion&minionType=dragon&keyword=battlecry&textFilter=kalecgos&gameMode=constructed&page=1&pageSize=5&sort=name&order=desc&access_token=USw5k1VmbXIgoIEEWEEyIC8wxaoMKIvCsE
    //     // `)
    //   }

      searchInputHandleSubmit = async (event) => {
          event.preventDefault();
          this.setState({
              currentCardDisplaying : this.state.inputValue
            })
            const response = await axios(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&textFilter=${this.state.inputValue}&access_token=USTpGP3452AvERB5jkzEJL9GUeoV2YgxTG
            `)

            this.setState({
                gameData : response.data
              })
            console.log(this.state)
      }

      handleInput = async (e) => {
        this.setState({
            inputValue: e
        })
        console.log(this.state.inputValue)
       
    }

    render() { 
        console.log(this.state)
        return ( 
            <main className='container'>
                <SearchInput handleSubmit={this.searchInputHandleSubmit.bind(this)} handleInput={this.handleInput}/>
                <CardDisplay gameDataArray={this.state.gameData} />
            </main>
         );
    }
}
 
export default Container;