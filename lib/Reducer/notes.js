Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');var _uuid=require('uuid');var _uuid2=_interopRequireDefault(_uuid);var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var notes=function notes(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];var notesViewMode=state.getIn(['notes','viewMode']);switch(action.type){case'NOTES_VIEWMODE':switch(action.viewMode){case'学院笔记':state=state.setIn(['notes','viewMode'],'academyNotes');return state.setIn(['notes','academyNotes','viewMode'],'main');case'思维碎片':state=state.setIn(['notes','viewMode'],'winkThought');return state.setIn(['notes','winkThought','viewMode'],'main');case'闪念捕捉':{var notesId=(0,_uuid2.default)();state=state.setIn(['notes','title'],'闪念捕捉');state=state.setIn(['notes','viewMode'],'winkThought');state=state.updateIn(['notes','winkThought','notes'],function(value){return value.concat((0,_immutable.OrderedMap)(_defineProperty({},notesId,(0,_immutable.Map)({title:'',text:'',time:(0,_moment2.default)().format('YYYY-MM-DD hh:mm')}))));});state=state.setIn(['notes','winkThought','notesId'],notesId);return state.setIn(['notes','winkThought','viewMode'],'edit');}default:return state;}case'NOTES_DELETE':return state.deleteIn(['notes',state.getIn(['notes','viewMode']),'notes',action.notesId]);case'NOTES_CREATE_ACADEMYNOTES':{var academyNotes=state.getIn(['academy','content',state.getIn(['academy','order']),'operation','notes']);if(!state.getIn(['notes','academyNotes','notes']).find(function(value){return value.get('order')===state.getIn(['academy','order']);})){return state.updateIn(['notes','academyNotes','notes'],function(value){return value.concat((0,_immutable.OrderedMap)(_defineProperty({},(0,_uuid2.default)(),(0,_immutable.Map)({title:academyNotes.get('title'),text:academyNotes.get('text'),order:state.getIn(['academy','order']),time:(0,_moment2.default)().format('YYYY-MM-DD hh:mm')}))));});}var orderId=state.getIn(['notes','academyNotes','notes']).findKey(function(value){return value.get('order')===state.getIn(['academy','order']);});return state.setIn(['notes','academyNotes','notes',orderId],(0,_immutable.Map)({title:academyNotes.get('title'),text:academyNotes.get('text'),order:state.getIn(['academy','order']),time:(0,_moment2.default)().format('YYYY-MM-DD hh:mm')}));}case'WINKTHOUGHT_EDIT_COMFIRM':state=state.setIn(['notes','title'],action.title);return state.setIn(['notes','winkThought','viewMode'],'noteDetail');case'NOTES_SHARE_PRESS':return state.setIn(['notes',notesViewMode,'viewMode'],'share');case'NOTES_CHANGE_TITLE':state=state.setIn(['notes','winkThought','notes',action.notesId,'time'],(0,_moment2.default)().format('YYYY-MM-DD hh:mm'));return state.setIn(['notes','winkThought','notes',action.notesId,'title'],action.value);case'NOTES_CHANGE_TEXT':state=state.setIn(['notes','winkThought','notes',action.notesId,'time'],(0,_moment2.default)().format('YYYY-MM-DD hh:mm'));return state.setIn(['notes','winkThought','notes',action.notesId,'text'],action.value);case'NOTES_ACADEMYNOTES_EDIT':state=state.set('viewMode','academy');state=state.setIn(['academy','viewMode'],'section');state=state.setIn(['academy','order'],action.order);state=state.setIn(['academy','content',action.order,'viewMode'],'operation');state=state.setIn(['academy','content',action.order,'operation','viewMode'],'notes');return state.setIn(['academy','content',action.order,'operation','notes'],(0,_immutable.Map)({title:action.title,text:action.text}));case'NOTES_WINKTHOUGHT_EDIT':state=state.setIn(['notes','title'],action.title);state=state.setIn(['notes','winkThought','viewMode'],'edit');return state.setIn(['notes','winkThought','notesId'],action.notesId);case'NOTES_CHECK':{var order=state.getIn(['notes','academyNotes','notes',action.contentName,'order']);state=state.set('viewMode','academy');state=state.setIn(['academy','viewMode'],'main');return state.setIn(['academy','order'],order);}case'NOTES_PIECE_2_DETAIL':state=state.setIn(['notes','title'],action.title);state=state.setIn(['notes',action.viewMode,'viewMode'],'noteDetail');return state.setIn(['notes',action.viewMode,'notesId'],action.notesId);default:return state;}};exports.default=notes;