$(function(){
	 function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
	var Request = new Object();
	Request = GetRequest();
	console.log(Request.id);
	
//	开始请求后台数据
	let xhr = new XMLHttpRequest();
	let id=Request.id;
	xhr.onreadystatechange = ()=>{
		// 事件会执行4次，但只有在最后一次才确认获取到数据
		if(xhr.readyState === 4){
			let shopdata = JSON.parse(xhr.responseText);
			console.log(shopdata)
//			获取键值对
			var goodobj={};
			for(let key in shopdata[0]){
				goodobj[key]=shopdata[0][key];
			}
//			console.log(goodobj)

			// 2）根据数据生成html结构
//			顶部店名
			let servicecode=document.querySelector('#servicecode');
			let sp_txt=document.createElement('div');
			sp_txt.className="sp_txt";
			sp_txt.className="fl";
			sp_txt.innerHTML=shopdata.map(shops=>{
				console.log(shops)
				return`
				<p class="sp_name">${shops.trade_name}</p>
				<p class="sp_sales">销量<em class="shop_sales">15851</em>&nbsp;|&nbsp;粉丝<em class="shop_fans">5363</em></p>
				`
			}).join('');
			
			// 写入页面
			servicecode.appendChild(sp_txt);
			
//			左边页面小图标
			let ul=document.querySelector('#bxslider');
			let li_left=document.createElement('li');
			li_left.className="opacity"
			li_left.innerHTML=shopdata.map(shops=>{
				console.log(shops)
				return`
				<div class="small"> <img src="${shops.imgurl}" alt=""  /></div>
				`
			}).join('');
			
			// 写入页面
			ul.appendChild(li_left);
			
			//放大镜的生成
			let content_zoom=document.querySelector('#content_zoom');
			let fdj=document.querySelector('.goods');
			let img=fdj.children[0];
			img.src=shopdata[0].imgurl;
//			console.log(fdj)
//			fdj.innerHTML=shopdata.map(shops=>{
//				return`
//					<img src="${shops.imgurl}" data-big="${shops.imgurl}" />	
//						
//				`
//			}).join('');
//			写入页面
//			content_zoom.appendChild(fdj);
			
//			右边商品详情页
			let detailupper=document.querySelector('#detailupper');
			detailupper.innerHTML=shopdata.map(shops=>{
//				console.log(shops)
				return`<li class="shopslist" data-guid="${shops.id}">
				<div class="upper_title">${shops.shopName}</div>
						<div class="upper_xuyan">
							<span class="js_more CUSTOMER-SERVICE">了解更多&gt;&gt;</span>
						</div>
						<div class="upper_model clearfix">
						  <div class="fl upper_model_a"><span>型号:</span><span>T094.210.11.121.00</span></div>
						  <div class="fl upper_model_b"><span>编号:</span><span>48488</span></div>
						  <div class="fl upper_model_c"><span>品牌:</span><span>${shops.shopName}</span></div>
						  <div class="fr upper_model_d"><span>销量:</span><span>132</span></div>
						</div>
						<div class="atmosphere">
						    <a target="_blank" href="/topics/2018920birthday/">
						    	<img src="../images/detail_right.jpg" alt="">
						    </a>
						</div>
						<div class="upper_price">
						    <div class="upper_price_jiage clearfix">
						        <div class="upper_price_jiage_left fl">万表价</div>
						      <div class="upper_price_jiage_right fl">
						        <span class="upper_price_jiage_a">￥</span>
						        <span class="upper_price_jiage_b js_price">${shops.sale}</span>
						        <span class="upper_price_jiage_d">一口价</span>
						        <span class="upper_price_jiage_c">￥${shops.price}</span>
						      </div>
						    </div>
						
						  <div class="upper_stages clearfix">
						    <div class="upper_stages_left fl">分期</div>
						    <div class="upper_stages_right fl">
						      <span class="upper_stages_a CUSTOMER-SERVICE">每月<i class="js_stages">${shops.price/12}</i>元×12期</span>
						    </div>
						  </div>
						</div>
						
						<div class="upper_give clearfix">
						    <div class="upper_give_left fl">配送</div>
						    <div class="upper_give_right fl"><i>（顺丰包邮）</i>预计2-8个工作日内发货</div>
						</div>
						
						<div class="upper_style clearfix">
						  <div class="upper_style_left fl">款式</div>
						  <div class="upper_style_right fl">
						    <a href="/goods/48488" class="fl upper_style_right_action">
						      <span class="upper_style_right_img fl"><img src="" alt=""></span>
						      <span class="upper_style_right_text fl">${shops.color}</span>
						      <div class="tag icon-a-o-arrow-black"></div>
						    </a>
						  </div>
						</div>
						
						<div class="upper_number clearfix">
							  <div class="upper_number_left fl">数量</div>
							  <div class="upper_number_right fl">
							    <div class="upper_number_right_a fl">
							      <span class="fl reduce" data-type="subtract">-</span>
							      <input type="text" value="${shops.num}" class="cont fl" id="count">
							      <span class="fl plus" data-type="add">+</span>
							    </div>
							</div>
						</div>
						
						<div class="upper_button clearfix">
						    <div class="upper_button_a fl js_purchase" data-type="buyquick">
							    立即购买
							</div>
						    <div class="upper_button_b fl" id="js_cart" data-type="buybtn">
						    	加入购物车
						    </div>
						    </li>
						</div>
				
				`
			}).join('');
			
			
		
	}
		//		获取传过来的数据
//		console.log(shopdata)
		
		

}
//			location.reload();
			// 2）配置参数，建立与服务器的连接
			xhr.open('get','../api/shopdetail/shopdetail.php?id='+id,true);

			// 3）发送请求
			xhr.send();
//		点击按钮进行数量加减
//		获取传过来的数据
		
		var detailupper=document.querySelector('#detailupper');
			// 用于保存所有商品
		var goodslist = Cookie.get('goodslist');//[{},{}], ''
		if(goodslist === ''){
			goodslist = [];
		}else{
			goodslist = JSON.parse(goodslist);
		}
		
		detailupper.onclick=function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
//			console.log(target)
			if(target.getAttribute('data-type')==='subtract'){
//				console.log(target.nextSibling.nextSibling)
				var num=target.nextSibling.nextSibling.value;
				console.log(num)
				num--;
				if(num==0){
					num=1;
				}
				target.nextSibling.nextSibling.value=num;
			}
			
			if(target.getAttribute('data-type')==='add'){
//				console.log(target.nextSibling.nextSibling)
				var num=target.previousElementSibling.value;
//				console.log(num)
				num++;
				target.previousElementSibling.value=num;
			}

//			传送数据给数据库
			let getnum=new XMLHttpRequest();
			// 2）配置参数，建立与服务器的连接
			xhr.open('get','../api/shopdetail/getnum.php?num='+num+'&id='+id,true);

			// 3）发送请求
			xhr.send();
			
//				console.log(goodobj);
//				var imgurl=goodobj.imgurl;
//				var id=goodobj.id;
//				var shopName=goodobj.shopName;
//				var num=goodobj.num;
//				var sale=goodobj.sale;
//				var trade_name=goodobj.trade_name;

			if(target.getAttribute('data-type')==='buyquick'){
//				按钮点击的时候判断是否已经登录
				username = Cookie.get('username');
				var nowlogin=document.querySelector('#nowloginindetail');
				if(nowlogin.innerText=='请登录'){
					alert('请先登录');
					location.href="../html/login.html";
					return;
				}else{
					location.href="../html/quickbuycar.html?id="+id;
					return;
				}
			}
			
			if(target.getAttribute('data-type')==='buybtn'){
				
//				按钮点击的时候判断是否已经登录
				username = Cookie.get('username');
				var nowlogin=document.querySelector('#nowloginindetail');
				if(nowlogin.innerText=='请登录'){
					alert('请先登录');
					location.href="../html/login.html";
					return;
				}
				
//			var guid = currentLi.getAttribute('data-guid');
					// 获取当前li
				var currentLi = target.parentNode.parentNode;
				console.log(currentLi)
				var guid = currentLi.getAttribute('data-guid');
				var imgurl=currentLi.parentNode.previousElementSibling.children[0].children[0].children[0].children[0].src;
				var shopName=currentLi.children[0].innerText;
				var color=currentLi.children[6].children[1].children[0].children[1].innerText;
				var sale=currentLi.children[4].children[0].children[1].children[1].innerText;
				var num=currentLi.children[7].children[1].children[0].children[1].value;
				var trade_name=currentLi.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.children[1].children[0].children[0].children[1].children[2].children[0].innerText;
				console.log(trade_name)
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){
						// 如果goodslist中有一个商品跟当前guid一样，说明为多次添加
						goodslist[i].qty++;
						break;
					}
				}
				// 循环跑完，无法找到相同id，说明为第一次添加
				// 如何判断循环跑完
				if(i===goodslist.length){

					// 获取商品信息，并写入对象
					var mygoods = {
						id:guid,//guid商品唯一标识
						imgurl:imgurl,
						shopName:shopName,
						color:color,
						sale:sale,
						trade_name:trade_name,

						// 商品数量：第一次天添加（为1），多次添加（在原来基础上+1）
						qty:num
					}

					// 把当前商品写入数组
					goodslist.push(mygoods);
				}
				Cookie.set('goodslist',JSON.stringify(goodslist));
					
					
////				传送数据给数据库
//					let goodsdata=new XMLHttpRequest();
//				// 2）配置参数，建立与服务器的连接
//					goodsdata.open('get','../api/car/buycar.php?num='+num+'&id='+id+'&imgurl='+imgurl+'&shopName='+shopName+'&sale='+sale+'&trade_name='+trade_name,true);
//					// 3）发送请求
//					goodsdata.send();
				alert('添加成功');location.href="../html/buycar.html"
				}
				
		}
		
		//	登录区域获取cookie
		username = Cookie.get('username');
		console.log(username);
		var nowlogin=document.querySelector('#nowloginindetail');
		nowlogin.innerText=username;
});
