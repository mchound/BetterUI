var React = require('react');
var Dashboard = require('./components/Dashboard/Dashboard.react.jsx');
window.onload = function () {
	React.render(React.createElement(Dashboard), document.body);
};