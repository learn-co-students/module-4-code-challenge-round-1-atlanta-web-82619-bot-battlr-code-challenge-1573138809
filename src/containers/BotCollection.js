import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		  {this.props.bots.map(bot => {
				  return <BotCard key={bot.id} enlistBot={this.props.enlistBot} bot={bot}/>
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
