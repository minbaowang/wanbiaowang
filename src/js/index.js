//实现轮播图
$(function(){
    var timer = null;
    var cur = 0;
    var len = $("#ads li").length;

    //鼠标滑过容器停止播放
    $("#ads").hover(function(){
        clearInterval(timer);
    },function(){
        showImg();
    });
    // 遍历所有圆点导航实现划过切换至对应的图片
    $("#ads li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#ads img").eq(cur).fadeIn(200).siblings("img").fadeOut(200);
    });
	
//	点击按钮切换到下一张或者上一张
	$('#prev').click(function(){
//		console.log(cur)
		cur--;
		if(cur<0){cur=len-1;}
        // 切换上一张图片
        $("#ads img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
        $("#ads li ").eq( cur ).addClass("active").siblings().removeClass("active");
    });
    $('#next').click(function(){
        cur++;
		if( cur>=len ){ cur=0; }
        // 切换上一张图片
        $("#ads img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
        $("#ads li ").eq( cur ).addClass("active").siblings().removeClass("active");
    });

    //定义图片切换函数
    function showImg(){
        timer = setInterval(function(){
            cur++;
            if( cur>=len ){ cur=0; }
            $("#ads img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
            $("#ads li ").eq( cur ).addClass("active").siblings().removeClass("active");

        },2000);
    }
    showImg();


//限时购时间
//限时购的轮播
//读取数据库,生成所需要的结构	
	

	// ajax核心步骤
	// 1）创建请求对象
	let xhr = new XMLHttpRequest();
	let qty=0;
	let goodlist = document.querySelector('#swiper-wrapper');
	
	// 4)在js中处理数据
	
		xhr.onreadystatechange = ()=>{
	// 事件会执行4次，但只有在最后一次才确认获取到数据
			if(xhr.readyState === 4){
			    let data = JSON.parse(xhr.responseText);
//				console.log(data)
		
				// 2）根据数据生成html结构
					let div = document.createElement('div');
					div.className='swiper-slide';
					goodlist.innerHTML='';
							div.innerHTML = data.map(goods=>{
								return `
								<a target="_blank" class="slider_a" href="html/shopDetail.html?id=${goods.id}" id="${goods.id}">
									<p class="s_img lazy-load"> <img class="swiper-lazy1" src="${goods.imgurl}" alt=""></p>
									<div class="s_txt">
									<p class="p1 elps1">${goods.shopName}</p>
									<p class="p2 clearfix"> <span class="sp_01 fl"><em>${goods.saleNum*10}折</em><i class="icon-d-sg-bg"></i></span> <span class="sp_02 fl">&yen;${goods.sale}</span></p> <del>&yen;2,550</del></div>
								</a>`
							}).join('');
							// 写入页面
//							console.log(goodlist);
							goodlist.appendChild(div);
		//					location.reload();
						}					

				}


//		点击按钮改变传过去的qty值
//		自动改变qty值
			$('#swiper-button-next').click(function(){
				qty=qty+3;
				if(qty>9){
					qty=0;
				}
				
				// 2）配置参数，建立与服务器的连接
			xhr.open('get','../api/shoplist/goodslist.php?qty='+qty,true);

			// 3）发送请求
			xhr.send();
			});
			$('#swiper-button-prev').click(function(){
				qty=qty-3;
				if(qty<3){
					qty=9;
				}
//				重新生成数据
			
				// 2）配置参数，建立与服务器的连接
			xhr.open('get','../api/shoplist/goodslist.php?qty='+qty,true);

			// 3）发送请求
			xhr.send();
			});
			
//			自动切换qty
			
			
			// 2）配置参数，建立与服务器的连接
			xhr.open('get','../api/shoplist/goodslist.php?qty='+qty,true);

			// 3）发送请求
			xhr.send();
			
			
		//点击页面传到详情页
	
		
		goodlist.onclick=function(){
//			console.log(goodlist.children[0].children[0]);			
			for(let i=0;i<3;i++){
				goodlist.children[0].children[i].onclick=function(){
//					console.log(goodlist.children[0].children[i].id);
					var id=goodlist.children[0].children[i].id;
					goodlist.children[0].children[0].href="html/shopDetail.html?id="+id;
//					console.log(goodlist.children[0].children[0]);
					
				}
			}
			
		};	
			
//	登录区域获取cookie
		username = Cookie.get('username');
		console.log(username);
		var nowlogin=document.querySelector('#nowlogin');
		nowlogin.innerText=username;
	
});
	
	


		