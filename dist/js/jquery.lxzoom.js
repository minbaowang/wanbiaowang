"use strict";!function(n){n.prototype.lxzoom=function(d){var u={width:400,height:400,position:"right",gap:15};return this.each(function(){var o=n.extend({},u,d),i=n(this);i.addClass("lx-zoom");var h,s,t,e,r=i.children("img"),f=n("<div/>").addClass("lx-bigzoom").appendTo("body");switch(o.position){case"left":t=i.offset().left-o.gap-o.width,e=i.offset().top;break;case"right":t=i.offset().left+r.outerWidth()+o.gap,e=i.offset().top;break;case"top":t=i.offset().left,e=i.offset().top-o.gap-o.height;break;case"bottom":t=i.offset().left,e=i.offset().top+r.outerHeight()+o.gap}f.css({width:o.width,height:o.height,top:e,left:t});var a=n("<div/>").addClass("zoom").appendTo(i);i.on("mouseover",function(){a.show(),f.show();var t=r.attr("src");f.empty(),s=n("<img/>").attr("src",t).appendTo(f);var e=new Image;e.src=t,e.onload=function(){h=s.outerWidth()/r.outerWidth(),a.css({width:o.width/h,height:o.height/h})}}).on("mouseout",function(){a.hide(),f.hide()}).on("mousemove",function(t){var e=t.pageX-a.outerWidth()/2-i.offset().left,o=t.pageY-a.outerHeight()/2-i.offset().top;e<0?e=0:e>r.outerWidth()-a.outerWidth()&&(e=r.outerWidth()-a.outerWidth()),o<0?o=0:o>r.outerHeight()-a.outerHeight()&&(o=r.outerHeight()-a.outerHeight()),a.css({left:e,top:o}),s.css({left:-e*h,top:-o*h})})}),this}}(jQuery);