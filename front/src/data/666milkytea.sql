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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- 正在导出表  666milkytea.goods 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
REPLACE INTO `goods` (`index`, `goodsId`, `goodsName`, `price`, `raw01`, `raw02`, `rwa03`) VALUES
	(1, 1000, '招牌666奶茶', 199, NULL, NULL, NULL);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;


-- 导出  表 666milkytea.order 结构
CREATE TABLE IF NOT EXISTS `order` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` text COLLATE utf32_unicode_ci NOT NULL COMMENT '订单编号',
  `Goods` text COLLATE utf32_unicode_ci NOT NULL COMMENT '商品内容',
  `Date` text COLLATE utf32_unicode_ci NOT NULL COMMENT '日期',
  `Producer` text COLLATE utf32_unicode_ci NOT NULL COMMENT '制作者',
  `Seller` text COLLATE utf32_unicode_ci NOT NULL COMMENT '销售员',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

-- 正在导出表  666milkytea.order 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;


-- 导出  表 666milkytea.stock 结构
CREATE TABLE IF NOT EXISTS `stock` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `Raw` text COLLATE utf32_unicode_ci COMMENT '原料名称',
  `Number` int(11) DEFAULT NULL COMMENT '原料数量',
  `unit` char(50) COLLATE utf32_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci COMMENT='库存';

-- 正在导出表  666milkytea.stock 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
REPLACE INTO `stock` (`index`, `Raw`, `Number`, `unit`) VALUES
	(1, '鲜奶', 100, '盒'),
	(2, '茶包', 100, '包');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;


-- 导出  表 666milkytea.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `permission` int(11) NOT NULL COMMENT '00.SA最高权限，1.老板，2.店面经理，3.财务，4.人事，5.制作师，6.收银员',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='员工表，index是员工编号。username是用户名称，permission是权限';

-- 正在导出表  666milkytea.users 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`index`, `username`, `name`, `password`, `permission`) VALUES
	(1, 'sa', 'Superuser', '0000', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
