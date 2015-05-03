<?php

try {
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e) {
	die('Erreur : '.$e->getMessage());
}

$bdd->exec("SET CHARACTER SET utf8");
$req = $bdd->query("SELECT * FROM realisations WHERE projet_id = '".intval($_POST['projet'])."'");

if($res = $req->fetch())

?>
<div class="popin">
	<div class="close"><img class="img" src="assets/img/utilities/close.png"></div>
	<h1 class="font-xl"><?php echo $res['titre'];?></h1>
	<div class="desc font-xs"><?php echo $res['infos'];?></div><!--
 --><div class="carousel">
    	<div class="previews">
				<?php

try {
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
}
catch(Exception $e) {
	die('Erreur : '.$e->getMessage());
}

$i = 0;
$bdd->exec("SET CHARACTER SET utf8");
$req3 = $bdd->query("SELECT * FROM realisations WHERE projet_id = ".intval($_POST['projet'])." ORDER BY id");

while($res3 = $req3->fetch()) {
	$active = '';

	if($i == 0)
		$active = 'active';

	?>
	<div class="preview <?php echo $active;?>">
	<!--div class="item <?php echo $active;?>"-->
	<img class="img" src="assets/img/projets/<?php echo $res3['image'];?>.png" alt="<?php echo $res3['infos'];?>">
		<div class="carousel-caption font-xs">
		<?php echo $res3['description'];?>
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
</div>
