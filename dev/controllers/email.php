<?php
$catcher = 'clementfj@gmail.com';
if (!preg_match("#^[\w-\._%\+]+@(hotmail|live|msn)\.[a-z]{2,6}$#", $catcher)) // On filtre les serveurs qui rencontrent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}
//=====Déclaration des messages au format texte et au format HTML.

$message = trim($_POST['message']);
$message = stripslashes($message); // On enlève les slash qui se seraient ajoutés automatiquement
$message = htmlspecialchars($message); // On rend inoffensives les balises HTML que le visiteur a pu rentrer
$message = nl2br($message); // On crée des <br /> pour conserver les retours à la ligne

$objet = trim($_POST['object']);
$objet = stripslashes($objet); // On enlève les slash qui se seraient ajoutés automatiquement
$objet = htmlspecialchars($objet); // On rend inoffensives les balises HTML que le visiteur a pu rentrer

$mail = trim($_POST['email']);
// $mail = filter_var($email, FILTER_VALIDATE_EMAIL);

$nom = trim($_POST['name']);
$nom = stripslashes($nom); // On enlève les slash qui se seraient ajoutés automatiquement
$nom = htmlspecialchars($nom); // On rend inoffensives les balises HTML que le visiteur a pu rentrer

// $message_txt = $_POST['message'];
$message_html = "<html><head></head><body>Nom : ".$nom."<br><br>E-mail : ".$mail."<br><br>Objet : ".$objet."<br><br>Message :<br><br>".$message."</body></html>";
//==========

//=====Création de la boundary
$boundary = "-----=".md5(rand());
//==========

//=====Définition du sujet.
$sujet = 'Contact';
//=========

//=====Création du header de l'e-mail.
$header = "From: \"".$_POST['name']."\"<".$_POST['email'].">".$passage_ligne;
$header.= "Reply-to: \"".$_POST['name']."\" <".$_POST['email'].">".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========

//=====Création du message.
// $message = $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format texte.
// $message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
// $message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
// $message.= $passage_ligne.$message_txt.$passage_ligne;
//==========
$message = $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format HTML
$message.= "Content-Type: text/html; charset=\"utf-8\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//==========

//=====Envoi de l'e-mail.
mail($catcher,$sujet,$message,$header);
//==========



$mail2 = $_POST['email']; // Déclaration de l'adresse de destination.
if (!preg_match("#^[\w-\._%\+]+@(hotmail|live|msn)\.[a-z]{2,6}$#", $mail2)) // On filtre les serveurs qui rencontrent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}
//=====Déclaration des messages au format texte et au format HTML.

