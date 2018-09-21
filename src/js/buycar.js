$(function(){
	
	
	var cartBox=document.querySelector('#cartBox');
	var delBtn=document.querySelector('.delBtn');
	var total_text=document.querySelector('.total_text');
//	console.log(total_text)
	// 用于保存商品信息
		var goodslist;

		render();


		// 清空购物车
		// * 清除cookie
		// * 清空页面html结构
//		btnClear.onclick = function(){
//			Cookie.remove('goodslist');
//
//			render();
//
//			// location.reload();
//		}

		// 删除单个商品
		// 不是删除cookie,而是修改cookie
		cartBox.onclick = function(e){
			e = e || window.event;

			var target = e.target || e.srcElement;

			if(target.className === 'delBtn'){
				// 获取当前li
				var currentdiv = target.parentNode.parentNode.parentNode.parentNode;
				console.log(currentdiv)
				var guid = currentdiv.getAttribute('data-guid');
				console.log(goodslist)
				// 找出与guid相同的商品
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].id === guid){
						// 从数组中删除
						goodslist.splice(i,1);
						break;
					}
				}

				// 重写cookie
				Cookie.set('goodslist',JSON.stringify(goodslist));
				render();
			}
		}

	function render(){
			goodslist = Cookie.get('goodslist');//
			console.log(goodslist);
			if(goodslist === ''){
				goodslist = [];
			}else{
				goodslist = JSON.parse(goodslist);
			}

			

			
			// 用于保存总价金额
			var total = 0;


			// 把商品写入页面
			cartBox.innerHTML = '';
			cartBox.innerHTML = goodslist.map(function(goods){
				// 计算总价
				total += goods.sale * goods.qty;
				console.log(goods);
				return`
                  <div class="shop_info">
                
                <div class="shop_name" id="shopname1">
                    店铺：<a href="javascript:;">${goods.trade_name}</a>
                </div>
            </div>
            <div class="order_content" data-guid="${goods.id}">
                <ul class="order_lists" >
                    <li class="list_chk">
                        <input type="checkbox" id="checkbox_2" class="son_check">
                        <label for="checkbox_2"></label>
                    </li>
                    <li class="list_con" id="listcon">
                        <div class="list_img"><a href="javascript:;"><img src="${goods.imgurl}" alt=""></a></div>
                        <div class="list_text"><a href="javascript:;">${goods.shopName}</a></div>
                    </li>
                    <li class="list_info" id="listinfo">
                        <p>${goods.shopName}</p>
                    </li>
                    <li class="list_price" id="listprice">
                        <p class="price">￥${goods.sale}</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty">-</a>
                            <input type="text" value="${goods.qty}" class="sum">
                            <a href="javascript:;" class="plus">+</a>
                        </div>
                    </li>
                    <li class="list_sum" id="listsum">
                        <p class="sum_price">￥${goods.sale}</p>
                    </li>
                    <li class="list_op">
                        <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                    </li>
                </ul>
                
                    
            </div>
			`
			}).join('');

			// 把ul写入页面
//			cartBox.innerHTML = '';


			// 写入总价
//			total_text.innerText = total.toFixed(2);
		}
	//	登录区域获取cookie
		username = Cookie.get('username');
		console.log(username);
		var nowlogin=document.querySelector('#nowloginincar');
		nowlogin.innerText=username;
	
	
});
