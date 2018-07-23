-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 666milkytea 的数据库结构
CREATE DATABASE IF NOT EXISTS `666milkytea` /*!40100 DEFAULT CHARACTER SET utf32 COLLATE utf32_unicode_ci */;
USE `666milkytea`;


-- 导出  表 666milkytea.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` bigint(20) NOT NULL DEFAULT '0',
  `goodsName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `raw01` text,
  `raw02` text,
  `rwa03` text,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- 正在导出表  666milkytea.goods 的数据：~16 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
REPLACE INTO `goods` (`index`, `goodsId`, `goodsName`, `price`, `raw01`, `raw02`, `rwa03`) VALUES
	(1, 1000, '招牌666奶茶', 19, NULL, NULL, NULL),
	(2, 1001, '奶沫鸳鸯奶茶', 18, NULL, NULL, NULL),
	(3, 1002, '伯爵奶茶', 20, NULL, NULL, NULL),
	(4, 1003, '冰布丁奶茶', 22, NULL, NULL, NULL),
	(5, 1004, '冰绿抹奶茶', 15, NULL, NULL, NULL),
	(6, 1005, '仙草奶茶', 16, NULL, NULL, NULL),
	(7, 1006, '珍珠奶茶', 12, NULL, NULL, NULL),
	(8, 1007, '热可可奶茶', 14, NULL, NULL, NULL),
	(9, 1008, '玫瑰奶茶', 22, NULL, NULL, NULL),
	(10, 1009, '皇家奶茶', 29, NULL, NULL, NULL),
	(11, 1010, '丝滑奶茶 ', 21, NULL, NULL, NULL),
	(12, 1011, '港市奶茶', 20, NULL, NULL, NULL),
	(13, 1012, '玫瑰香芋奶茶', 15, NULL, NULL, NULL),
	(14, 1013, '玫瑰奶茶西米露', 17, NULL, NULL, NULL),
	(15, 1014, '蜜爽绿豆奶茶', 18, NULL, NULL, NULL),
	(16, 1015, '红豆奶茶 ', 22, NULL, NULL, NULL);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;


-- 导出  表 666milkytea.orders 结构
CREATE TABLE IF NOT EXISTS `orders` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` text COLLATE utf32_unicode_ci NOT NULL COMMENT '订单编号',
  `salesGoods` text COLLATE utf32_unicode_ci NOT NULL COMMENT '商品内容',
  `MakeDate` text COLLATE utf32_unicode_ci NOT NULL COMMENT '日期',
  `Producer` text COLLATE utf32_unicode_ci NOT NULL COMMENT '制作者',
  `Seller` text COLLATE utf32_unicode_ci NOT NULL COMMENT '销售员',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '订单状态',
  `OrderPrice` float NOT NULL DEFAULT '0' COMMENT '订单总价',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci COMMENT='sate 订单状态：\r\n0：已下单，1：制作中，2：已完成，3.已取消';

-- 正在导出表  666milkytea.orders 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;


-- 导出  表 666milkytea.ordersfinsh 结构
CREATE TABLE IF NOT EXISTS `ordersfinsh` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` text COLLATE utf32_unicode_ci NOT NULL COMMENT '订单编号',
  `salesGoods` text COLLATE utf32_unicode_ci NOT NULL COMMENT '商品内容',
  `MakeDate` text COLLATE utf32_unicode_ci NOT NULL COMMENT '日期',
  `Producer` text COLLATE utf32_unicode_ci NOT NULL COMMENT '制作者',
  `Seller` text COLLATE utf32_unicode_ci NOT NULL COMMENT '销售员',
  `state` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '订单状态',
  `OrderPrice` float NOT NULL DEFAULT '0' COMMENT '订单总价',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci ROW_FORMAT=COMPACT COMMENT='sate 订单状态：\r\n0：已下单，1：制作中，2：已完成，3.已取消';

