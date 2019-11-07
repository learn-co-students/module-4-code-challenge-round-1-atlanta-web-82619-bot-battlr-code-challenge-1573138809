import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		const botCards = this.props.bots.map(bot => (
			<BotCard key={bot.id} bot={bot} addBot={this.props.addBot} />
		))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