$message2_txt = 'ok frere';
$message2_html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>*|MC:SUBJECT|*</title><style type="text/css">body,#bodyTable,#bodyCell{height:100% !important;margin:0;padding:0;width:100% !important;}table{border-collapse:collapse;}img,a img{border:0;outline:none;text-decoration:none;}h1,h2,h3,h4,h5,h6{margin:0;padding:0;}p{margin:1em 0;padding:0;}a{word-wrap:break-word;}.ReadMsgBody{width:100%;}.ExternalClass{width:100%;}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%;}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}#outlook a{padding:0;}img{-ms-interpolation-mode:bicubic;}body,table,td,p,a,li,blockquote{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}#bodyCell{padding:20px;border-top:0;}.mcnImage{vertical-align:bottom;}.mcnTextContent img{height:auto !important;}/body,#bodyTable{background-color:#ffffff;}#bodyCell{border-top:0;}#templateContainer{border:0;}h1{color:#606060 !important;display:block;font-family:Helvetica;font-size:40px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:-1px;margin:0;text-align:left;}h2{color:#404040 !important;display:block;font-family:"Comic Sans MS", "Marker Felt-Thin", Arial, sans-serif;font-size:26px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:-.75px;margin:0;text-align:left;}h3{color:#606060 !important;display:block;font-family:Helvetica;font-size:18px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:-.5px;margin:0;text-align:left;}h4{color:#808080 !important;display:block;font-family:Helvetica;font-size:16px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:normal;margin:0;text-align:left;}#templatePreheader{background-color:#FFFFFF;border-top:0;border-bottom:0;}.preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{color:#606060;font-family:Helvetica;font-size:11px;line-height:125%;text-align:left;}.preheaderContainer .mcnTextContent a{color:#606060;font-weight:normal;text-decoration:underline;}#templateHeader{background-color:#FFFFFF;border-top:0;border-bottom:0;}.headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;}.headerContainer .mcnTextContent a{color:#6DC6DD;font-weight:normal;text-decoration:underline;}#templateBody{background-color:#FFFFFF;border-top:0;border-bottom:0;}.bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;}.bodyContainer .mcnTextContent a{color:#6DC6DD;font-weight:normal;text-decoration:underline;}#templateFooter{background-color:#FFFFFF;border-top:0;border-bottom:0;}.footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{color:#606060;font-family:Helvetica;font-size:11px;line-height:125%;text-align:left;}.footerContainer .mcnTextContent a{color:#606060;font-weight:normal;text-decoration:underline;}@media only screen and (max-width: 480px){body,table,td,p,a,li,blockquote{-webkit-text-size-adjust:none !important;}}@media only screen and (max-width: 480px){body{width:100% !important;min-width:100% !important;}}@media only screen and (max-width: 480px){td[id=bodyCell]{padding:10px !important;}}@media only screen and (max-width: 480px){table[class=mcnTextContentContainer]{width:100% !important;}}@media only screen and (max-width: 480px){table[class=mcnBoxedTextContentContainer]{width:100% !important;}}@media only screen and (max-width: 480px){table[class=mcpreview-image-uploader]{width:100% !important;display:none !important;}}@media only screen and (max-width: 480px){img[class=mcnImage]{width:100% !important;}}@media only screen and (max-width: 480px){table[class=mcnImageGroupContentContainer]{width:100% !important;}}@media only screen and (max-width: 480px){td[class=mcnImageGroupContent]{padding:9px !important;}}@media only screen and (max-width: 480px){td[class=mcnImageGroupBlockInner]{padding-bottom:0 !important;padding-top:0 !important;}}@media only screen and (max-width: 480px){tbody[class=mcnImageGroupBlockOuter]{padding-bottom:9px !important;padding-top:9px !important;}}@media only screen and (max-width: 480px){table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{width:100% !important;}}@media only screen and (max-width: 480px){table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{width:100% !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{padding-right:18px !important;padding-left:18px !important;padding-bottom:0 !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardBottomImageContent]{padding-bottom:9px !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardTopImageContent]{padding-top:18px !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{padding-right:18px !important;padding-left:18px !important;padding-bottom:0 !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardBottomImageContent]{padding-bottom:9px !important;}}@media only screen and (max-width: 480px){td[class=mcnImageCardTopImageContent]{padding-top:18px !important;}}@media only screen and (max-width: 480px){table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{padding-top:9px !important;}}@media only screen and (max-width: 480px){td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{padding-top:18px !important;}}@media only screen and (max-width: 480px){td[class=mcnBoxedTextContentColumn]{padding-left:18px !important;padding-right:18px !important;}}@media only screen and (max-width: 480px){td[class=mcnTextContent]{padding-right:18px !important;padding-left:18px !important;}}@media only screen and (max-width: 480px){table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{width:100% !important;}}@media only screen and (max-width: 480px){h1{font-size:24px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){h2{font-size:20px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){h3{font-size:18px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){h4{font-size:16px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{font-size:18px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){table[id=templatePreheader]{display:block !important;}}@media only screen and (max-width: 480px){td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{font-size:14px !important;line-height:115% !important;}}@media only screen and (max-width: 480px){td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{font-size:18px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{font-size:18px !important;line-height:125% !important;}}@media only screen and (max-width: 480px){td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{font-size:14px !important;line-height:115% !important;}}@media only screen and (max-width: 480px){td[class=footerContainer] a[class=utilityLink]{display:block !important;}}</style></head><body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0"><center><table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"><tr><td align="center" valign="top" id="bodyCell"><table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer"><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader"><tr><td valign="top" class="preheaderContainer" style="padding-top:9px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"><tbody class="mcnTextBlockOuter"><tr><td valign="top" class="mcnTextBlockInner"><table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer"><tbody><tr><td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">Use this area to offer a short preview of your emails content.</td></tr></tbody></table><table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer"><tbody><tr><td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:0;"><a href="*|ARCHIVE|*" target="_blank"><font><font>Voir ce courriel dans votre navigateur</font></font></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></table></td></tr><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader"><tr> <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock"><tbody class="mcnImageBlockOuter"><tr><td valign="top" style="padding:0px" class="mcnImageBlockInner"><table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"><tbody><tr><td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;"><img align="center" alt="" src="https://gallery.mailchimp.com/ad36d6e8318f863a118900c46/images/329e8f39-5686-497d-b496-bda4b86e307b.png" width="600" style="max-width:1152px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage"></td></tr></tbody></table></td></tr></tbody></table></td></tr></table></td></tr><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody"><tr> <td valign="top" class="bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"><tbody class="mcnTextBlockOuter"><tr><td valign="top" class="mcnTextBlockInner"><table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer"><tbody><tr><td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;"><h1 style="margin: 0px;padding: 0px;font-family: Helvetica;font-size: 40px;line-height: 50px;letter-spacing: -1px;color: #606060 !important;"><span style="font-size:16px"><span style="font-family:verdana,geneva,sans-serif"><span style="line-height:1.6em">Merci pour votre prise de contact</span></span></span></h1><p style="margin: 1em 0px;padding: 0px;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 22.5px;"><span style="font-size:14px"><span style="line-height:normal">Bonjour,</span><br style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;"><br style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;"><span style="line-height:normal">Je vous remercie&nbsp;de l\'intérêt que vous portez à mon entreprise et prends réception de votre demande.&nbsp;<br>Elle sera traitée dans les meilleurs délais.<br><br>Avec nos salutations distinguées.<br>L\'agence Dimensions -&nbsp;</span>Agence spécialisée dans l\'identité visuelle, graphique, digitale et agencée.</span></p><p>&nbsp;</p></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock"><tbody class="mcnFollowBlockOuter"><tr><td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer"><tbody><tr><td align="center" style="padding-left:9px;padding-right:9px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;"><tbody><tr><td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top"><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked"> <tbody><tr> <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px; padding-bottom:5px;"> <a href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/dark-facebook-96.png" alt="Facebook" class="mcnFollowBlockIcon" width="48" style="width:48px; max-width:48px; display:block;"></a> </td></tr><tr> <td align="center" valign="top" class="mcnFollowTextContent" style="padding-right:10px; padding-bottom:9px;"> <a href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" target="_blank" style="color: #606060;font-family: Arial;font-size: 11px;font-weight: normal;line-height: 100%;text-align: center;text-decoration: none;">Facebook</a> </td></tr></tbody></table><!--[if gte mso 6]></td><td align="left" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked"> <tbody><tr> <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px; padding-bottom:5px;"> <a href="http://localhost/dimensions/" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/dark-link-96.png" alt="Agence Dimensions" class="mcnFollowBlockIcon" width="48" style="width:48px; max-width:48px; display:block;"></a> </td></tr><tr> <td align="center" valign="top" class="mcnFollowTextContent" style="padding-right:10px; padding-bottom:9px;"> <a href="http://localhost/dimensions/" target="_blank" style="color: #606060;font-family: Arial;font-size: 11px;font-weight: normal;line-height: 100%;text-align: center;text-decoration: none;">Agence Dimensions</a> </td></tr></tbody></table><!--[if gte mso 6]></td><td align="left" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked"> <tbody><tr> <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:0; padding-bottom:5px;"> <a href="http://www.pinterest.com" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/dark-pinterest-96.png" alt="Pinterest" class="mcnFollowBlockIcon" width="48" style="width:48px; max-width:48px; display:block;"></a> </td></tr><tr> <td align="center" valign="top" class="mcnFollowTextContent" style="padding-right:0; padding-bottom:9px;"> <a href="http://www.pinterest.com" target="_blank" style="color: #606060;font-family: Arial;font-size: 11px;font-weight: normal;line-height: 100%;text-align: center;text-decoration: none;">Pinterest</a> </td></tr></tbody></table><!--[if gte mso 6]></td><td align="left" valign="top"><![endif]--></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></table></td></tr><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter"><tr> <td valign="top" class="footerContainer" style="padding-bottom:9px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"><tbody class="mcnTextBlockOuter"><tr><td valign="top" class="mcnTextBlockInner"><table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer"><tbody><tr><td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;"><em>Copyright © 2015 - Agence Dimensions, </em>Tous droits réservés.</td></tr></tbody></table></td></tr></tbody></table></td></tr></table></td></tr></table></td></tr></table></center></body></html>';
//==========

//=====Création de la boundary
$boundary = "-----=".md5(rand());
//==========

//=====Définition du sujet.
$sujet2 = 'Merci pour votre prise de contact';
//=========

//=====Création du header de l'e-mail.
$header2 = "From: \"".$_POST['name']."\"<".$_POST['email'].">".$passage_ligne;
$header2.= "Reply-to: \"".$_POST['name']."\" <".$_POST['email'].">".$passage_ligne;
$header2.= "MIME-Version: 1.0".$passage_ligne;
$header2.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========

//=====Création du message.
$message2 = $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format texte.
$message2.= "Content-Type: text/plain; charset=\"utf-8\"".$passage_ligne;
$message2.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message2.= $passage_ligne.$message2_txt.$passage_ligne;
//==========
$message2.= $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format HTML
$message2.= "Content-Type: text/html; charset=\"utf-8\"".$passage_ligne;
$message2.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message2.= $passage_ligne.$message2_html.$passage_ligne;
//==========
$message2.= $passage_ligne."--".$boundary."--".$passage_ligne;
$message2.= $passage_ligne."--".$boundary."--".$passage_ligne;
//==========

//=====Envoi de l'e-mail.
mail($mail2,$sujet2,$message2,$header2);
//==========
