import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';
let botDetailCard;

class BotCollection extends React.Component {
	//your code here
	constructor(props) {
    super(props);
    this.state = {
      showDetails: false
		}
	}

	goBack = () => {
		const newState = !this.state.showDetails
    this.setState({
      showDetails: newState
		})
	}

	showDetails = (bot) => {
    const newState = !this.state.showDetails
    this.setState({
      showDetails: newState
		})
		botDetailCard = <BotSpecs bot={bot} goBack={this.goBack} enlist={this.props.addBot} />;

	}



  render(){
		const botCards = this.props.bots.map(bot => (
			<BotCard key={bot.id} bot={bot} addBot={this.props.addBot} showDetails={this.showDetails}  />
		))

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.state.showDetails ? botDetailCard : botCards }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
