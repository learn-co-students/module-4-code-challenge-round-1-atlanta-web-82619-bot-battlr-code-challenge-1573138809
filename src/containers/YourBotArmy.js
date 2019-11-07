import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => {
              return (<div key={bot.id} onClick={() => {this.props.discharge(bot)}}>
                <BotCard bot={bot} />
              </div>)
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
