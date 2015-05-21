var React = require('react');
var FancySelect = require('../Common/FancySelect.react.jsx');
var Config = require('../../config');

module.exports = React.createClass({

	getInitialState: function(){
		return {
			minimized: false
		}
	},

	render: function(){

		return (
			<div data-am-filter="base">
				
				<div className="top">
					<h2 className="heading">Base Filter</h2>
					<button data-am-button="icon"><i className="icon-cancel"></i></button>
					<button data-am-button="icon" onClick={this._onResizeClick}>
						<i className={this.state.minimized ? 'icon-resize-full' : 'icon-resize-small'}></i>
					</button>
				</div>

				<div className={this.state.minimized ? 'content minimized clearfix' : 'content clearfix'}>
					<div className="pull-left">
						<FancySelect items={Config.countries} label="Select country" order='ascending' multiple={false} searchable={false} onChange={this._onCountryChange} />
					</div>
					<div className="pull-left margin-left-half">
						<FancySelect items={Config.leagues} label="Select leagues" order='ascending' multiple={true} searchable={false} onChange={this._onLeagueChange} />
					</div>
					<div className="pull-left margin-left-half">
						<FancySelect items={Config.seasons} label="Select seasons" order='descending' multiple={true} searchable={false} onChange={this._onSeasonChange} />
					</div>
				</div>

			</div>
		);

	},

	_onResizeClick: function(){
		this.setState({minimized: !this.state.minimized});
	},

	_onCountryChange: function(country){
		console.log(country);
	},

	_onLeagueChange: function(leagues){
		console.log(leagues);
	},

	_onSeasonChange: function(seasons){
		console.log(seasons);
	}

});