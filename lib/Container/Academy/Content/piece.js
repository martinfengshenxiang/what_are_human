Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Container/Academy/Content/piece.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _reactRedux=require('react-redux');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _generateColor=require('../../../Action/generateColor');var _generateColor2=_interopRequireDefault(_generateColor);var _generateSize=require('../../../Action/generateSize');var _generateSize2=_interopRequireDefault(_generateSize);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _Dimensions$get=_reactNative.Dimensions.get('window'),width=_Dimensions$get.width;var Piece=function Piece(_ref){var light=_ref.light,fontSize=_ref.fontSize,order=_ref.order,title=_ref.title,press=_ref.press;return _react2.default.createElement(_reactNative.TouchableOpacity,{onPress:press({order:order}),__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement(_reactNative.View,{style:styles.main,__source:{fileName:_jsxFileName,lineNumber:17}},_react2.default.createElement(_reactNative.View,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement(_reactNative.Text,{style:[styles.title,{color:'#'+(0,_generateColor2.default)(166,216,light),fontSize:(0,_generateSize2.default)(fontSize,20)}],__source:{fileName:_jsxFileName,lineNumber:19}},order+'  '+title),_react2.default.createElement(_reactNative.Text,{style:styles.order,__source:{fileName:_jsxFileName,lineNumber:20}},'\u232A')),_react2.default.createElement(_reactNative.View,{style:styles.seperator,__source:{fileName:_jsxFileName,lineNumber:22}})));};Piece.propTypes={light:_propTypes2.default.number.isRequired,fontSize:_propTypes2.default.string.isRequired,order:_propTypes2.default.string.isRequired,title:_propTypes2.default.string.isRequired,press:_propTypes2.default.func.isRequired};var styles=_reactNative.StyleSheet.create({main:{width:width,height:80,alignItems:'center',backgroundColor:'transparent'},text:{height:79,width:width*0.9,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},order:{fontSize:25,color:'#ededed',width:width*0.2,textAlign:'center'},title:{fontSize:18,width:width*0.8,color:'#ededed'},seperator:{opacity:0.5,width:width*0.9,height:1,backgroundColor:'#aaa'}});var mapStateToProps=function mapStateToProps(state){return{light:state.getIn(['pageSet','light']),fontSize:state.getIn(['pageSet','fontSize'])};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{press:function press(_ref2){var order=_ref2.order;return function(){dispatch({type:'ACADEMY_PIECE_2_SECTION',order:order});};}};};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Piece);