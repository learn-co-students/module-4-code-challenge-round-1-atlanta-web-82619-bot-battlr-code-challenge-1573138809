import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
const API =  "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(bots => this.setState({ bots }))
  }

  addBot = (bot) => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      })
    } else {
      this.setState({
        yourBots: [...this.state.yourBots.filter(yourBot => yourBot.id !== bot.id )]
      })
    }

  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} addBot={this.addBot} />
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
