var React = require('react');
var FancySelect = require('../Common/FancySelect.react.jsx');
var Config = require('../../config');

module.exports = React.createClass({

	getInitialState: function(){
		return {
			
		}
	},

	render: function(){

		return (
			<div data-am-filtercontent="base">

				<div data-am-grid="row">

					<div data-am-grid-col-sm="8 mb o-2" data-am-grid-col-md="4 o-0 mb-0" data-am-grid-col-lg="3 o-1 mb-0">
						<FancySelect items={Config.countries} label="Select country" order='ascending' multiple={false} searchable={false} onChange={this._onCountryChange} />
					</div>

					<div data-am-grid-col-sm="8 mb o-2" data-am-grid-col-md="4 o-0 mb-0" data-am-grid-col-lg="3 o-0 mb-0">
						<FancySelect items={Config.leagues} label="Select leagues" order='ascending' multiple={true} searchable={false} onChange={this._onLeagueChange} />
					</div>

					<div data-am-grid-col-sm="8 o-2" data-am-grid-col-md="4 o-0" data-am-grid-col-lg="3 o-0 mb-0">
						<FancySelect items={Config.seasons} label="Select seasons" order='descending' multiple={true} searchable={false} onChange={this._onSeasonChange} />
					</div>

				</div>

			</div>
		);

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