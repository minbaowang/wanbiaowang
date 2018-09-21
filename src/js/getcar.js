$(function(){
//	截取url参数,获得id
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
	
	
	
//	请求数据
	let car=new XMLHttpRequest();
	let id=Request.id;



	car.onreadystatechange = ()=>{
		// 事件会执行4次，但只有在最后一次才确认获取到数据
		if(car.readyState === 4){
			let cardata = JSON.parse(car.responseText);
			//	生成html结构
		let shopname=document.querySelector('#shopname1');
		shopname.innerHTML=cardata.map(cars=>{
			return`
                    店铺：<a href="javascript:;">${cars.trade_name}</a>
			`
		});
		
		let listcon=document.querySelector('#listcon');
		listcon.innerHTML=cardata.map(cars=>{
			return`
                <div class="list_img"><a href="javascript:;"><img src="${cars.imgurl}" alt=""></a></div>
                <div class="list_text"><a href="javascript:;">${cars.shopName}</a></div>
			`
		});
		
		let listinfo=document.querySelector('#listinfo');
		listinfo.innerHTML=cardata.map(cars=>{
			return`
                <p>${cars.color}</p>

			`
		});
		
		let listprice=document.querySelector('#listprice');
		listprice.innerHTML=cardata.map(cars=>{
			return`
                <p class="price">￥${cars.sale}</p>

			`
		});
		
		let listsum=document.querySelector('#listsum');
		listsum.innerHTML=cardata.map(cars=>{
			return`
                <p class="sum_price">￥${cars.sale}</p>

			`
		});
		}
	}
	// 2）配置参数，建立与服务器的连接
	car.open('get','../api/car/car.php?id='+id,true);

	// 3）发送请求
	car.send();
	//	登录区域获取cookie
		username = Cookie.get('username');
		console.log(username);
		var nowlogin=document.querySelector('#nowlogininquick');
		nowlogin.innerText=username;
});
