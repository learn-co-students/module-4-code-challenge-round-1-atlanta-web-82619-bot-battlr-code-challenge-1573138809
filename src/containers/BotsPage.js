import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
const api = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    robots: [],
    myRobots: []
  }

  componentDidMount () { 
    fetch(api)
    .then(res => res.json())
    .then(bots_fetch => 
      this.setState({robots: bots_fetch}))
  }

  favRobot = (robot) => {
    this.setState((prevState)=> {
      return {
        myRobots: [robot,...prevState.myRobots]
      }
    })
  }

  // favRobot = (robot) => {
  //   console.log(robot) }

  delRobot = (robot) => {
    let index = this.state.myRobots.indexOf(robot)
    let robots = [...this.state.myRobots]
    robots.splice(index,1)
    this.setState({
      myRobots: robots
    })
  }
  //start here with your code for step one

  render() {
    // console.log('main page' ,this.state.robots)
    return (
      <div>
        <YourBotArmy army={this.state.myRobots} delBot={this.delRobot}  />
        <BotCollection robots={this.state.robots} favRobot={this.favRobot} />
      </div>
    );
  }

}

export default BotsPage;
