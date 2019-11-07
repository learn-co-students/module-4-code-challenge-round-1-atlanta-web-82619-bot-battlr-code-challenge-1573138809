import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...


  render(){
    const yourBotCards = this.props.yourBots.map(yourBot => (
      <BotCard key={yourBot.id} bot={yourBot} addBot={this.props.addBot} />
    ))

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {yourBotCards}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
