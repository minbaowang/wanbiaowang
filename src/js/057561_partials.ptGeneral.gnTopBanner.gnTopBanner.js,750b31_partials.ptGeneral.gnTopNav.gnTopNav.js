!function(){$(".pt_top_slider").bxSlider({mode:"vertical",auto:!0,speed:800,pause:3e3,loop:!0,autoControls:!1,controls:!1,touchEnabled:!1,pager:!1}),$(".W_top_banner .close_slider").click(function(){$(this).addClass("h"),$(".W_top_banner").slideUp()}),$("img").wPreLoad({imgProcessAttr:"data-wpps"})}();
!function(){function e(){var e=this;this.getLoginInfo=function(){wb.updateIsLogin&&wb.updateIsLogin(),$.cookie().wTk&&wb.corsAjax({url:"/member/isLogin/",success:function(e){if(0===e.info.error){var o,t;e.data&&(t=e.data.nickName?e.data.nickName:e.data.buyerName,o="<a target='_blank' class='l_name' href='"+wb.fillUpUserModuleUrl("/member",{domain:wb.domains().pu})+"'>"+t+"</a><span class='l_txt'></span><em id='drop_out'>退出</em>",$(".W_pt_top .pt_top_login").html(o))}}})},this.dropOutLogin=function(){$("body").on("click","#drop_out",function(){wb.isIE(8)||wb.isIE(9)?wb.corsAjax({url:"/member/loginOut",success:function(e){e.info.error<1&&(layer.msg("退出成功",{time:2e3}),window.setTimeout(function(){window.location=wb.fillUpUserModuleUrl("/member/login",{domain:wb.domains().pu,referrer:location.href})},2100),$.cookie("order_confirm")&&$.removeCookie("order_confirm",{path:"/"}))}}):wb.corsAjax({type:"POST",url:"/member/loginOut",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){e.info.error<1&&(layer.msg("退出成功",{time:2e3}),window.setTimeout(function(){window.location=wb.fillUpUserModuleUrl("/member/login",{domain:wb.domains().pu,referrer:location.href})},2100),$.cookie("order_confirm")&&$.removeCookie("order_confirm",{path:"/"}))}})})},this.topTab=function(){var e=$(".W_pt_top .pt_top_others .wb_mobile ul li"),o=$(".W_pt_top .pt_top_others .a_hover");e.hover(function(){var e=$(this),o=e.index();e.addClass("tab_in").siblings().removeClass("tab_in"),e.parent().siblings().children().eq(o).show().siblings().hide()}),o.hover(function(){$(this).children("a").toggleClass("a_on").siblings(".wb_dropdown").stop().slideToggle("fast")})},this.cartBadge={val:function(e){var o=$(".W_pt_top .cart_line .cart_count i"),t=Number(o.text());return isNaN(Number(e))?t:e<=0?(o.text(0),o.parent().addClass("h"),o.parents(".cart_line").removeClass("has_cart"),e):(o.text(e),o.parent().removeClass("h"),void o.parents(".cart_line").addClass("has_cart"))}},this.getHeadCartNum=function(){wb.globalCart.getQuantity({success:function(o){e.cartBadge.val(o)}})},e.topTab(),e.getLoginInfo(),e.dropOutLogin(),e.getHeadCartNum()}$(function(){wbiao.extend(wbiao,{gnTopNav:new e});var o=$(".pt_top_others .dropdown_line .ntalk_after").attr("after-service-code");wb.afterCustomerService||wb.extend(wb,{afterCustomerService:new wb.WbCustomerService({customerServiceCode:o})}),wb.wbCustomerService||wb.extend(wb,{wbCustomerService:new wb.WbCustomerService}),$(".pt_top_others").on("click",".dropdown_line .ntalk_after",function(){wb.afterCustomerService&&wb.afterCustomerService.open()}),$(".pt_top_others").on("click",".dropdown_line .ntalk_pre",function(){wb.wbCustomerService&&wb.wbCustomerService.open()})})}();
