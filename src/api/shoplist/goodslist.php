<?php
	/*
		商品列表
			* 返回所需商品


		1)连接数据库

		2）数据操作
			* 读取数据
				* select * from...
	 */

	include 'connect.php';
//  请求数据
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 0;
//	var_dump($qty);
    // 读取数据
    // 获取查询结果集（集合）
//  select * from shoplist limit qty,qty+3
//  $sql = "select * from shoplist";
    $sql = "select * from shoplist limit $qty,3";
    $result = $conn->query($sql);

    // 从集合中取出所有数据
    $row = $result->fetch_all(MYSQLI_ASSOC);

   echo json_encode($row,JSON_UNESCAPED_UNICODE);
   	//释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据库，避免资源浪费
    $conn->close();

   	
?>