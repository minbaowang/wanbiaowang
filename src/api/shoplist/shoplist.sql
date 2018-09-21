/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h1805

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-19 15:47:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shoplist
-- ----------------------------
DROP TABLE IF EXISTS `shoplist`;
CREATE TABLE `shoplist` (
  `id` varchar(255) DEFAULT NULL,
  `trade_name` varchar(255) DEFAULT NULL,
  `shopName` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `saleNum` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoplist
-- ----------------------------
INSERT INTO `shoplist` VALUES ('1', '天梭旗舰�?', '天梭TISSOT-T-Trend系列', '../images/fix_c.png', '黑色 精钢母贝', '2500', '1900', '0.76');
INSERT INTO `shoplist` VALUES ('2', '商务专营�?', '绮年华ETERNA-Kontiki系列', '../images/fix_a.png', '红色 硅胶', '10400', '8320', '0.8');
INSERT INTO `shoplist` VALUES ('3', '精工官方旗舰�?', '精工SEIKO-Prospex系列', '../images/fix_b.png', '黑色 精钢母贝', '3600', '2232', '0.62');
INSERT INTO `shoplist` VALUES ('4', '卡西欧官方旗舰店', '卡西欧PROTREK系列', '../images/paihang2.jpg', '银白�?精钢', '3490', '2790', '0.8');
INSERT INTO `shoplist` VALUES ('5', '时尚专营�?', '斯沃琪Swatch-Originals', '../images/paihang4.jpg', '经典�?精钢', '1280', '1152', '0.9');
INSERT INTO `shoplist` VALUES ('6', '法国赫柏林官方旗舰店', 'Michel Herbelin赫柏�?', '../images/paihang4.jpg', '黑色 精钢母贝', '4800', '2640', '0.56');
INSERT INTO `shoplist` VALUES ('7', '经典专营�?', '英纳格Enicar-超薄纳米系列', '../images/paihang6.png', '红色 硅胶', '5050', '3787', '0.75');
INSERT INTO `shoplist` VALUES ('8', '天梭旗舰�?', '天梭Tissot-PR100系列', '../images/popup_biao.png', '黑色 精钢母贝', '4450', '3070', '0.69');
INSERT INTO `shoplist` VALUES ('9', '欧米茄旗舰店', '欧米茄Omega-海马系列', '../images/boy_girl2.jpg', '银白�?精钢', '57500', '43700', '0.76');
INSERT INTO `shoplist` VALUES ('10', '卡西欧官方旗舰店', '卡西欧PROTREK系列', '../images/fix_c.png', '经典�?精钢', '5000', '4500', '0.9');
INSERT INTO `shoplist` VALUES ('11', '美度旗舰�?', '美度-贝伦赛丽系列', '../images/fix_b.png', '红色 硅胶', '8700', '6003', '0.69');
INSERT INTO `shoplist` VALUES ('12', '梵德宝官方旗舰店', '瑞士梵德�?Neb K DIVIN 系列', '../images/paihang2.jpg', '黑色 精钢母贝', '7320', '3587', '0.5');
SET FOREIGN_KEY_CHECKS=1;
