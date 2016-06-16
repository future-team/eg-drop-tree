require('../css/index.less');
import MultiDropDownMenu from './components/MultiDropDownMenu.js';//下拉层级菜单

if(window.Eagleui){
    Eagleui.MultiDropDownMenu = MultiDropDownMenu;
}else{
    window.MultiDropDownMenu=MultiDropDownMenu
};
module.exports=MultiDropDownMenu;

