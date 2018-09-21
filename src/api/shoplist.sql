-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-21 06:23:15
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopdata`
--

-- --------------------------------------------------------

--
-- 表的结构 `shoplist`
--

CREATE TABLE `shoplist` (
  `id` varchar(255) DEFAULT NULL,
  `trade_name` varchar(255) DEFAULT NULL,
  `shopName` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `saleNum` varchar(255) DEFAULT NULL,
  `num` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoplist`
--

INSERT INTO `shoplist` (`id`, `trade_name`, `shopName`, `imgurl`, `color`, `price`, `sale`, `saleNum`, `num`) VALUES
('1', '天梭旗舰�?', '天梭TISSOT-T-Trend系列', '../images/fix_c.png', '黑色 精钢母贝', '2500', '1900', '0.76', 8),
('2', '商务专营�?', '绮年华ETERNA-Kontiki系列', '../images/fix_a.png', '红色 硅胶', '10400', '8320', '0.8', 2),
('3', '精工官方旗舰�?', '精工SEIKO-Prospex系列', '../images/fix_b.png', '黑色 精钢母贝', '3600', '2232', '0.62', 1),
('4', '卡西欧官方旗舰店', '卡西欧PROTREK系列', '../images/paihang2.jpg', '银白�?精钢', '3490', '2790', '0.8', 1),
('5', '时尚专营�?', '斯沃琪Swatch-Originals', '../images/paihang4.jpg', '经典�?精钢', '1280', '1152', '0.9', 1),
('6', '法国赫柏林官方旗舰店', 'Michel Herbelin赫柏�?', '../images/paihang4.jpg', '黑色 精钢母贝', '4800', '2640', '0.7', 1),
('7', '经典专营�?', '英纳格Enicar-超薄纳米系列', '../images/paihang6.png', '红色 硅胶', '5050', '3787', '0.75', 1),
('8', '天梭旗舰�?', '天梭Tissot-PR100系列', '../images/popup_biao.png', '黑色 精钢母贝', '4450', '3070', '0.8', 1),
('9', '欧米茄旗舰店', '欧米茄Omega-海马系列', '../images/boy_girl2.jpg', '银白�?精钢', '57500', '43700', '0.76', 1),
('10', '卡西欧官方旗舰店', '卡西欧PROTREK系列', '../images/fix_c.png', '经典�?精钢', '5000', '4500', '0.9', 1),
('11', '美度旗舰�?', '美度-贝伦赛丽系列', '../images/fix_b.png', '红色 硅胶', '8700', '6003', '0.8', 1),
('12', '梵德宝官方旗舰店', '瑞士梵德�?Neb K DIVIN 系列', '../images/paihang2.jpg', '黑色 精钢母贝', '7320', '3587', '0.5', 1),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
