"use strict";function fillZeroPrefix(e){return e<10?"0"+e:e}var leftTimer={startTime:0,count:0,interval:1e3,oneday:86400,str:"",day:0,hour:0,minute:0,second:0,showDay:!1,showHour:!1,showMinute:!1,showSecond:!1,offset:0,nextTime:0,run:function(e,o,n){var r=this;r.startTime=(new Date).getTime(),r.nextTime=r.interval,o=o||"D天H时M分S秒",n=n||function(){},e.each(function(){var e=$(this),t=parseInt(e.html());e.html("启动中..."),r.countdown(t,e,o,n)})},countdown:function(e,t,o,n){var r=this;r.offset=(new Date).getTime()-(r.startTime+r.count*r.interval),r.nextTime=r.interval-r.offset,r.showDay=-1!=o.indexOf("D"),r.showHour=-1!=o.indexOf("H"),r.showMinute=-1!=o.indexOf("M"),r.showSecond=-1!=o.indexOf("S"),window.setTimeout(function(){if(--e<0)return n(t),!1;r.day=Math.floor(e/r.oneday),r.hour=Math.floor((e-r.day*r.oneday)/3600),r.minute=Math.floor((e-r.day*r.oneday-3600*r.hour)/60),r.second=e-r.day*r.oneday-3600*r.hour-60*r.minute,r.showDay||(r.hour+=24*r.day),r.showHour||(r.minute+=60*r.hour),r.showMinute||(r.second+=60*r.minute),r.str="",r.str=o.replace("D",fillZeroPrefix(r.day)),r.str=r.str.replace("H",fillZeroPrefix(r.hour)),r.str=r.str.replace("M",fillZeroPrefix(r.minute)),r.str=r.str.replace("S",fillZeroPrefix(r.second)),t.html(r.str),r.count++,r.countdown(e,t,o,n)},r.nextTime)}};