<?php

try {
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e) {
	die('Erreur : '.$e->getMessage());
}

$bdd->exec("SET CHARACTER SET utf8");
$req = $bdd->query("SELECT * FROM realisations INNER JOIN projet ON realisations.id_projet = projet.id WHERE id_projet = '".intval($_POST['projet'])."'");

if($res = $req->fetch())

	?>
<div class="popin">
	<div class="close"></div>
	<h1 class="font-xl"><?php echo $res['titre'];?></h1>
	<div class="carousel">
		<div class="previews">
			<?php

			$i = 0;
			$bdd->exec("SET CHARACTER SET utf8");
			$req3 = $bdd->query("SELECT * FROM realisations INNER JOIN projet ON realisations.id_projet = projet.id WHERE id_projet = '".intval($_POST['projet'])."' ORDER BY id_projet");

			while($res3 = $req3->fetch()) {
				$active = '';

				if($i == 0)
					$active = 'active';
				?>
				<div class="preview <?php echo $active;?>">
				<div class="desc font-xs scrollbar">
					<?php echo $res3['description'];?>
					<div class="force-overflow"></div>
				</div>
				<div class="image">			
					<img class="img" src="assets/img/projets/<?php echo $res3['image'];?>.png" alt="<?php echo $res3['infos'];?>">
				</div>
				</div>

				<?php
				$i++;
			}
			?>
		</div>
		<div class='controls'>
			<a class='next' data-action='next' href='#'>›</a>
			<a class='prev' data-action='prev' href='#'>‹</a>
		</div>
	</div>
</div>
