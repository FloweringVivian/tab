// JavaScript Document
/* 标签切换 */
	/*
		tabclass  ： 标签切换的总容器的class
		tab_title ： 标签容器的class
		tab_body  ： 标签内容容器的class
		tab_list  ： 标签实体的class
	*/

function myTab(tabclass){
	var tab_title = $(tabclass).find(".tab-title");
	var tab_body = $(tabclass).find(".tab-body");
	var tab_listIndex = 0;
	var _this = this;
	_this.tabclass = tabclass;
	tab_title.find(".tab-btn").click(function(){
		tab_listIndex =$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		tab_body.find(".tab-list").eq(tab_listIndex).show().siblings().hide();
	});
}
$(function(){
	var recTab = new myTab(".tab");//标签切换--.tab可以自定义，其他的最好都固定，最好这些class名跟样式的class名区分开
})
