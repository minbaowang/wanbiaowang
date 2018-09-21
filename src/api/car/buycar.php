<?php

	include 'connect.php';
	
//  请求数据
	$num = isset($_GET['num']) ? $_GET['num'] : 0;
	$id = isset($_GET['id']) ? $_GET['id'] : 0;
	$imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null;
	$shopName = isset($_GET['shopName']) ? $_GET['shopName'] : null;
	$sale = isset($_GET['sale']) ? $_GET['sale'] : 0;
	$trade_name = isset($_GET['trade_name']) ? $_GET['trade_name'] : 0;
	
    // 读取数据
    // 获取查询结果集（集合）
//  INSERT INTO goodsdata VALUES ($id, $imgurl,$shopName,$sale,$trade_name,$num)
    $sql = "insert into goodsdata (id,imgurl,shopName,sale,trade_name,num) 
    		values 
    		($id, '$imgurl','$shopName',$sale,'$trade_name',$num)";
    echo $sql;
    echo '<br>';
    var_dump($conn);
    $result = $conn->query($sql);
	var_dump($result);
    // 从集合中取出所有数据
//  $row = $result->fetch_all(MYSQLI_ASSOC);

// echo json_encode($row,JSON_UNESCAPED_UNICODE);
   	//释放查询结果集，避免资源浪费
//  $result->close();
    // 关闭数据库，避免资源浪费
//  $conn->close();
?>