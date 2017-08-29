import React from 'react';

import TitleBar from './Titlebar';
import AddPlayer from './Addplayer';
import PlayerList from './Playerlist';

import PropTypes from 'prop-types';

export default class App extends React.Component {
	render(){
		return (
			<div>
		      <TitleBar title={this.props.title}/>
		      <PlayerList players ={this.props.players}/>
		      <AddPlayer/>
		    </div>
		)
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}