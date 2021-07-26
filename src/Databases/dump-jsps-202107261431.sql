-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: localhost    Database: jsps
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posttest`
--

DROP TABLE IF EXISTS `posttest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posttest` (
  `secureId` varchar(100) NOT NULL,
  `id_posttest` int NOT NULL AUTO_INCREMENT,
  `question1` text,
  `id_responden` int NOT NULL,
  `question2` text,
  `question3` text,
  `question4` text,
  `question5` text,
  `question6` text,
  `question7` text,
  `question9` text,
  `question8` text,
  `question10` text,
  `question11` text,
  `question12` text,
  `question13` text,
  `question14` text,
  PRIMARY KEY (`id_posttest`),
  UNIQUE KEY `posttest_UN` (`secureId`),
  KEY `posttest_FK` (`id_responden`),
  CONSTRAINT `posttest_FK` FOREIGN KEY (`id_responden`) REFERENCES `responden` (`id_responden`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posttest`
--

LOCK TABLES `posttest` WRITE;
/*!40000 ALTER TABLE `posttest` DISABLE KEYS */;
INSERT INTO `posttest` VALUES ('983b2a0f-2649-4020-ad4d-4f1a10109072',1,'PRETEST Q1',4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('32d34581-3a50-4f33-bbc1-c7402b3c4f59',2,NULL,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'4','4'),('29d3c28b-7cdb-438e-94f3-5e6dcb841f38',3,'1',14,'1','1','1','1','1','1','1','1','1','1','1','1','1'),('d64ec299-2c39-46d8-8959-ab2b3a60bf6c',4,'1',14,'1','1','1','1','1','1','1','1','1','1','1','1','1'),('7ee3c1a1-ae54-44b6-9777-57ef71c10980',5,'1',15,'1','1','1','1','1','1','1','1','1','1','1','1','1'),('eadfe785-b306-4fac-9fe7-0facf3fd4edb',6,'1',16,'1','1','1','1','1','1','1','1','1','1','1','1','1'),('772ce3b9-d8a9-4ed6-86b2-23763c763d22',7,'0',19,'1','1','0','0','1','1','1','1','2','1','1','1','1'),('d2abe693-fdae-4a4b-bfbf-c62693cd341a',8,'0',23,'1','0','0','0','0','0','1','1','1','0','0','0','0'),('1fdb743b-d138-4f69-8311-7f916eedf7a3',9,'1',24,'1','1','1','1','1','2','0','0','0','1','1','1','1');
/*!40000 ALTER TABLE `posttest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pretest`
--

DROP TABLE IF EXISTS `pretest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pretest` (
  `question1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `question2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `question3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `secureId` varchar(100) NOT NULL,
  `id_pretest` int NOT NULL AUTO_INCREMENT,
  `id_responden` int NOT NULL,
  `question4` text,
  `question5` text,
  `question6` text,
  `question7` text,
  `question9` text,
  `question8` text,
  `question10` text,
  `question11` text,
  `question12` text,
  `question13` text,
  `question14` text,
  PRIMARY KEY (`id_pretest`),
  UNIQUE KEY `pretest_UN` (`secureId`),
  KEY `pretest_FK` (`id_responden`),
  CONSTRAINT `pretest_FK` FOREIGN KEY (`id_responden`) REFERENCES `responden` (`id_responden`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pretest`
--

LOCK TABLES `pretest` WRITE;
/*!40000 ALTER TABLE `pretest` DISABLE KEYS */;
INSERT INTO `pretest` VALUES ('1','2','2','ffd25259-073d-4f80-a2b8-3b2c370e6aad',1,4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('4','4','4','a175dc41-45e4-491f-b49d-7afb35bd9667',3,6,'4',NULL,'3','4','4','4','4','4',NULL,NULL,NULL),('0',NULL,NULL,'2434785d-8887-47be-8d4f-00aefa7ccd63',4,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'3','4'),(NULL,NULL,NULL,'da6b4eec-d8aa-43d3-8808-5c23e01220c3',5,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('1','1','1','6637543e-1477-49d4-92c0-baf81e2732d3',6,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'4'),('3','4','4','d9649b4d-8d7a-4d06-bbb7-0125a21c56e2',7,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('4',NULL,NULL,'e9de1a83-2b5a-4fbb-ae81-f2cb5eb426c1',8,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('2',NULL,NULL,'2d5f65d7-34f6-42a0-9db5-d98e918285c6',9,9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'4'),('1','1','1','cdc572e1-e689-4fb5-9dad-fc644aecdcd0',10,13,'1','1','1','1','1','1','1','1','1','1','1'),('1','1','1','341bb8c4-bce3-42a2-b80a-25f9a4c8f2bb',11,14,'1','1','1','1','1','1','1','1','1','1','1'),('1','1','1','bd53f864-091b-4c67-ae2c-6566ad7494a8',12,14,'1','1','1','1','1','1','1','1','1','1','1'),('1','1','1','2baca858-3e32-4abd-9b18-e13398a3244d',13,15,'1','1','1','1','1','1','1','1','1','1','1'),('1','1','1','235b3767-74cf-4577-8ec7-92fae73dd88a',14,16,'1','1','1','1','1','1','1','1','1','1','1'),('1','0','1','cd149a66-251e-4b4c-8b74-bdde74480732',15,17,'2','3','3','2','1','3','1','1','1','1','2'),('1','0','1','acd1cb3a-d75c-463e-802f-28a1d506ed08',16,19,'1','0','1','1','1','1','1','1','1','1','1'),('1','1','1','46d6e180-5fce-4f7e-af99-ddd4c13a037a',17,20,'1','1','1','1','2','1','1','3','0','0','0'),('0','0','0','884b0d54-5809-4bc2-9bef-b6fdade01d1d',18,21,'0','0','0','0','0','0','0','0','0','0','0'),('0','0','0','69610833-65d1-408c-b7db-65b50c4cb758',19,22,'0','0','0','0','0','0','0','0','0','0','0'),('0','0','0','9594178c-fec7-45f1-8999-2140785c8474',20,23,'0','0','0','0','0','0','0','0','0','0','0'),('1','1','1','9b78b539-a121-4855-a2ec-9f85d73a02c8',21,24,'0','0','0','0','0','0','1','0','0','1','0'),('0','1','1','4a72b936-3198-455c-ad01-0436f5e9cab1',22,25,'1','0','0','0','0','0','1','1','1','1','1');
/*!40000 ALTER TABLE `pretest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responden`
--

DROP TABLE IF EXISTS `responden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responden` (
  `id_responden` int NOT NULL AUTO_INCREMENT,
  `secureId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `initialName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `agreement` tinyint(1) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gestationalAge` int DEFAULT NULL,
  `education` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `salaryRange` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pretest` int DEFAULT NULL,
  `posttest` int DEFAULT NULL,
  PRIMARY KEY (`id_responden`),
  UNIQUE KEY `responden_UN` (`secureId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responden`
--

LOCK TABLES `responden` WRITE;
/*!40000 ALTER TABLE `responden` DISABLE KEYS */;
INSERT INTO `responden` VALUES (1,'50d7e340-e15c-4ad9-9e6e-a138e5cb76a3','AN',1,22,16,'D3','>= 3 Juta',NULL,NULL),(2,'34ec2f37-872a-401a-bdf6-267bd18a7a09','AN',1,22,16,'D3','>= 3 Juta',NULL,NULL),(3,'f5ee05f1-337d-4940-bc96-47fdb9eb331c','AS',1,22,16,'D3','>= 3 Juta',NULL,NULL),(4,'20f3e605-0eda-4ffe-ad6c-bfd10324159a','AS',1,29,14,'SMA','>= 3 Juta',NULL,NULL),(5,'3dc4b149-3f5b-477e-87c4-bcf35c438959','Putria',NULL,2,13,'SMA','>= 3 Juta',NULL,NULL),(6,'942eb86e-94cc-48e7-8060-16ed0b694bea','Good',NULL,123,22,'S1','>= 3 Juta',7,8),(7,'e44cb666-bb37-4acf-9b01-de8023428f32','Putria',NULL,13,22,'SMA','>= 3 Juta',0,NULL),(8,'325ba18d-3f8d-4f92-ba28-08eaf20bfa24','Fazerdaze',NULL,23,22,'SMA','>= 3 Juta',13,NULL),(9,'611bcb1f-eb75-4738-a985-12a41f4d3bba','Tecip',NULL,12,23,'S1','>= 3 Juta',6,NULL),(10,'295843e0-128b-499e-99ac-429e50373a88','Aldo',NULL,21,22,'S1','>= 3 Juta',NULL,NULL),(11,'f3a73ff1-15d4-4852-ae48-7f22a617985f','123',NULL,1,1,'SD','>= 3 Juta',NULL,NULL),(13,'93ec9d02-417e-4ff0-aaad-7472b6d28bde','123',NULL,123,123,'SMP','>= 3 Juta',14,NULL),(14,'5717dc76-0f7f-4a6f-ad4a-a5f62e977532','Sony',NULL,22,12,'S1','< 3 Juta',14,14),(15,'802029e8-c38a-41ee-a653-f01a99ff2ddf','David',NULL,23,22,'D3','>= 3 Juta',14,14),(16,'029c2ece-1a2b-4460-8b38-e0b8d50dfd6f','123',NULL,2,3,'SMP','>= 3 Juta',14,14),(17,'d022456a-c264-436e-8620-dc9da0126330','Dasar',NULL,22,12,'SMA','>= 3 Juta',22,NULL),(19,'d1107aa5-851c-4a89-91b0-9e64113e3966','Teta',NULL,23,12,'S1','>= 3 Juta',12,12),(20,'94a32fea-eca8-46c7-b10a-de3060a93d21','Godean',NULL,12,2,'S1','>= 3 Juta',14,NULL),(21,'a6a7d0eb-ea9a-4866-b837-25aabe8cd0f5','Good Name',NULL,23,22,'SMA','>= 3 Juta',0,NULL),(22,'ac7ed429-cecc-4de6-b29b-7e0080084e68','Ga ada2',NULL,33,22,'SMA','>= 3 Juta',0,NULL),(23,'224d9b92-d0bf-435b-b16b-9c771d4ab68d','123',NULL,23,12,'S1','>= 3 Juta',0,4),(24,'9c3eca09-97fe-46a7-932e-32ea32e55080','Ariana',NULL,25,12,'S1','>= 3 Juta',5,12),(25,'1d8e7d7a-9b72-450e-b91d-8545e6deff6b','Firda',NULL,23,22,'S1','>= 3 Juta',8,NULL);
/*!40000 ALTER TABLE `responden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screening`
--

DROP TABLE IF EXISTS `screening`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screening` (
  `question1` text,
  `question2` text,
  `secureId` varchar(100) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `id_responden` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `screening_UN` (`secureId`),
  KEY `screening_FK` (`id_responden`),
  CONSTRAINT `screening_FK` FOREIGN KEY (`id_responden`) REFERENCES `responden` (`id_responden`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screening`
--

LOCK TABLES `screening` WRITE;
/*!40000 ALTER TABLE `screening` DISABLE KEYS */;
INSERT INTO `screening` VALUES ('SAYA SEHAT','SAYA BAIK BAIK SAJA','6a06e172-effa-4f0a-887b-650539c9812f',13,4),('Good Guys','Good Bre','ed1fea9a-0584-41d0-a18a-6d9e1dca3bf9',21,6),(NULL,NULL,'3cc596c8-d87d-4e2c-80a0-220b99db15fb',22,7);
/*!40000 ALTER TABLE `screening` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_users` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','teta0304');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'jsps'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-26 14:31:34
