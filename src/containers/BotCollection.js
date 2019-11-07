import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  

  render(){
	// console.log(this.props.robots)
	const robotz = this.props.robots.map((oneRobot) => 
		<BotCard 
		bot={oneRobot} 
		
		key={oneRobot.id} 
		viewBot={this.setCurrentBot}
		handleClick={this.props.favRobot} />)
	
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			
		  
		  {robotz}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
