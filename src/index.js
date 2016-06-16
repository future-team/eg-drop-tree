require('../css/index.less');
import MultiDropDown from './components/MultiDropDownMenu.js';//下拉层级菜单

if(window.Eagleui){
    Eagleui.MultiDropDown = MultiDropDown;
}else{
    window.MultiDropDown=MultiDropDown
};
module.exports=MultiDropDown;

