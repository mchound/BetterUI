var React = require('react');
var BaseFilter = require('./BaseFilter.react.jsx');

module.exports = React.createClass({

	render: function(){

		return (
			<div data-am-dashboard-main>
			
				<BaseFilter />

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-1"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-2"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-3"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-4"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-2"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-5"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-6"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-1"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-7"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-5"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-8"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-4"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-9"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-3"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-10"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-2"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-11"><div className="grid-test"></div></div>

					<div data-am-grid-col="xs-1"><div className="grid-test"></div></div>

				</div>

				<div data-am-grid="row" className="margin-bottom">

					<div data-am-grid-col="xs-12"><div className="grid-test"></div></div>

				</div>

			</div>
		);

	}


});