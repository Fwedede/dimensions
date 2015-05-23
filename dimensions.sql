-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Sam 23 Mai 2015 à 14:45
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `dimensions`
--

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE IF NOT EXISTS `projet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(64) NOT NULL,
  `image_projet` varchar(128) NOT NULL,
  `infos` varchar(2048) NOT NULL,
  `nbr_package` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `projet`
--

INSERT INTO `projet` (`id`, `titre`, `image_projet`, `infos`, `nbr_package`) VALUES
(1, 'Appart''Expo', 'pack2-appart-expo-01', 'L''appart''Expo est un projet d''agencement et de décoration pour un appartement.<br>\nLes clients sont un jeune couple d''une trentaine d''années, la femme est artiste et l''homme est pompier. Ils aiment les matériaux durables, les couleurs vives et sont assez sensibles au respect de l''environnement.<br>\nLe projet proposé est une exposition des œuvres de madame comme une galerie d''art dans leur propre appartement avec des allusions aux milieux professionnels (des spots, des fiches signalétiques, une salle de bain ressemblant aux toilettes publique).<br>\nTout ça avec des couleurs comme ils le désiraient et des matériaux durables et écologiques (des sols en liège et en linoleum, des peintures écologiques et des mobiliers principalement en bois).', 0),
(2, 'Laine Moi', 'pack1-lainemoi-01', 'Laine Moi est spécialisé dans le Do It Yourself (DIY), plus précisément le tricot et le crochet, qui propose ses créations à la vente, ainsi que des cours. Ce projet est réalisé sur 2 supports : le print et le web.', 1),
(3, 'P''tits pois carottes', 'pack2-ppc-01', '', 2);

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

CREATE TABLE IF NOT EXISTS `realisations` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `id_projet` int(4) NOT NULL,
  `image` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Contenu de la table `realisations`
--

INSERT INTO `realisations` (`id`, `id_projet`, `image`, `description`) VALUES
(1, 1, 'pack2-appart-expo-01', 'Planche d''inspiration'),
(2, 1, 'pack2-appart-expo-02', 'Planche d''ambiance'),
(3, 1, 'pack2-appart-expo-03', 'Visuel 3D de l''appartement'),
(4, 1, 'pack2-appart-expo-04', 'Visuel 3D de l''appartement - Chambre et bureau'),
(5, 1, 'pack2-appart-expo-05', 'Visuel 3D de l''appartement - Salon vu de la salle à manger'),
(6, 1, 'pack2-appart-expo-06', 'Visuel 3D de l''appartement - Salon vu de l''entrée'),
(7, 1, 'pack2-appart-expo-07', 'Visuel 3D de l''appartement - Salle à manger et cuisine'),
(8, 1, 'pack2-appart-expo-08', 'Perspective fait à la main - Salle à manger et cuisine'),
(9, 1, 'pack2-appart-expo-09', 'Plan avant travaux'),
(11, 1, 'pack2-appart-expo-10', 'Zoning'),
(12, 1, 'pack2-appart-expo-11', 'Plan d''agencement'),
(13, 1, 'pack2-appart-expo-12', 'Plan d''éclairage'),
(14, 1, 'pack2-appart-expo-13', 'Elevation de la salle de bain'),
(15, 2, 'pack1-lainemoi-01', 'Logo du projet "Laine Moi"'),
(16, 2, 'pack1-lainemoi-02', 'Kit print'),
(17, 2, 'pack1-lainemoi-03', 'Wireframe du site internet'),
(18, 2, 'pack1-lainemoi-04', 'Maquette du site internet - Home'),
(19, 2, 'pack1-lainemoi-05', 'Maquette du site internet - Boutique'),
(20, 2, 'pack1-lainemoi-06', 'Maquette du site mobile - Home'),
(21, 2, 'pack1-lainemoi-07', 'Maquette du site mobile - Connexion'),
(22, 2, 'pack1-lainemoi-08', 'Maquette du site mobile - Profil'),
(23, 2, 'pack1-lainemoi-09', 'Maquette du site mobile - Paramètres'),
(24, 2, 'pack1-lainemoi-10', 'Maquette du site mobile - Boutique'),
(25, 2, 'pack1-lainemoi-11', 'Maquette du site mobile - Ajout panier'),
(26, 2, 'pack1-lainemoi-12', 'Maquette du site mobile - Panier'),
(27, 3, 'pack2-ppc-01', 'Logo "P''tits pois carottes"'),
(28, 3, 'pack2-ppc-02', 'Logo "P''tits pois carottes"'),
(29, 3, 'pack2-ppc-03', 'Logo "P''tits pois carottes"'),
(30, 3, 'pack2-ppc-04', 'Kit print'),
(31, 3, 'pack2-ppc-05', 'Enseigne'),
(32, 3, 'pack2-ppc-06', 'Sac'),
(33, 3, 'pack2-ppc-07', 'Typographie, couleurs et logo');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
