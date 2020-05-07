//DOM variables
var menu_item_1 = document.getElementById("menu_item_1");
var menu_item_2 = document.getElementById("menu_item_2");
var menu_items = document.getElementsByClassName("menu_items");
var search_icon = document.getElementById("search_icon");
var magnify = document.getElementById("magnify");
var glass_stick = document.getElementById("glass_stick");
var left_menus_0 = document.getElementsByClassName("left_menus")[0];
var left_menus_1 = document.getElementsByClassName("left_menus")[1];
var left_menus_2 = document.getElementsByClassName("left_menus")[2];
var left_menu_id = document.getElementById("left_menu");
var title = document.getElementById("title");
var menu = document.getElementById("menu");
//..........................................................................
//mouse hover over search elements in title bar
search_icon.onmouseenter = function() {
	magnify.style.border="3px solid rgba(255,255,255,0.5)";
	glass_stick.style.border="3px solid #ffffff";

};

search_icon.onmouseleave = function() {
	magnify.style.border="3px solid rgba(0,0,0,0.5)";
	glass_stick.style.border="3px solid #000000";

};

//...........................................................................
//mouse hover over menu elements in title bar

left_menu_id.onmouseenter = function() {
	left_menus_0.style.background="#ffffff";
	left_menus_1.style.background="#ffffff";
	left_menus_2.style.background="#ffffff";
};

left_menu_id.onmouseleave = function() {
	left_menus_0.style.background="#000000";
	left_menus_1.style.background="#000000";
	left_menus_2.style.background="#000000";
};
//.............................................................................
// mouse hover over title

title.onmouseenter = function() {
	title.style.color="#ffffff";
};

title.onmouseleave = function() {
	title.style.color="#000000";
};
//.............................................................................
// open and close menu

left_menu_id.onmouseenter = function() {
	menu.style.animation="menu_open 0.3s forwards";
	menu_item_1.style.display = "block";
	menu_item_2.style.display = "block";
	left_menus_0.style.animation = "left_menu_0_open 0.3s linear forwards";
	left_menus_1.style.animation = "left_menu_1_open 0.3s linear forwards";
	left_menus_2.style.animation = "left_menu_2_open 0.3s linear forwards";
};

left_menu_id.onclick = function() {
	menu.style.animation="menu_close 0.3s forwards";
	menu_item_1.style.display = "none";
	menu_item_2.style.display = "none";	
	left_menus_0.style.animation = "left_menu_0_close 0.3s forwards";
	left_menus_1.style.animation = "left_menu_1_close 0.3s forwards";
	left_menus_2.style.animation = "left_menu_2_close 0.3s forwards";
};