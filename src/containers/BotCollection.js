import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {props.bots.map(bot => <BotCard bot={bot} handleClick={props.handleClick}/>)}
    		</div>
  	  </div>
  	);
};

export default BotCollection;
