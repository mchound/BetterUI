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
			<div data-am-filtercontent="team">

				<div data-am-grid="row">
					<div data-am-grid-col="sm-12 mb-sm md-6">
						<FancySelect items={Config.teams} label="Select team" order="ascending" multiple={false} searchable={true} onChange={this.props.onTeamChange} />
					</div>
					<div data-am-grid-col="sm-12 md-6">
						<button data-am-button className="stretch">Load for selected team</button>
					</div>
				</div>

			</div>
		);

	}

});