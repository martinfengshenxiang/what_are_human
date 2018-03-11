Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Container/Academy/Content/content.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRedux=require('react-redux');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _main=require('./main');var _main2=_interopRequireDefault(_main);var _section=require('./section');var _section2=_interopRequireDefault(_section);var _operation=require('./operation');var _operation2=_interopRequireDefault(_operation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Content=function Content(_ref){var viewMode=_ref.viewMode,sectionViewMode=_ref.sectionViewMode;if(viewMode==='main'){return _react2.default.createElement(_main2.default,{__source:{fileName:_jsxFileName,lineNumber:10}});}if(sectionViewMode==='main'){return _react2.default.createElement(_section2.default,{__source:{fileName:_jsxFileName,lineNumber:13}});}return _react2.default.createElement(_operation2.default,{__source:{fileName:_jsxFileName,lineNumber:15}});};Content.propTypes={viewMode:_propTypes2.default.string.isRequired,sectionViewMode:_propTypes2.default.string.isRequired};var mapStateToProps=function mapStateToProps(state){return{viewMode:state.getIn(['academy','viewMode']),sectionViewMode:state.getIn(['academy','content',state.getIn(['academy','order']),'viewMode'])};};exports.default=(0,_reactRedux.connect)(mapStateToProps)(Content);