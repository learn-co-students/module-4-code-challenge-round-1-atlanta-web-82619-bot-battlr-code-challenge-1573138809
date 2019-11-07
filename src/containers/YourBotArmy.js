import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    // console.log(this.props)
    const robot = this.props.army.map((oneRobot) => 
    
    
      <BotCard
    
      bot={oneRobot} 
       
      key={oneRobot.id} 
      viewBot={this.setCurrentBot}
      handleClick={this.props.delBot} />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {robot}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;