import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor () {
    super()
    this.state = {
      fetchedBots: [],
      bots: [],
      myBots: [],
      selectedBot: [],
      clicked: false
    }
  }

  componentDidMount () {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        fetchedBots: data,
        bots: data
      })
    })
  }

  // handleClick = (e) => {
  //   let bots = [...this.state.bots]
  //   let selectedBot = bots.filter(bot => bot.name === e.currentTarget.innerText.split(" ")[0])[0]

  //   if (selectedBot) {
  //     let newBots = this.state.bots.filter(bot => bot !== selectedBot)

  //     this.setState({
  //       bots: newBots,
  //       myBots: [...this.state.myBots, selectedBot]
  //     })
  //   } else {
  //     let allBots = [...this.state.fetchedBots]
  //     let selectedBot = allBots.filter(bot => bot.name === e.currentTarget.innerText.split(' ')[0])[0]
  //     let myBots = this.state.myBots.filter(bot => bot !== selectedBot)

  //     this.setState({
  //       bots: [...this.state.bots, selectedBot],
  //       myBots: myBots
  //     })
  //   }
  // }

  handleClick = (e) => {
    let bots = [...this.state.bots]
    let selectedBot = bots.filter(bot => bot.name === e.currentTarget.innerText.split(" ")[0])[0]
    
    if (selectedBot) {
      this.setState({
        selectedBot: selectedBot,
        clicked: true
      })
    } else {
      let allBots = [...this.state.fetchedBots]
      let selectedBot = allBots.filter(bot => bot.name === e.currentTarget.innerText.split(' ')[0])[0]
      let myBots = this.state.myBots.filter(bot => bot !== selectedBot)

      this.setState({
        bots: [...this.state.bots, selectedBot],
        myBots: myBots
      })
    }
  }

  handleAddClick = () => {
      let newBots = this.state.bots.filter(bot => bot !== this.state.selectedBot)

      this.setState({
        bots: newBots,
        myBots: [...this.state.myBots, this.state.selectedBot],
        selectedBot: [],
        clicked: false
      })
  }

  handleCloseClick = () => {
    this.setState({
      selectedBot: [],
      clicked: false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} handleClick={this.handleClick}/>
        {this.state.clicked 
          ? <BotSpecs bot={this.state.selectedBot} handleCloseClick={this.handleCloseClick} handleAddClick={this.handleAddClick} /> 
            : <BotCollection bots={this.state.bots} handleClick={this.handleClick}/> }
      </div>
    );
  }

}

export default BotsPage;
