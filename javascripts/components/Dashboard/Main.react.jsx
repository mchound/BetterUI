var React = require('react');
var Filter = require('./Filter.react.jsx');
var BaseFilter = require('./BaseFilter.react.jsx');
var TeamFilter = require('./TeamFilter.react.jsx');

module.exports = React.createClass({

	render: function(){

		return (
			<div data-am-dashboard-main>
			
				<Filter title="Base Filter" preventClose={true}>
					<BaseFilter className="margin-bottom-half" />
				</Filter>

				<div data-am-vertical-divider="" className="margin-bottom">
					<div className="section"><h2>T 1</h2></div>
					<div className="section"><h2>T 2</h2></div>
				</div>

				<div data-am-grid="row">

					<div data-am-grid-col="sm-6">
						<Filter title="T Filter" ><TeamFilter /></Filter>
					</div>

					<div data-am-grid-col="sm-6">
						<Filter title="T Filter" ><TeamFilter /></Filter>
					</div>

				</div>

			</div>
		);

	}

});