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

		var resize = null;
		var close = null;

		return (
			<div data-am-filter="">
				
				<div className="top">
					<h2 className="heading">{this.props.title}</h2>
					{this._getCloseControl()}
					{this._getResizeControl()}
				</div>

				<div className={this.state.minimized ? 'content minimized clearfix' : 'content clearfix'}>
					{this.props.children}
				</div>

			</div>
		);

	},

	_onResizeClick: function(){
		this.setState({minimized: !this.state.minimized});
	},

	_getResizeControl: function(){
		if(this.props.preventResize) return null;
		return (
			<button data-am-button="icon" onClick={this._onResizeClick}>
				<i className={this.state.minimized ? 'icon-resize-full' : 'icon-resize-small'}></i>
			</button>
		);
	},

	_getCloseControl: function(){
		if(this.props.preventClose) return null;
		return (
			<button data-am-button="icon" onClick={this.props.onClose}><i className="icon-cancel"></i></button>
		);
	}

});