import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';
import BotSort from '../components/BotSort';

const API = ' https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      army: [],
      selectedBot: null,
      displayedBots: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(bots => {
        this.setState({
          bots: bots,
          displayedBots: bots
        })
      });
  }

  enlist = (bot) => {
    let tempBots = [...this.state.bots];
    tempBots.splice(tempBots.findIndex(tempBot => tempBot.id === bot.id), 1);

    this.setState({
      bots: tempBots,
      army: [...this.state.army, bot],
      selectedBot: null,
      displayedBots: tempBots
    })
  }

  discharge = (bot) => {
    let tempArmy = [...this.state.army];
    tempArmy.splice(tempArmy.findIndex(tempBot => tempBot.id === bot.id), 1);

    this.setState({
      bots: [...this.state.bots, bot],
      army: tempArmy,
      displayedBots: [...this.state.bots, bot]
    })
  }

  selectBot = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  returnToList = () => {
    this.setState({
      selectedBot: null,
    })
  }

  sortBy = (attribute) => {
    let sortedBots = [...this.state.bots].sort((botA, botB) => {
      return (botB[attribute] - botA[attribute]);
    })

    this.setState({
      displayedBots: sortedBots
    })
  }

  render() {
    return (
      <div>
        <h1>Your Army: </h1>
        <YourBotArmy army={this.state.army} discharge={this.discharge} />
        {this.state.selectedBot === null ?
          <div>
            <h1>Bots to Recruit: </h1>
            <BotSort sortBy={this.sortBy} />
            <br></br>
            <BotCollection bots={this.state.displayedBots} selectBot={this.selectBot} /> 
          </div> 
          :
          <BotSpecs bot={this.state.selectedBot} enlist={this.enlist} returnToList={this.returnToList} />
        }
      </div>
    );
  }

}

export default BotsPage;
