$(function(){
	
//	验证用户名
	$('#mobile').keyup(function(){
		var usern=$('#mobile').val();
		$.ajax({
				type:"get",
				url:"../api/zhuce/guestbook/index.php",
				async:true,
				data:{
					'm': 'index',
					'a': 'verifyUserName',
					'username':usern
				},
				success:function(str){
					var data=JSON.parse(str);
					console.log(data);
					if(!data.code){
						$('#cont1').html(data.message).css('color','green');
					}
					else{
						$('#cont1').html(data.message).css('color','red');
					}
				}
			});	
	});
//验证双重密码
	
	$('#confirm_password').keyup(function(){		
		var passw=$('#password').val();console.log(passw);
		var re_passw=$('#confirm_password').val();
		console.log(re_passw);
		if(passw!==re_passw){
			$('#cont2').html('两次输入密码不一致').css('color','red');
		}else{
			$('#cont2').html('输入正确').css('color','green');
		}
	});
		

//	注册功能
	$('#register').click(function(){
		var usern=$('#mobile').val();
		var passw=$('#password').val();
		var re_passw=$('#confirm_password').val();
		$.ajax({
				type:"post",
				url:"../api/zhuce/guestbook/index.php",
				async:true,
				data:{
					'm' : 'index',
					'a' : 'reg',
					'username' : usern,
					'password' : passw
				},
				success:function(str){
					var data=JSON.parse(str);
					console.log(data);
					if(!data.code){
						$('#cont3').html(data.message).css('color','green');
					}
					else{
						$('#cont3').html(data.message).css('color','red');
					}
				}
			});
			location.href='../html/login.html';
	});
	
//	封装获取cookie的方法
	function getcookie(key){
		var cookies=document.cookie;
		
		cookies=JSON.stringify(cookies);console.log(cookies)
//		console.log(cookies);
		var arr=cookies.split('; ');
		for(var i=0;i<arr.length;i++){
			var arr2=arr[i].split('=');
			console.log(arr2)
			if(arr2[0]==key){
				return arr2[1];
			}
		}
	}
	
//	封装更新页面的函数
	function updataIndex(){
		var uid=getcookie('uid');
		var name=getcookie('username');
		if(uid){
//			登录状态
			$('#nowlogin').html('name');
			location.href='../index.html';
			
//			window.open('../index.html');
		}
	}
	
//	登录页面

	$('#btn').click(function(){
//		获取输入的账号和密码
		var username=$('#user').val();
		var password=$('#psd').val();
//		document.cookie = 'password=' + password + ';expires=' + d.toUTCString();
//		console.log(cookie)
		$.ajax({
				type:"post",
				url:"../api/zhuce/guestbook/index.php",
				async:true,
				data:{
					'm' : 'index',
					'a' : 'login',
					'username' : username,
					'password' : password
				},
				success:function(str){
					var data=JSON.parse(str);
//					document.cookie = 'username=' + username;
					console.log(data);
					updataIndex();
				}	
			});
	});
		
});
