<main class="right">
  <article class="post--solo">
    <h2 class="right__title"><?= $article["titre"] ?></h2>
    <a href="" class="post__category post__category--color-<?= $article["categorie"] ?>"><?= $article["categorie"] ?></a>
    <div class="post__meta">
      <img class="post__author-icon" src="<?= $article["image"] ?>" alt="">
      <strong class="post__author"><?= $article["auteur"] ?></strong>
      <!-- We use two functions to display datetime: strtotime and date.
      -> strtotime is a function which retrieves the number of seconds elapsed between January 1, 1970 and the date given as a parameter.
      -> date is a function that takes 2 parameters, the first is the date format we want, and the 2nd is the timestamp of the date we want  
      -->
      <time datetime="<?= $article["date"] ?>">le <?= date('d F Y', strtotime($article["date"])) ?></time>
    </div>  
    <p><?= $article["texte"] ?></p>
    <a href="./index.php" class="post__link">Back to home</a>
  </article>
</main>