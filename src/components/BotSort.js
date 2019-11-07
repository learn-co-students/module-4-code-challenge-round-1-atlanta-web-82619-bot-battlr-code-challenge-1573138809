import React from "react";

const BotSort = props => {
  const { bot } = props;
  return (
    <div>
        <button onClick={() => {props.sortBy('health')}}>Sort by Health</button>
        <button onClick={() => {props.sortBy('damage')}}>Sort by Damage</button>
        <button onClick={() => {props.sortBy('armor')}}>Sort by Armor</button>
    </div>
  );

};

export default BotSort;
