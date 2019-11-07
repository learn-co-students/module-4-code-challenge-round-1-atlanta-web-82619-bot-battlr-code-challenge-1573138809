import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {

  constructor(){
    super();
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(botsData => {
      this.setState({
        bots: botsData
      })
    })
  }

  enlistBot = (bot) => {
    let newBotArmy;
    if (!this.state.botArmy.includes(bot)){
      newBotArmy = [...this.state.botArmy, bot]
      this.setState({
        botArmy: newBotArmy
      })
    } else {
      alert('This bot is already enlisted!')
    }
  }

  goAWOL = (bot) => {
    let newBotArmy = this.state.botArmy.filter(robot => robot !== bot)
    this.setState({
      botArmy: newBotArmy
    })
    
  }

  render() {
    return (
      <div>
        <YourBotArmy goAWOL={this.goAWOL} botArmy={this.state.botArmy}/>
        <BotCollection enlistBot={this.enlistBot} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
