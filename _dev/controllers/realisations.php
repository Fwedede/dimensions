<?php

try {

	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);

}
catch(Exception $e) {

	die('Erreur : '.$e->getMessage());

}

// @TODO Est-ce qu'il est necessaire de préciser le charset?
$bdd->exec('SET CHARACTER SET utf8');

$q = $bdd->query('SELECT * FROM projet ORDER BY id DESC');

if ($q->rowCount() > 0) {

	$petit = array(false, true, true, false, false, true, true, false, false, true, true, false);

	for ($i=0; $d = $q->fetch(); $i++) {

		if ($petit[$i] === true) {

			$little = 'col-xl-5';

		}
		else {

			$little = 'col-xl-7';

		}

		if ($i % 2 != 0) {

			$little .= ' last';

		}

		require('views/realisations.html');

	}

}

$q->closeCursor();

?>
