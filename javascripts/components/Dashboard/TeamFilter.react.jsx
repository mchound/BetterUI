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
					<div data-am-grid-col-sm="12 mb-half" data-am-grid-col-md="10 o-1" data-am-grid-col-lg="6 o-0" data-am-grid-col-xl="auto o-0">
						<FancySelect attributes={['xl-fixed']} items={Config.teams} label="Select team" order="ascending" multiple={false} searchable={true} onChange={this.props.onTeamChange} />
					</div>
					<div data-am-grid-col-sm="12" data-am-grid-col-md="10 o-1"  data-am-grid-col-lg="auto o-0">
						<button data-am-button="" className="stretch"><i className="icon-arrows-ccw"></i>Load for team</button>
					</div>
				</div>

			</div>
		);

	}

});