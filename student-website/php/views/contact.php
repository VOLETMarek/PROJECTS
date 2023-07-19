<?php
include("../templates/contact_header.tpl.php");
?>

<main class="right">
  <h2 class="right__title">Nous contacter</h2>
  <div class="posts">
    <div class="post post--solo">
      <!-- 
      action -> the php that contains datas from the submitted form
      method = get because we want to send datas trhough the URL
      -->
    <form action="./recupere.php" method="get">
    <div>
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" placeholder="Votre nom ..." required>
    </div>
    <div>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" placeholder="Votre prénom ..." required>
    </div>
    <div>
      <label for="question">Comment vous nous avez découvert ?</label>
      <select name="question" id="question">
      <option value="">Choisir</option>
      <option value="facebook">Facebook</option>
      <option value="instagram">Instagram</option>
      <option value="twitter">Twitter</option>
      </select>
    </div>
    <div>
      <label for="msg">Message :</label>
      <textarea id="msg" name="user_message" placeholder="Votre message ..." minlength="4" maxlength="2000" required></textarea>
    </div>
    <button>Envoyer</button>
    </form>
      <a href="./index.php" class="post__link">back to home</a>
    </div>
  </div>
</main>