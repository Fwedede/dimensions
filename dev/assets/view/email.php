<?php
$mail = 'clementfj@gmail.com'; // Déclaration de l'adresse de destination.
if (!preg_match("#^[\w-\._%\+]+@(hotmail|live|msn)\.[a-z]{2,6}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}
//=====Déclaration des messages au format texte et au format HTML.

$_POST['message'] = stripslashes($_POST['message']); // On enlève les slash qui se seraient ajoutés automatiquement
$_POST['message'] = htmlspecialchars($_POST['message']); // On rend inoffensives les balises HTML que le visiteur a pu rentrer
$_POST['message'] = nl2br($_POST['message']); // On crée des <br /> pour conserver les retours à la ligne

$message_txt = $_POST['message'];
$message_html = "<html><head></head><body>".$_POST['message']."</body></html>";
//==========

//=====Création de la boundary
$boundary = "-----=".md5(rand());
//==========

//=====Définition du sujet.
$sujet = $_POST['object'];
//=========

//=====Création du header de l'e-mail.
$header = "From: \"".$_POST['name']."\"<".$_POST['email'].">".$passage_ligne;
$header.= "Reply-to: \"".$_POST['name']."\" <".$_POST['email'].">".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========

//=====Création du message.
$message = $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format texte.
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_txt.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format HTML
$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//==========

//=====Envoi de l'e-mail.
mail($mail,$sujet,$message,$header);
//==========
?>
