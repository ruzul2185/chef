-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: chef
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp(),
  `parent_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'Tawa','2024-06-20 15:04:36','2024-06-20 15:04:36','Cookware'),(4,'Kadhai & woks','2024-06-20 15:05:16','2024-06-20 15:05:16','Cookware'),(5,'Frying pan','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(6,'Grill pans','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(7,'Casseroles','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(8,'Appakare and appacetty','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(9,'Sauce Pans','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(10,'Gas Oven Tandoor','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(11,'Paniyaralkkal','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(12,'Cook n Server','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(13,'Tadka pan','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(14,'Combos','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(15,'Gas toaster and Grillers','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(16,'Cookware set','2024-06-20 20:39:26','2024-06-20 20:39:26','Cookware'),(17,'OTG','2024-06-20 15:10:06','2024-06-20 15:10:06','Cooking Appliances'),(18,'Microwave Oven','2024-06-20 20:41:12','2024-06-20 20:41:12','Cooking Appliances'),(19,'Griller','2024-06-20 20:41:12','2024-06-20 20:41:12','Cooking Appliances'),(20,'Hand Blender','2024-06-20 15:16:09','2024-06-20 15:16:09','Kitchen Appliances'),(21,'Hand Mixer','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(22,'Mixer Grinder ','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(23,'Juicer Mixer Grinder','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(24,'Juicer','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(25,'Nutri-Blend','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(26,'Food Processor','2024-06-20 20:48:41','2024-06-20 20:48:41','Kitchen Appliances'),(28,'Sandwich Maker','2024-06-20 15:19:12','2024-06-20 15:19:12','Breakfast and Snacks'),(29,'Toaster','2024-06-20 20:49:34','2024-06-20 20:49:34','Breakfast and Snacks'),(30,'Coffee Machine','2024-06-20 15:20:59','2024-06-20 15:20:59','Beverages'),(31,'Tea Machine','2024-06-20 20:51:32','2024-06-20 20:51:32','Beverages'),(32,'Kettle','2024-06-20 20:51:32','2024-06-20 20:51:32','Beverages');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_types`
--

DROP TABLE IF EXISTS `image_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_types`
--

LOCK TABLES `image_types` WRITE;
/*!40000 ALTER TABLE `image_types` DISABLE KEYS */;
INSERT INTO `image_types` VALUES (1,'main','2024-06-19 22:36:00','2024-06-19 22:36:00');
/*!40000 ALTER TABLE `image_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `review_id` int(11) DEFAULT NULL,
  `image_type_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (7,'mainSlider (6).png','http://localhost:8765/img/mainSlider (6).png',1,NULL,1,'2024-06-18 18:34:24','2024-06-18 18:34:24'),(8,'Artemis_20240612_181436_0000.png','http://localhost:8765/img/Artemis_20240612_181436_0000.png',1,NULL,NULL,'2024-06-18 18:34:38','2024-06-18 18:34:38'),(9,'Artemis_20240612_181436_0000.png','http://localhost:8765/img/Artemis_20240612_181436_0000.png',2,NULL,1,'2024-06-18 18:48:16','2024-06-18 18:48:16'),(10,'hawkins-logo (1).png','http://localhost:8765/img/hawkins-logo (1).png',2,NULL,NULL,'2024-06-18 18:48:16','2024-06-18 18:48:16'),(11,'Cropped_Logo.png','http://localhost:8765/img/Cropped_Logo.png',2,NULL,NULL,'2024-06-18 18:48:16','2024-06-18 18:48:16'),(12,'Kadai non-stick 1(stahl).jpg','http://localhost:8765/img/Kadai non-stick 1(stahl).jpg',3,NULL,1,'2024-06-21 14:14:21','2024-06-21 14:14:21'),(13,'w(1)1(tawa-Non-stick).png','http://localhost:8765/img/w(1)1(tawa-Non-stick).png',6,NULL,1,'2024-07-02 14:56:06','2024-07-02 14:56:06'),(14,'w(1)3(tawa-Non-stick).png','http://localhost:8765/img/w(1)3(tawa-Non-stick).png',6,NULL,NULL,'2024-07-03 13:52:10','2024-07-03 13:52:10'),(15,'w(1)4(tawa-Non-stick).png','http://localhost:8765/img/w(1)4(tawa-Non-stick).png',6,NULL,NULL,'2024-07-03 13:52:10','2024-07-03 13:52:10');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (5,'Soup Maker','home front scroll soup maker.png','white','100','Soup Maker with eay and performed way',NULL,NULL),(6,'Air Fryer','home  front scroll airfryer.png','Black','50','To protect your life with colestroll and other diseases we present \"Air Fryper\" with premium quality',NULL,NULL),(7,'Mixer','home front scroll mixer.png','Yellow-white','55','The quality and best product to properly grind your daily needs with best.',NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `original_price` int(11) NOT NULL,
  `offer_price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(10000) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp(),
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Tawa',2000,1899,NULL,'Demo test1','2024-06-18 23:40:09','2024-06-18 23:40:09',3),(2,'hot-sets',1000,899,NULL,'Demo test2','2024-06-18 18:47:38','2024-06-18 18:47:38',2),(3,'Tawa2',1600,1499,NULL,'This is beautifull product based on demo','2024-06-21 19:42:27','2024-06-21 19:42:27',3),(4,'Coffee Machine',199,159,NULL,'Check the new product','2024-06-23 15:02:26','2024-06-23 15:02:26',30),(6,'Non-stick Dosa Tawa Royal Velvet 28cm, Induction bottom, Soft-touch Handle, Virgin Grade Aluminium, PFOA/Heavy metals free, 3mm, 2 years warranty, Red',1700,900,NULL,'Transform your kitchen with the stylish Wonderchef Royal Velvet Dosa Tawa. This premium cookware features a marble-finished pure grade virgin aluminium body for quick and even heat distribution. Enjoy healthy, oil-free meals with its 100% PFOA-free, 5-layer Meta Tuff non-stick coating. Ideal for making dosas, chillas, parathas, and pancakes, this durable tawa has a 3mm thickness and ergonomic soft-touch handles that stay cool. Suitable for gas stoves, ceramic plates, hobs, hot plates, and induction plates. Inspired by Italian design and adhering to German quality standards, it comes with a reliable Wonderchef warranty. Upgrade your cooking with Wonderchef!','2024-07-02 14:54:40','2024-07-03 13:35:56',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@test.com','$2y$10$1bVXW6JzAhUsWgF.ezM6/uBVCGA.hIZu0/L8wrpWoCLMQC2HlrRPC','admin@test.com','admin','','2024-06-11 23:52:37','2024-06-11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-03 20:01:30
