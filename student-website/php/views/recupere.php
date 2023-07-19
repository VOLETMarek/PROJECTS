<?php

include("../templates/contact_header.tpl.php");

// Here we make sur that a parameter was sent through the get method
if (!isset($_GET)) {
  echo '<main class="right">
  <h2 class="right__title">Erreur : Aucune données envoyés !</h2>
  </main>';
  // return 0 prevents the code below from executing
  return 0;
}

// here we make sur that the length of the name 
if (strlen($_GET["nom"]) < 3 || strlen($_GET["nom"]) > 15) {
    echo '<main class="right">
    <h2 class="right__title">Erreur : Le nom est soit trop court soit trop long !</h2>
    </main>';
    return 0;
}

$datas = $_GET;

?>

<!-- we display the success page if there was no error with the user datas  -->
<main class="right">
  <h2 class="right__title">Merci pour votre retour</h2>
  <div class="posts">
    <div class="post post--solo">
      <p>Bonjour <?= $datas["prenom"].' '.$datas["nom"] ?>, vous nous avez découvert grâce à <?= $datas["question"] ?>. <br>Sachez que nous sommes ravis de recevoir votre message suivant : <?= $datas["user_message"] ?>   <br>Votre message sera traitée bientôt.</p>
      <a href="./index.php" class="post__link">back to home</a>
    </div>
  </div>
</main>