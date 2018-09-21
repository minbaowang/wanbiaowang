<?php

	include 'connect.php';
//  请求数据
	$num = isset($_GET['num']) ? $_GET['num'] : 0;
	$id = isset($_GET['id']) ? $_GET['id'] : 0;
	var_dump($id);
    // 读取数据
    // 获取查询结果集（集合）
//  update shoplist set num=$num where id=$id
    $sql = "UPDATE shoplist SET num=$num where id=$id";
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