import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

const API = ' https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      army: [],
      selectedBot: null
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(bots => {
        this.setState({
          bots: bots
        })
      });
  }

  enlist = (bot) => {
    let tempBots = [...this.state.bots];
    tempBots.splice(tempBots.findIndex(tempBot => tempBot.id === bot.id), 1);

    this.setState({
      bots: tempBots,
      army: [...this.state.army, bot],
      selectedBot: null
    })
  }

  discharge = (bot) => {
    let tempArmy = [...this.state.army];
    tempArmy.splice(tempArmy.findIndex(tempBot => tempBot.id === bot.id), 1);

    this.setState({
      bots: [...this.state.bots, bot],
      army: tempArmy
    })
  }

  selectBot = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  returnToList = () => {
    this.setState({
      selectedBot: null
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} discharge={this.discharge} />
        {this.state.selectedBot === null ?
          <BotCollection bots={this.state.bots} selectBot={this.selectBot} /> :
          <BotSpecs bot={this.state.selectedBot} enlist={this.enlist} returnToList={this.returnToList} />
        }
      </div>
    );
  }

}

export default BotsPage;
