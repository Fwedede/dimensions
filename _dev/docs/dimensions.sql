-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 30 Juillet 2015 à 18:28
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `dimensions`
--

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
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
(1, 'Appart''Expo', 'pack2-appart-expo-00', 'L''appart''Expo est un projet d''agencement et de décoration pour un appartement.', 0),
(2, 'Laine Moi', 'pack1-lainemoi-01', 'Laine Moi est spécialisé dans le Do It Yourself (DIY), plus précisément le tricot et le crochet, qui propose ses créations à la vente, ainsi que des cours. Ce projet est réalisé sur 2 supports : le print et le web.', 1),
(3, 'P''tits pois carottes', 'pack2-ppc-01', '', 2);

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

DROP TABLE IF EXISTS `realisations`;
CREATE TABLE IF NOT EXISTS `realisations` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `id_projet` int(4) NOT NULL,
  `image` varchar(128) NOT NULL,
  `description` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36 ;

--
-- Contenu de la table `realisations`
--

INSERT INTO `realisations` (`id`, `id_projet`, `image`, `description`) VALUES
(1, 1, 'pack2-appart-expo-00', 'L''appart''Expo est un projet d''agencement et de décoration pour un appartement.<br>\nLes clients sont un jeune couple d''une trentaine d''années, la femme est artiste et l''homme est pompier. Ils aiment les matériaux durables, les couleurs vives et sont assez sensibles au respect de l''environnement.<br><br>\nLe projet proposé est une exposition des œuvres de madame comme une galerie d''art dans leur propre appartement avec des allusions aux milieux professionnels (des spots, des fiches signalétiques, une salle de bain ressemblant aux toilettes publique).<br><br>\nTout ça avec des couleurs comme ils le désiraient et des matériaux durables et écologiques (des sols en liège et en linoléum, des peintures écologiques et des mobiliers principalement en bois).'),
(2, 1, 'pack2-appart-expo-01', '<h4>Planche d''inspiration</h4><p>Cette planche a été réalisée à partir des mots qui me faisaient penser au thème du projet : Exposition et écolo.<br>On peut donc y retrouver : <ul><li>des pinceaux, un mannequin articulé ou un projecteurs pour le coté exposition</li><li>des matériaux durables comme le bois, la piere ou le béton mais aussi de la verdure pour une démarche écologique</li><li>et des couleurs pour harmoniser le tout</li></ul></p>'),
(3, 1, 'pack2-appart-expo-02', '<h4>Planche d''ambiance</h4><p>La planche d''ambiance d''écoule naturellement de la planche d''inspiration.<br>On y trouve les éléments que j''ai cité auparavant : <ul><li>les matériaux (le bois, la pierre et le béton)</li><li>les touches de couleurs</li><li>la verdure</li><li>les spots et projecteurs</li></ul>A la différence de la planche précedente, celle-ci doit permettre aux clients de se projeter plus facilement grâce à sa perspective.</p>'),
(4, 1, 'pack2-appart-expo-03', '<h4>Visuel 3D de l''appartement</h4><p>Ce visuel présente l''appartement vue de dessus. On peut y apercevoir, l''entrée avec le grand salon, une grande cuisine ouverte sur la salle à manger, avec une chambre et un bureau pour que Madame puisse travailler, un dressing donnant sur les parties humides de l''appartement.<br><br>Sur les murs de l''entrée, du salon et de la salle à manger sont accrochés les oeuvres de notre client-artiste, comme une exposition dans une galerie d''art.</p>'),
(5, 1, 'pack2-appart-expo-04', '<h4>Visuel 3D de l''appartement - Chambre et bureau</h4><p>Ce visuel présente la chambre avec une tête de lit sur mesure, une grande verrière qui donne sur le bureau et atelier de la cliente afin de gagner en luminosité.<br>Le bureau et lui aussi sur mesure.<br> Au sol, un parquet écologique.</p>'),
(6, 1, 'pack2-appart-expo-05', '<h4>Visuel 3D de l''appartement - Salon vu de la salle à manger</h4><p>Ici, on se trouve dans la salle à manger, on peut y voir le salon avec un grand mur en pierre, un sol en béton ciré.<br>La couleur est ici amené avec le mobilier.</p>'),
(7, 1, 'pack2-appart-expo-06', '<h4>Visuel 3D de l''appartement - Salon vu de l''entrée</h4><p>Toujours le salon mais vue depuis l''entrée, on y apercoit la cuisine ouverte en arrière plan.</p>'),
(8, 1, 'pack2-appart-expo-07', '<h4>Visuel 3D de l''appartement - Salle à manger et cuisine</h4><p>Ce visuel présente la grande cuisine ouverte sur la salle à manger.<br>La cuisine est en inox pour un aspect industriel, professionnel.<br>Une grande table en bois avec des chaises Tolix, toujours pour un coté cantine, lieux publiques.</p>'),
(9, 1, 'pack2-appart-expo-08', '<h4>Perspective faite à la main - Salle à manger et cuisine</h4><p>Un perspective faite à la main de la salle à manger et de la cuisine.<br>On y voit la crédence de la cuisine, aspect "métro" et les tableaux accrochés sur le mur.</p>'),
(10, 1, 'pack2-appart-expo-09', '<h4>Plan avant travaux</h4><p>CE visuel est le plan avant travaux. On peut remarquer les volumes atypiques de l''appartement.</p>'),
(11, 1, 'pack2-appart-expo-10', '<h4>Zoning</h4><p>Le zoning identifie les différentes zones de l''appartement :<ul><li>En gris, l''entrée et le couloir</li><li>En jaune, le salon</li><li>En rouge, la cuisine et la salle à manger</li><li>En violet, la chambre</li><li>En orange, le bureau</li><li>En vert, le dressing</li><li>Et en bleu, les toilettes, la buanderie et la salle de bain.</li></ul></p>'),
(12, 1, 'pack2-appart-expo-11', '<h4>Plan d''agencement</h4><p>Le plan d''agencement comporte la disposition des mobiliers dans chaque pièce et leurs côtes.</p>'),
(13, 1, 'pack2-appart-expo-12', '<h4>Plan d''éclairage</h4><p>Sur ce plan sont disposés tout ce qui concerne l''éclairage :<ul><li>les prises, les prises commandées</li><li>les suspensions, les spots encastrés, les lampes à poser ou les LEDS</li><li>les simples et doubles interrupteurs ou les interrupeturs va-et-vient</li><li>les prises téléphone ou RJ45</li><li>les radiateurs</li></ul></p>'),
(14, 1, 'pack2-appart-expo-13', '<h4>Elevation de la salle de bain</h4><p>Un élévation est une projection sur le plan vertical parallèle à une face.<br>Ici l''élévation est celle de la salle de bain, avec les plans de vasque en inox toujours pour le rappel aux lieux publiques et professionnels.<br>Sur le mur un Tie and Dye, du vert au bleu.<br>Sur la droit, c''est-à-dire au fond de la salle de bain, une douche à l''italienne avec un receveur écologique; l''eau est analysée et reversée si peu polluée et sale.<br>Au sol de la salle de bain et de la partie humides de l''appartement du liège, un matériau écologique, parfait pour les pièces humides.</p>'),
(15, 2, 'pack1-lainemoi-01', '<h4>Logo du projet "Laine Moi"</h4><p>Le logo "Laine Moi" a été créé à partir d''un dessin d''une pelote de laine où j''y ai inscrit le nom du projet sur l''étiquette.</p>'),
(16, 2, 'pack1-lainemoi-02', '<h4>Kit print</h4><p>Le kit print est composé : <ul><li>de cartes de visites</li><li>de badges</li><li>de T-shirt</li></ul></p>'),
(17, 2, 'pack1-lainemoi-03', '<h4>Wireframe du site internet</h4><p>Le wireframe représente la maquette du site, avec sa navigation, son ergonomie.<br><br>Cela permet d''avoir le fonctionnement du site, avec les différentes liens et éléments graphiques et fonctionnels.<br>Réalisé avec Axure</p>'),
(18, 2, 'pack1-lainemoi-04', '<h4>Maquette du site internet - Home</h4><p>ce visuel représente la maquette du site réalisé à partir d''une recherche créative sur les couleurs, la typographie, etc.<br><br>O peut y voir :<ul><li>le header avec le logo,</li><li>les liens pour les réseaux sociaux,</li><li>le menu à gauche,</li><li>une partie centrale avec des informations importantes,</li><li>la partie de droite dédié au profil client et à son panier,</li><li>et le footer.</p>'),
(19, 2, 'pack1-lainemoi-05', '<h4>Maquette du site internet - Boutique</h4><p>Cette maquette décrit une page type de la boutique.<br>Ce qui a changé par rapport à la "home", est le menu de droite et la partie centrale. On peut y voir des zones pour chaque produit présenté avec un titre, une image et un prix.</p>'),
(20, 2, 'pack1-lainemoi-06', '<h4>Maquette du site mobile - Home</h4><p>Cette maquette présente l''application mobile du site internet. Ici la page d''accueil.</p>'),
(21, 2, 'pack1-lainemoi-07', '<h4>Maquette du site mobile - Connexion</h4><p>Ici, le visuel de la page "Connexion", avec les mêmes couleurs que sur la maquette du site internet.</p>'),
(22, 2, 'pack1-lainemoi-08', '<h4>Maquette du site mobile - Profil</h4><p>Egalement la même chose pour le "Profil", avec les informations suivantes :<ul><li>Mes commandes</li><li>Mes atelier</li><li>Mes données personnelles</li><li>Mes adresses</li><li>Mes cartes de paiements</li></ul></p>'),
(23, 2, 'pack1-lainemoi-09', '<h4>Maquette du site mobile - Paramètres</h4><p>Ce visuel décrit les paramètres, ce qui coresspond au menu sur la version du site internet classique.<br<<br>On peut y trouver :<ul><li>Laine moi, qui ?</li><li>La boutique</li><li> Les ateliers</li><li>Contact</li><li>Rechercher</li><li>Newsletter</li></p>'),
(24, 2, 'pack1-lainemoi-10', '<h4>Maquette du site mobile - Boutique</h4><p>Sur le visuel de la boutique, on y retrouve le filtre, ainsi que les zones pour chaque produit avec :<ul><li>une image</li><li>un titre</li><li>et le prix.</li></ul></p>'),
(25, 2, 'pack1-lainemoi-11', '<h4>Maquette du site mobile - Ajout panier</h4><p>Pour ajouter au panier, il suffit d''effectuer un appui long sur le produit souhaité et de choisir l''icone représentant le panier (à droite).<br><br>De la même, pour ajouter un produit à une liste d''achat ou de le partager sur les réseaux sociaux ou autre.</p>'),
(26, 2, 'pack1-lainemoi-12', '<h4>Maquette du site mobile - Panier</h4><p>Ce visuel présente le panier d''un client avec différents produits, le total de la commande et le montant de la livraison.</p>'),
(27, 2, 'pack1-lainemoi-13', '<h4>Maquette du site mobile</h4><p>Récapitulatif des visuels pour l’application mobile.</p>'),
(28, 3, 'pack2-ppc-01', '<h4>Logo "P''tits pois carottes"</h4><p>Logo du projet "P''tits pois carottes" sur fond blanc.</p>'),
(29, 3, 'pack2-ppc-02', '<h4>Logo "P''tits pois carottes"</h4><p>Logo du projet "P''tits pois carottes" sur un fond en bois.</p>'),
(30, 3, 'pack2-ppc-03', '<h4>Logo "P''tits pois carottes"</h4><p>Logo du projet "P''tits pois carottes" sur un fond verdoyant.</p>'),
(31, 3, 'pack2-ppc-04', '<h4>Kit print</h4><p>LE kit print comporte :<ul><li>des gobelets</li><li>des sacs en papier</li><li>des cartes de visites</li></ul></p>'),
(32, 3, 'pack2-ppc-05', '<h4>Enseigne</h4><p>Ce visuel représente l''enseigne du projet.</p>'),
(33, 3, 'pack2-ppc-06', '<h4>Sac</h4><p>Ici, un sac avec le logo du projet "P''tits pois carottes"</p>'),
(34, 3, 'pack2-ppc-07', '<h4>Typographie, couleurs et logo</h4><p>Ce visuel regroupe :<ul><li>la typographie choisie,</li><li>les couleurs choisie en rapport avec le logo et le nom du projet</li></ul></p>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
