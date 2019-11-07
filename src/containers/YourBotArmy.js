import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {props.myBots.map(bot => <BotCard bot={bot} handleClick={props.handleClick}/> )}
          </div>
        </div>
      </div>
    );
};

export default YourBotArmy;
