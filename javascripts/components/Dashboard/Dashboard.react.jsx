var React = require('react');
var Header = require('./Header.react.jsx');
var Main = require('./Main.react.jsx');
var Footer = require('./Footer.react.jsx');

module.exports = React.createClass({

	render: function(){

		return (
			<div data-am-dashboard>
				<Header />
				<Main />
				<Footer />
			</div>
		);

	}


});