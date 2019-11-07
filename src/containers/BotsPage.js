import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const API = ' https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      army: []
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
    this.setState({
      army: [...this.state.army, bot]
    })
  }

  discharge = (botId) => {
    let temp = [...this.state.army];
    temp.splice(temp.findIndex(bot => bot.id === botId));

    this.setState({
      army: temp
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} discharge={this.discharge} />
        <h1>Bots to Enlist:</h1>
        <BotCollection bots={this.state.bots} enlist={this.enlist} />
      </div>
    );
  }

}

export default BotsPage;
