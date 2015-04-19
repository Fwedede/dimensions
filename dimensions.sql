-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 19, 2015 at 12:42 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dimensions`
--

-- --------------------------------------------------------

--
-- Table structure for table `realisations`
--

CREATE TABLE IF NOT EXISTS `realisations` (
  `id` int(2) DEFAULT NULL,
  `img_package` varchar(19) DEFAULT NULL,
  `titre` varchar(11) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL,
  `description` varchar(58) DEFAULT NULL,
  `infos` varchar(216) DEFAULT NULL,
  `projet_nb` int(1) DEFAULT NULL,
  `projet_id` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `realisations`
--

INSERT INTO `realisations` (`id`, `img_package`, `titre`, `image`, `description`, `infos`, `projet_nb`, `projet_id`) VALUES
(1, 'Vignettes-pack0', 'Appart''Expo', 'pack2-appart-expo-01', 'Planche d''inspiration', 'C''est un projet de décoration sur le thème de l''appart''expo écolo', 0, 1),
(2, '', '', 'pack2-appart-expo-02', 'Planche d''ambiance', '', 0, 1),
(3, '', '', 'pack2-appart-expo-03', 'Visuel 3D de l''appartement', '', 0, 1),
(4, '', '', 'pack2-appart-expo-04', 'Visuel 3D de l''appartement - Chambre et bureau', '', 0, 1),
(5, '', '', 'pack2-appart-expo-05', 'Visuel 3D de l''appartement - Salon vu de la salle à manger', '', 0, 1),
(6, '', '', 'pack2-appart-expo-06', 'Visuel 3D de l''appartement - Salon vu de l''entrée', '', 0, 1),
(7, '', '', 'pack2-appart-expo-07', 'Visuel 3D de l''appartement - Salle à manger et cuisine', '', 0, 1),
(8, '', '', 'pack2-appart-expo-08', 'Perspective fait à la main - Salle à manger et cuisine', '', 0, 1),
(9, '', '', 'pack2-appart-expo-09', 'Plan avant travaux', '', 0, 1),
(10, '', '', 'pack2-appart-expo-10', 'Zoning', '', 0, 1),
(11, '', '', 'pack2-appart-expo-11', 'Plan d''agencement ', '', 0, 1),
(12, '', '', 'pack2-appart-expo-12', 'Plan d''éclairage', '', 0, 1),
(13, '', '', 'pack2-appart-expo-13', 'Elevation de la salle de bain', '', 0, 1),
(2, '', '', 'pack1-lainemoi-01', 'Logo du projet "Laine Moi"', '', 1, 2),
(1, 'Vignettes-pack1', 'Laine Moi', 'pack1-lainemoi-02', 'Kit print', '"Laine Moi" est spécialisé dans le Do It Yourself (DIY), plus précisément le tricot et le crochet, qui propose ses créations à la vente, ainsi que des cours. Ce projet est réalisé sur 2 supports : le print et le web.', 1, 2),
(3, '', '', 'pack1-lainemoi-03', 'Wireframe du site internet', '', 1, 2),
(4, '', '', 'pack1-lainemoi-04', 'Maquette du site internet - Home', '', 1, 2),
(5, '', '', 'pack1-lainemoi-05', 'Maquette du site internet - Boutique', '', 1, 2),
(6, '', '', 'pack1-lainemoi-06', 'Maquette du site mobile - Home', '', 1, 2),
(7, '', '', 'pack1-lainemoi-07', 'Maquette du site mobile - Connexion', '', 1, 2),
(8, '', '', 'pack1-lainemoi-08', 'Maquette du site mobile - Profil', '', 1, 2),
(9, '', '', 'pack1-lainemoi-09', 'Maquette du site mobile - Paramètres', '', 1, 2),
(10, '', '', 'pack1-lainemoi-10', 'Maquette du site mobile - Boutique', '', 1, 2),
(11, '', '', 'pack1-lainemoi-11', 'Maquette du site mobile - Ajout panier', '', 1, 2),
(12, '', '', 'pack1-lainemoi-12', 'Maquette du site mobile - Panier', '', 1, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
