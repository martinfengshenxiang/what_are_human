Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Component/Header/Menu/menuOperation.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactRedux=require('react-redux');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var MenuOperation=function MenuOperation(_ref){var viewMode=_ref.viewMode,imageSource=_ref.imageSource,name=_ref.name,press=_ref.press;return _react2.default.createElement(_reactNative.TouchableOpacity,{onPress:press({viewMode:viewMode}),__source:{fileName:_jsxFileName,lineNumber:13}},_react2.default.createElement(_reactNative.View,{style:styles.row,__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement(_reactNative.View,{style:{width:'20%',justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement(_reactNative.Image,{style:{height:25,width:25},source:imageSource,__source:{fileName:_jsxFileName,lineNumber:16}})),_react2.default.createElement(_reactNative.View,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement(_reactNative.Text,{style:{fontSize:20,color:'#6d6d6d'},__source:{fileName:_jsxFileName,lineNumber:19}},name))));};MenuOperation.propTypes={viewMode:_propTypes2.default.string.isRequired,imageSource:_propTypes2.default.number.isRequired,name:_propTypes2.default.string.isRequired,press:_propTypes2.default.func.isRequired};var styles=_reactNative.StyleSheet.create({row:{height:31,width:'100%',borderBottomWidth:1,borderStyle:'solid',borderColor:'#6d6d6d',flexDirection:'row',justifyContent:'center',alignItems:'center'},text:{width:'80%',alignItems:'center',justifyContent:'center'}});var mapDispatchToProps=function mapDispatchToProps(dispatch){return{press:function press(_ref2){var viewMode=_ref2.viewMode;return function(){dispatch({type:'CHANGE_MENU_VIEWMODE',viewMode:viewMode});dispatch({type:'CHANGE_VIEWMODE',viewMode:'menu'});dispatch({type:'MENU_VISIBILITY'});};}};};exports.default=(0,_reactRedux.connect)(null,mapDispatchToProps)(MenuOperation);