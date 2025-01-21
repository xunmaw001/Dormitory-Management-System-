
var projectName = '基于H5的宿舍管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '宿舍信息',
	url: './pages/sushexinxi/list.html'
}, 
{
	name: '缺勤记录',
	url: './pages/queqinjilu/list.html'
}, 
{
	name: '宿舍投诉',
	url: './pages/sushetousu/list.html'
}, 
{
	name: '宿舍公告',
	url: './pages/sushegonggao/list.html'
}, 

{
	name: '校园资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/phpc0l92/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"宿管","menuJump":"列表","tableName":"suguan"}],"menu":"宿管管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"宿舍楼号","menuJump":"列表","tableName":"sushelouhao"}],"menu":"宿舍楼号管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"宿舍号","menuJump":"列表","tableName":"sushehao"}],"menu":"宿舍号管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","入住","退宿"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除","转宿","报表"],"menu":"入住申请","menuJump":"列表","tableName":"ruzhushenqing"}],"menu":"入住申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"退宿申请","menuJump":"列表","tableName":"tuisushenqing"}],"menu":"退宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除","审核"],"menu":"转宿申请","menuJump":"列表","tableName":"zhuansushenqing"}],"menu":"转宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"缺勤记录","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"宿舍公告","menuJump":"列表","tableName":"sushegonggao"}],"menu":"宿舍公告管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","入住","退宿"],"menu":"宿舍信息列表","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"缺勤记录列表","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"宿舍投诉列表","menuJump":"列表","tableName":"sushetousu"}],"menu":"宿舍投诉模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"宿舍公告列表","menuJump":"列表","tableName":"sushegonggao"}],"menu":"宿舍公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","入住","退宿"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","转宿"],"menu":"入住申请","menuJump":"列表","tableName":"ruzhushenqing"}],"menu":"入住申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"退宿申请","menuJump":"列表","tableName":"tuisushenqing"}],"menu":"退宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改"],"menu":"转宿申请","menuJump":"列表","tableName":"zhuansushenqing"}],"menu":"转宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"缺勤记录","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"宿舍投诉","menuJump":"列表","tableName":"sushetousu"}],"menu":"宿舍投诉管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","入住","退宿"],"menu":"宿舍信息列表","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"缺勤记录列表","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"宿舍投诉列表","menuJump":"列表","tableName":"sushetousu"}],"menu":"宿舍投诉模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"宿舍公告列表","menuJump":"列表","tableName":"sushegonggao"}],"menu":"宿舍公告模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","新增","修改"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","审核","报表","删除"],"menu":"入住申请","menuJump":"列表","tableName":"ruzhushenqing"}],"menu":"入住申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","审核","删除"],"menu":"退宿申请","menuJump":"列表","tableName":"tuisushenqing"}],"menu":"退宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"转宿申请","menuJump":"列表","tableName":"zhuansushenqing"}],"menu":"转宿申请管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"缺勤记录","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","删除"],"menu":"宿舍投诉","menuJump":"列表","tableName":"sushetousu"}],"menu":"宿舍投诉管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","入住","退宿"],"menu":"宿舍信息列表","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"缺勤记录列表","menuJump":"列表","tableName":"queqinjilu"}],"menu":"缺勤记录模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"宿舍投诉列表","menuJump":"列表","tableName":"sushetousu"}],"menu":"宿舍投诉模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"宿舍公告列表","menuJump":"列表","tableName":"sushegonggao"}],"menu":"宿舍公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"宿管","tableName":"suguan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
