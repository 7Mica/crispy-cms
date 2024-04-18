-- MariaDB dump 10.19-11.3.2-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: crispy-cms
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB-1:11.3.2+maria~ubu2204

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
-- Table structure for table `ability`
--

DROP TABLE IF EXISTS `ability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ability` (
  `id` varchar(36) NOT NULL,
  `resumeId` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `percent` int(11) NOT NULL,
  `abilityName` enum('SKILL','LANGUAGE','OS','TOOL') DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `weight` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_01610954fcb981d9282581d9177` (`resumeId`),
  CONSTRAINT `FK_01610954fcb981d9282581d9177` FOREIGN KEY (`resumeId`) REFERENCES `resume` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ability`
--

LOCK TABLES `ability` WRITE;
/*!40000 ALTER TABLE `ability` DISABLE KEYS */;
INSERT INTO `ability` VALUES
('0b4852a2-c7c2-4c08-9a44-11545c694777','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/sass.svg',80,'SKILL','Sass',100),
('124bd266-2655-4a5f-8030-0a5107c4d2c2','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/ubuntu.svg',60,'OS','Ubuntu',0),
('12df2a21-6d83-42e3-99d0-4c4bc7ed08f9','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/reactjs.svg',60,'SKILL','ReactJS',10),
('33b08ad1-5c80-4e9f-8bd7-e140e28343f9','74971849-7dac-4489-afb8-cbcd1ffd73e4','',80,'LANGUAGE','English',1),
('44bd4313-6cc8-41d7-bdc0-a806a4a008f5','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/typescript.svg',75,'SKILL','Typescript',1),
('456c56bd-2aad-4563-b8d5-51552ccfbeff','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/javascript.svg',80,'SKILL','Javascript',1),
('475e25b2-6175-45c9-8047-5cac40cd3406','74971849-7dac-4489-afb8-cbcd1ffd73e4','',100,'LANGUAGE','Spanish',0),
('639c0549-1fe7-4d37-a0c8-25ac5bb5bb71','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/macos.svg',65,'OS','macOS',0),
('657721e0-1b55-41b6-b5df-2506e3567be1','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/bootstrap-4.svg',80,'SKILL','Bootstrap',101),
('81a0d848-a114-4d43-8cc1-35f4e4d5757d','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/ngrx.svg',70,'SKILL','Ngrx',3),
('872f1f53-5383-43aa-b5a5-a62ae49cd784','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/win2.svg',60,'OS','Windows',0),
('8a82e8a1-0617-4c61-8c30-6612dda1e7f1','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/nestjs.svg',80,'SKILL','NestJS',21),
('92d7d4fd-732d-4c81-848d-faaa2ab524a9','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/expressjs.svg',80,'SKILL','Express.js',20),
('ae3dd0a0-030b-4517-9de8-74fa03e5208e','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/nodejs.svg',60,'SKILL','NodeJS',23),
('af9b0a2a-44b8-4f5f-8d5c-78016fe5fb12','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/tailwindcss.svg',80,'SKILL','Tailwind',101),
('b7ca44ed-6fbb-401a-ae11-81147149c0e0','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/angular.svg',80,'SKILL','Angular',0),
('c3f0dacd-4c3a-4c72-b82e-b6d119a68e89','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/docker.svg',65,'SKILL','Docker',24),
('da97413e-0e77-4fcc-9b71-ee24f1b2f1b6','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/IntelliJ-IDEA.svg',65,'TOOL','IntelliJ Idea',0),
('e802c9cf-1c12-4348-8fa1-f14a779c62aa','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/rxjs.svg',70,'SKILL','RxJS',2),
('eff1f86e-37d1-4fa6-ac01-68ec0563ea10','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/graphql.svg',60,'SKILL','GraphQL',21),
('f07095c2-30ab-47d5-8c59-bff2af8c3d0b','74971849-7dac-4489-afb8-cbcd1ffd73e4','assets/icons/brand-icons/vscode.svg',77,'TOOL','VSCode',0);
/*!40000 ALTER TABLE `ability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `career`
--

DROP TABLE IF EXISTS `career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `career` (
  `id` varchar(36) NOT NULL,
  `resumeId` varchar(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `jobTitle` varchar(255) NOT NULL,
  `description` varchar(450) NOT NULL,
  `weight` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d695eecfd82e31533e4a22291f7` (`resumeId`),
  CONSTRAINT `FK_d695eecfd82e31533e4a22291f7` FOREIGN KEY (`resumeId`) REFERENCES `resume` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career`
--

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;
INSERT INTO `career` VALUES
('0ebaea8a-02c2-4017-9c33-43911e2bc109','74971849-7dac-4489-afb8-cbcd1ffd73e4','D4ALL','2019-10-28','2020-09-18','Tepic','México','Nayarit','Software Developer','<p>Worked developing Drupal Websites. Another CMS that I worked was Microsoft Umbraco Websites. I also worked doing some QA for internal projects.</p>',2),
('6bc7f7d1-088e-4b87-8666-f7c4a43a40e4','74971849-7dac-4489-afb8-cbcd1ffd73e4','Sonatafy/eMusic','2021-04-05','2024-04-30','Remote -  New York City','United States','New York','Frontend Developer','<p>Worked for Sonatafy\'s client eMusic as Angular and AngularJS developer. Worked on its Web sites: emusic.com, estories.com, emusiclive.com. TBD</p>',0),
('a6183c6f-9a9f-4028-b8ac-6758476c657d','74971849-7dac-4489-afb8-cbcd1ffd73e4','Dot Devs','2020-11-16','2021-04-02','Tepic','México','Nayarit','Software Developer','<p>Worked designing and developing API services in NestJS Framwork and GraphQL. I also Worked fixing issues for some Drupal Websites.</p>',1),
('c95f77e9-5312-447f-b5c5-f8efe12a2946','74971849-7dac-4489-afb8-cbcd1ffd73e4','Heteria Group','2018-09-03','2019-10-25','Tepic','México','Nayarit','Software Developer','<p>Designing and developing RESTful API services in Laravel for a human resources management system. I also worked developing the client side in Angular</p>',3),
('ecec293f-cbc1-4381-9ad3-ee891e1c5a68','74971849-7dac-4489-afb8-cbcd1ffd73e4','ITT CIDETI','2018-03-05','2018-12-17','Tepic','México','Nayarit','Software developer intern','<p>Wrote RESTful API services in Node.js (Express.js) and worked on its client side with Angular and also its mobile application with IONIC</p>',4);
/*!40000 ALTER TABLE `career` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hobby`
--

DROP TABLE IF EXISTS `hobby`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hobby` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `imagehd` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `resumeId` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3334e00ad2c4f5f8cf08a83b5c1` (`resumeId`),
  CONSTRAINT `FK_3334e00ad2c4f5f8cf08a83b5c1` FOREIGN KEY (`resumeId`) REFERENCES `resume` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hobby`
--

LOCK TABLES `hobby` WRITE;
/*!40000 ALTER TABLE `hobby` DISABLE KEYS */;
INSERT INTO `hobby` VALUES
('3a0d2471-6e7c-4c1e-9b5a-4b373a0c7cf1','Welding','Yes, welding.','assets/images/welding.jpg','assets/images/welding.jpg',2,'74971849-7dac-4489-afb8-cbcd1ffd73e4'),
('df40663f-7379-4478-90cd-85422f6f0d25','Mountain biking','Mountain biking','assets/images/bike@1x.png','assets/images/bike@2x.png',0,'74971849-7dac-4489-afb8-cbcd1ffd73e4'),
('e002792d-e16c-458f-8a01-03cbd8b0a16d','Video Games','I love them!','assets/images/video-games@1x.png','assets/images/video-games@2x.png',1,'74971849-7dac-4489-afb8-cbcd1ffd73e4');
/*!40000 ALTER TABLE `hobby` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resume`
--

DROP TABLE IF EXISTS `resume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resume` (
  `id` varchar(36) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `about` text NOT NULL,
  `selected` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resume`
--

LOCK TABLES `resume` WRITE;
/*!40000 ALTER TABLE `resume` DISABLE KEYS */;
INSERT INTO `resume` VALUES
('74971849-7dac-4489-afb8-cbcd1ffd73e4','Fermin','Casillas','Nayarit','Tepic','México',31,'assets/images/profile.png','<p>Computer Systems Engineer with focus on Web development. Experience programming in frameworks such as Angular, NestJS, and developing API services with GraphQL and much more. As a person, I\'m always trying to find the way to be a better Software Developer and improve my programming skills and learn new software trends. Another thought that I have is working as a team is one of the best things that people can do, because there are things that you don\'t learn alone and the support as team mates is worth. If there is something that I don\'t know I can easily learn it from scratch. If there is an opportunity to be part of your company I will do my best to do a great work and I am always ready to face new challenges.</p><p>&nbsp;</p><p><a class=\"btn btn-secondary\" href=\"assets/files/Resume--Fermin-Casillas.pdf\">Download my resumse as pdf</a></p>',1),
('fed76570-d963-49bd-ae14-12c2f9f25913','Fermin','Casillas','Nayarit','Tepic','México',31,'asd','<p>asdasd</p>',0);
/*!40000 ALTER TABLE `resume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sierra_madre_hero_slide`
--

DROP TABLE IF EXISTS `sierra_madre_hero_slide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sierra_madre_hero_slide` (
  `id` varchar(36) NOT NULL,
  `mainPageId` varchar(255) NOT NULL,
  `mobileImageUrl` varchar(255) NOT NULL,
  `smImageUrl` varchar(255) NOT NULL,
  `mdImageUrl` varchar(255) NOT NULL,
  `lgImageUrl` varchar(255) NOT NULL,
  `xlImageUrl` varchar(255) NOT NULL,
  `xl2ImageUrl` varchar(255) NOT NULL,
  `xl3ImageUrl` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `sierraMadreMainPageId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c118bc221d124d9119d37275934` (`sierraMadreMainPageId`),
  CONSTRAINT `FK_c118bc221d124d9119d37275934` FOREIGN KEY (`sierraMadreMainPageId`) REFERENCES `sierra_madre_main_page` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sierra_madre_hero_slide`
--

LOCK TABLES `sierra_madre_hero_slide` WRITE;
/*!40000 ALTER TABLE `sierra_madre_hero_slide` DISABLE KEYS */;
/*!40000 ALTER TABLE `sierra_madre_hero_slide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sierra_madre_main_page`
--

DROP TABLE IF EXISTS `sierra_madre_main_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sierra_madre_main_page` (
  `id` varchar(36) NOT NULL,
  `street` varchar(255) NOT NULL,
  `houseNumber` varchar(255) NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipCode` int(11) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `selected` tinyint(4) NOT NULL,
  `weight` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sierra_madre_main_page`
--

LOCK TABLES `sierra_madre_main_page` WRITE;
/*!40000 ALTER TABLE `sierra_madre_main_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `sierra_madre_main_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sierra_madre_promo`
--

DROP TABLE IF EXISTS `sierra_madre_promo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sierra_madre_promo` (
  `id` varchar(36) NOT NULL,
  `mainPageId` varchar(255) NOT NULL,
  `backgroundImage` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `weight` int(11) NOT NULL,
  `sierraMadreMainPageId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a9c45165049cb840217cdc5dc32` (`sierraMadreMainPageId`),
  CONSTRAINT `FK_a9c45165049cb840217cdc5dc32` FOREIGN KEY (`sierraMadreMainPageId`) REFERENCES `sierra_madre_main_page` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sierra_madre_promo`
--

LOCK TABLES `sierra_madre_promo` WRITE;
/*!40000 ALTER TABLE `sierra_madre_promo` DISABLE KEYS */;
/*!40000 ALTER TABLE `sierra_madre_promo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sierra_madre_service`
--

DROP TABLE IF EXISTS `sierra_madre_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sierra_madre_service` (
  `id` varchar(36) NOT NULL,
  `mainPageId` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `mobileImageUrl` varchar(255) NOT NULL,
  `xlImageUrl` varchar(255) NOT NULL,
  `xl2ImageUrl` varchar(255) NOT NULL,
  `xl3ImageUrl` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `sierraMadreMainPageId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6e3f737e9923c455941a6129905` (`sierraMadreMainPageId`),
  CONSTRAINT `FK_6e3f737e9923c455941a6129905` FOREIGN KEY (`sierraMadreMainPageId`) REFERENCES `sierra_madre_main_page` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sierra_madre_service`
--

LOCK TABLES `sierra_madre_service` WRITE;
/*!40000 ALTER TABLE `sierra_madre_service` DISABLE KEYS */;
/*!40000 ALTER TABLE `sierra_madre_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
('e84dbe9f-93e2-4ae4-a6e0-0b10a4139316','mychelon@gmail.com','$2b$10$lBXzhTp1dlY/pfhRH6R3WeW8FHPGGYUKwC.Dt2ZwrxkN.YWUynKoy');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17  3:15:18
