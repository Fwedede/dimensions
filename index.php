<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Dimensions - Local - Donnez une autre dimension à votre image</title>
   <link rel="canonical" href="http://localhost/dimensions_demo" />
   <link rel="icon" type="image/png" href="assets/img/logos/favicon.png">
   <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Exo">
   <link rel="stylesheet" type="text/css" href="assets/stylesheet/styles.css">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
   <div id="fb-root"></div>

   <header>
      <nav>
         <ul class="container list-unstyled list-inline text-right font-xl">
            <li class="pull-left"><a href="#home"><img src="assets/img/logos/logo-dimensions-menu.png" alt="logo-dimensions-petit"></a></li>
            <li class="menu_query">
               <img src="assets/img/utilities/Base_03.png">
               <ul>
                  <li><a class="link" href="#agence">Agence</a></li>
                  <li><a class="link" href="#realisations">Réalisations</a></li>
                  <li><a class="link" href="#services">Services</a></li>
                  <li class="last"><a class="link" href="#contact">Contact</a></li>
               </ul>
            </li>
         </ul>
      </nav>
      <section class="container main-body-wrap" id="home">
         <h1 class="title"><img src="assets/img/logos/logo-dimensions.png" alt="Dimensions_logo"></h1>
         <p>Donnez une autre dimension à votre image</p>
      </section>
      <a href="#agence" class="animated infinite bounce scroll-down icon-arrow-down2"></a>
   </header>

   <main>
      <section class="main-body-wrap" id="agence">
         <div class="container">
            <h2>Agence</h2>
            <article>
               <p>Aujourd'hui plus que jamais, l'image est quelque chose de très importante. Le visuel est la première chose que l'on remarque  et qui nous donne notre première impression.<br>Le projet de l'agence se base sur cette constatation.</p>
               <p>Dimensions est une agence de communication visuelle, digitale et décorative. Elle accompagne principalement les nouvelles entreprises (les TPE et les PME plus particulièrement) qui désirent définir l'image de leur entreprise, de leur produit ou de leur événement.</p>
               <p>L'agence désire aller beaucoup plus loin qu'une communication visuelle, en allant jusqu'à la décoration, ce qui permettra une cohérence globale et unique de son image.</p>
            </article>
         </div>
      </div>
   </section>

   <section class="main-body-wrap" id="realisations">
      <div class="container">
         <h2>Réalisations</h2>
         <?php
         try{
            $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
            $bdd = new PDO('mysql:host=localhost;dbname=dimensions', 'root', '', $pdo_options);
         }
         catch(Exception $e)
         {die('Erreur : '.$e->getMessage());}

         $bdd->exec("SET CHARACTER SET utf8");
         $req = $bdd->query("SELECT * FROM realisations WHERE id=1 ORDER BY id");
         ?>
         <div class="tab">
            <?php
            if($req->rowCount() > 0) {
               while($res = $req->fetch()) {
                  require('assets/view/realisations.html');
               }
            }
            ?>
         </div>
         <?php
         $req->closeCursor();
         ?>
      </div>
      <div class="bg"></div>
      <div class="popin-bg"></div>
   </section>

   <section class="main-body-wrap" id="services">
      <div class="container">
         <h2>Services</h2>
         <div class="cards">
            <div class="card">
               <div class="card-image">
                  <img src="assets/img/packs/vignettes-pack1.png">
               </div>
               <div class="card-header"></div>
               <div class="card-copy"></div>
            </div>
            <div class="card">
               <div class="card-image">
                  <img src="assets/img/packs/vignettes-pack2.png">
               </div>
               <div class="card-header"></div>
               <div class="card-copy"></div>
            </div>
            <div class="card">
               <div class="card-image">
                  <img src="assets/img/packs/vignettes-pack3.png">
               </div>
               <div class="card-header"></div>
               <div class="card-copy"></div>
            </div>
         </div>
      </div>
   </section>

   <section class="main-body-wrap" id="contact">
      <div class="container">
         <h2>Contactez-moi</h2>
         <p class="text-center">Besoin de me contacter sur mes services, mon agence ou tout autre chose, c'est ici</p>
         <form class="col-md-7" action="index.html" method="post">
            <input type="text" placeholder="NOM Prénom" id="name" name="name" value="">
            <input type="text" placeholder="E-mail" id="email" name="email" value="">
            <input type="text" placeholder="Objet" id="object" name="object" value="">
            <textarea id="message" placeholder="Message" name="message" rows="6"></textarea>
            <button class="pull-right" type="submit">Valider</button>
         </form>
         <div class="col-md-5 text-right">
            <div class="address">
               Agence Dimensions<br>
               <a href="tel:0642351092">06.42.35.10.92</a><br>
               <br>
               <a href="clementfj@gmail.com">clementfj@gmail.com</a>
            </div>
            <div class="social row">
               <a class="col-md-2 col-md-offset-4" href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140"><img src="assets/img/socials/logo-facebook.png" alt="logo-facebook"></a>
               <a class="col-md-2 col-md-offset-1" href="https://www.linkedin.com/pub/frederique-clement/95/a06/434"><img src="assets/img/socials/logo-linkedin.png" alt="logo-linkedin"></a>
               <a class="col-md-2 col-md-offset-1" href="https://fr.pinterest.com/Fwedede/"><img src="assets/img/socials/logo-pinterest.png" alt="logo-pinterest"></a>
            </div>
         </div>
      </div>
   </section>
</main>

<footer class="text-center font-xs">
   <section>
      <p>Agence Dimensions - Créatrice d'une dimension visuelle, agencée ou événementielle pour votre image.</p>
      <div class="fb-like inline-flex" data-href="https://www.facebook.com/pages/Agence-Dimensions/965360680158140" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
      <!--div class="g-plusone inline-flex" data-size="medium" data-annotation="inline" data-width="300"></div-->
      <p>© Copyright 2015</p>
   </section>
</footer>
   <!--script src="assets/script/jquery.min.js"></script-->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js" type="text/javascript"></script>
   <!--script src="assets/script/realisations.js"></script>
   <script src ="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
   <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.4/jquery.easypiechart.min.js"></script-->
   <script src="assets/script/header.js"></script>
   <script src="assets/script/popin.js"></script>
   <script>
      (function(d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.3&appId=130169510352357";
         fjs.parentNode.insertBefore(js, fjs);
      }
      (document, 'script', 'facebook-jssdk'));
   </script>
   <!--script type="text/javascript">
   (function() {
   var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
   po.src = 'https://apis.google.com/js/plusone.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
   })();
   </script-->
</body>
</html>