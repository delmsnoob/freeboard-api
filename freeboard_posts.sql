-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: freeboard
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(45) NOT NULL,
  `author_email` varchar(45) NOT NULL,
  `author_post` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Braydon Buck','braydonbuck@yahoo.com','Like so many organizations these days, AutoDesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it\'s moving to a subscription model.','2022-05-18 07:20:08'),(2,'adsd','asd','asd','2022-05-18 07:22:40'),(3,'asdasd','asda','asdad\n','2022-05-18 07:23:09'),(4,'asd','asd','asd','2022-05-18 07:24:47'),(5,'asdasd','sdas','asdasd','2022-05-18 07:24:59'),(6,'Lonnie S. Wallin','LonnieSWallin@rhyta.com','Greg understood that this situation would make Michael terribly uncomforatble. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let i','2022-05-19 03:16:41'),(12,'as','asd@asdasd.com','asd','2022-05-19 09:27:03'),(13,'Alyssa Jones','AlyssaGJones@dayrep.com','I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one sied of the alley. I had wandered into it at noontime, when all nature is pecuilarly quiet.','2022-05-19 09:55:29'),(14,'Alyssa Jones','AlyssaGJones@dayrep.com','I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one sied of the alley. I had wandered into it at noontime, when all nature is pecuilarly quiet.','2022-05-19 09:55:29'),(15,'Carol Mills','CarolJMills@rhyta.com','What is the best way to get what you want? she asked. He lookd down at the ground knowing that she wouldn\'t like his answer. He hesitated, knowing that the truth would only hurt. How was he going to.','2022-05-19 10:00:28'),(16,'Trisha A. Lacey','TrishaALacey@jourrapide.com','It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice.','2022-05-19 10:09:25');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-19 18:51:44
