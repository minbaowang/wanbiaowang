!function(){function t(){!function(){var t=$(".nav_left_menu");if(t[0]){var n,e=t.is(":visible");e||$(".all_wb_txt").mouseenter(function(){clearTimeout(n),navigator.userAgent.indexOf("MSIE 6.0")>0?t.attr("style","display:inline;"):t.slideDown("fast")}).mouseleave(function(){n=setTimeout(function(){t.slideUp("fast")},300)}),t.on("mouseenter",".menu_box",function(){var t=$(this),e=t.find(".sub_menu"),i=t.find(".sub_menu .brand_list a img, .brand_ads img");e.show(),clearTimeout(n),i.each(function(){var t=$(this),n=t.attr("brand-logo");t.attr("src",n).removeAttr("brand-logo")})}).on("mouseleave",".menu_box",function(){$(this).find(".sub_menu").hide(),e||(n=setTimeout(function(){t.slideUp("fast")},300))})}}(),function(t){$(t).each(function(t){var n=$(this),e=n.attr("href").replace(/^(http:\/\/|https:\/\/)/,""),i=String(window.location.pathname),a=location.host+i;/(\/)$/.test(e)&&(/(\/)$/.test(i)||(a+="/")),e==a&&n.addClass("on")})}(".W_pt_nav .pt_nav_warp .pt_nav_right ul li a")}$(function(){wbiao.extend(wbiao,{gnHeadMenu:t()})})}();
!function(){function s(){var s=this;this.historyWord=function(s){var t=JSON.parse(localStorage.getItem("search_history")),a={keyWords:t?t.keyWords:[],_modified:166516161615};a.keyWords.indexOf(s)<0&&a.keyWords.unshift(s),a._modified=+new Date,localStorage.setItem("search_history",JSON.stringify(a))},this.inputSuggest=function(){var s=$(".W_pt_head .head_search .srh_ipt_new").val();s&&wb.corsAjax({subWbDomain:"gapi",url:"/pub/search/suggest/",data:{keyword:s},success:function(s){0==s.info.error&&($(".W_pt_head .head_search .suggest_word").html(s.html),$(".W_pt_head .head_search .suggest_word a").each(function(){var s,t=$(this);s=t.text(),t.attr("href","//"+wb.domains().www+"/shoubiao.html?w="+encodeURIComponent(s))}))}})},this.searchBtn=function(t){var a,o,e=$(".W_pt_head .searchForm .srh_ipt_new");a=$.trim(e.val())?e.val():e.siblings(".srh_ipt_txt").text(),o=wb.tools.setUrlParam(t,"w",encodeURIComponent(a)),t=="//"+wb.domains().www+"/shoubiao.html"&&s.historyWord(e.val()),window.open(o)},function(){wb.tools.getUrlParam("w")&&($(".W_pt_head .searchForm .srh_ipt_new").val(wb.tools.getUrlParam("w")),$(".searchForm .srh_ipt_txt").hide());var s=JSON.parse(localStorage.getItem("search_history")),t=[],a="",o=wb.domains().www;if(s){$(".srh_history").removeClass("h"),t=s.keyWords.slice(0,10);for(var e=0;e<t.length;e++)a=a+'<p class="his_p clearfix"><a target="_blank" href="//'+o+"/shoubiao.html?w="+encodeURIComponent(t[e])+'" class="his_a">'+t[e]+'</a><span class="icon-a-o-close04"></span></p>',$(".srh_history_hot .his_word").html(a)}}()}$(function(){wbiao.extend(wbiao,{gnHeader:new s}),wb.tools.getUrlParam("w")||$(".head_search .srh_ipt_new").val(""),$(".W_pt_head .head_search").on("click",".srh_history_hot .top_tips .clean_his",function(s){s.stopPropagation(),$(this).parents(".srh_history").addClass("h"),localStorage.removeItem("search_history")}).on("click",".srh_history_hot .his_p .icon-a-o-close04",function(s){s.stopPropagation(),$(this).parent(".his_p").remove(),0==$(".his_word .his_p").length&&$(".srh_history").addClass("h")}).on("click",".srh_btn",function(s){s.stopPropagation();var t="//"+wb.domains().www+"/shoubiao.html";/biaodai/.test(location.pathname)&&(t="//"+wb.domains().www+"/peijian/biaodai/"),wb.gnHeader.searchBtn(t)}).on("click",".srh_lab",function(s){s.stopPropagation(),$(this).find(".srh_ipt_new").focus(),$(".head_search .srh_history_hot").removeClass("h")}),$(document).click(function(){$(".head_search .srh_history_hot, .head_search .suggest_word").addClass("h")}),$(".W_pt_head .searchForm .srh_ipt_new").bind("input",function(){var s=$(this),t=$(".W_pt_head .head_right");s.val()?(s.siblings(".srh_ipt_txt").hide(),t.find(".srh_history_hot").addClass("h").siblings(".suggest_word").removeClass("h"),wb.gnHeader.inputSuggest()):(s.siblings(".srh_ipt_txt").show(),t.find(".srh_history_hot").removeClass("h").siblings(".suggest_word").addClass("h"))}).bind("keydown",function(s){if(13==s.which){s.preventDefault();var t="//"+wb.domains().www+"/shoubiao.html";$(".head_search .srh_history_hot, .head_search .suggest_word").addClass("h"),/biaodai/.test(location.pathname)&&(t="//"+wb.domains().www+"/peijian/biaodai/"),wb.gnHeader.searchBtn(t)}}).focus(function(){$(this).siblings(".srh_ipt_txt").addClass("h")}).blur(function(){$(this).siblings(".srh_ipt_txt").removeClass("h")}),$("#srh_wbiao").click(function(s){s.preventDefault(),wb.gnHeader.searchBtn("//"+wb.domains().www+"/shoubiao.html")}),$("#srh_shop").click(function(s){var t=$(".W_pt_head .wb_shop_msg").attr("shop-code");s.preventDefault(),wb.gnHeader.searchBtn("//"+wb.domains().www+"/shop/product/"+t)})})}();