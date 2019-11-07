import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  constructor(){
    super();
    this.state = {
      bots: [],
      botArmy: [],
      displaySpecs: false,
      botToDisplay: {}

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

  displaySpecs = (bot) => {
    this.setState({
      displaySpecs: true,
      botToDisplay: bot
    })
  }

  enlistBot = (bot) => {
    let newBotArmy;
    if (!this.state.botArmy.includes(bot)){
      newBotArmy = [...this.state.botArmy, bot]
      this.setState({
        botArmy: newBotArmy,
        displaySpecs: false
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

  goBack = () => {
    this.setState({
      displaySpecs: false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy goAWOL={this.goAWOL} botArmy={this.state.botArmy}/>
        {this.state.displaySpecs ? <BotSpecs goBack={this.goBack} enlistBot={this.enlistBot} bot={this.state.botToDisplay}/> : <BotCollection displaySpecs={this.displaySpecs} enlistBot={this.enlistBot} bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;