-- 正在导出表  666milkytea.ordersfinsh 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `ordersfinsh` DISABLE KEYS */;
REPLACE INTO `ordersfinsh` (`index`, `OrderId`, `salesGoods`, `MakeDate`, `Producer`, `Seller`, `state`, `OrderPrice`) VALUES
	(1, '201807160001', '{name:\'招牌奶茶\',suger:\'正常\',ice:\'正常\',add:null}', '2018/07/16/16:30', '5', '6', 1, 20),
	(2, '201807170001', '{name:\'丝袜奶茶\',suger:\'少糖\',ice:\'少冰\',add:null}|{name:\'柠乐\',suger:\'正常\',ice:\'正常\',add:\'珍珠\'}|', '2018/07/17/14:48', '5', '6', 1, 0),
	(3, '201807070002', '{name:\'黑糖玛奇朵\',suger:\'正常\',ice:\'少冰\',add:\'珍珠\'}|\r\n{name:\'黑糖玛奇朵\',suger:\'正常\',ice:\'少冰\',add:\'珍珠\'}|\r\n{name:\'黑糖玛奇朵\',suger:\'正常\',ice:\'少冰\',add:\'珍珠\'}|\r\n{name:\'黑糖玛奇朵\',suger:\'正常\',ice:\'少冰\',add:\'珍珠\'}|\r\n{name:\'黑糖玛奇朵\',suger:\'正常\',ice:\'少冰\',add:\'珍珠\'}|', '2018/07/17/16:50', '5', '6', 1, 0),
	(4, '201806190001', '{"name":"招牌666奶茶199","suger":"多糖","ice":"多冰","add":"珍珠"}|', '2018/06/19/10:11', 'null', '5', 1, 199),
	(5, '201806190001', '{"name":"港市奶茶20","suger":"","ice":"","add":"椰果"}|{"name":"奶沫鸳鸯奶茶18","suger":"","ice":"","add":"椰果"}|{"name":"招牌666奶茶19","suger":"","ice":"","add":"爆蛋"}|{"name":"伯爵奶茶20","suger":"少糖","ice":"","add":"爆蛋"}|', '2018/06/19/10:32', 'null', '5', 1, 59),
	(6, '201806190001', '{"name":"招牌666奶茶19","suger":"少糖","ice":"","add":"椰果"}|{"name":"伯爵奶茶20","suger":"去糖","ice":"","add":"爆蛋"}|{"name":"热可可奶茶14","suger":"少糖","ice":"少冰","add":"椰果"}|', '2018/06/19/10:35', 'null', '5', 1, 53),
	(7, '201806190001', '{"name":"仙草奶茶16","suger":"少糖","ice":"多冰","add":""}|{"name":"皇家奶茶29","suger":"少糖","ice":"少冰","add":"椰果"}|{"name":"红豆奶茶 22","suger":"少糖","ice":"多冰","add":"珍珠"}|', '2018/06/19/10:37', 'null', '5', 1, 67),
	(8, '201806190001', '{"name":"招牌666奶茶19"}|', '2018/06/19/10:39', 'null', '5', 1, 19),
	(9, '201806190002', '{"name":"冰绿抹奶茶15","suger":"去糖","ice":"去冰","add":"爆蛋"}|{"name":"仙草奶茶16","suger":"去糖","ice":"去冰","add":"爆蛋"}|{"name":"珍珠奶茶12","suger":"少糖","ice":"去冰","add":"珍珠"}|', '2018/06/19/10:39', 'null', '5', 1, 43);
/*!40000 ALTER TABLE `ordersfinsh` ENABLE KEYS */;


-- 导出  表 666milkytea.stock 结构
CREATE TABLE IF NOT EXISTS `stock` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `Raw` text COLLATE utf32_unicode_ci COMMENT '原料名称',
  `Number` int(11) DEFAULT NULL COMMENT '原料数量',
  `Unit` char(50) COLLATE utf32_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci COMMENT='库存';

-- 正在导出表  666milkytea.stock 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
REPLACE INTO `stock` (`index`, `Raw`, `Number`, `Unit`) VALUES
	(1, '鲜奶', 100, '盒'),
	(2, '茶包', 100, '包'),
	(3, '奶粉', 233, '灌'),
	(4, '大奶', 333, '罐'),
	(5, '大大奶', 111, '罐');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;


-- 导出  表 666milkytea.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) NOT NULL,
  `permission` int(11) NOT NULL COMMENT '00.SA最高权限，1.老板，2.店面经理，3.财务，4.人事，5.制作师，6.收银员',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COMMENT='员工表，index是员工编号。username是用户名称，permission是权限';

-- 正在导出表  666milkytea.users 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`index`, `username`, `name`, `password`, `permission`) VALUES
	(0, 'sa', 'Superuser', '0000', 0),
	(1, 'BigBoss', '王总', '1234', 1),
	(2, 'manage', '傻逼经理', '1234', 2),
	(3, 'finance', '鸡贼财务', '1234', 3),
	(4, 'personnel', '阴湿人事', '1234', 4),
	(5, 'Producer', '渣渣制作师', '1234', 5),
	(6, 'sales', '前台小姐姐', '1234', 6);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
