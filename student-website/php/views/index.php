<?php
include("../templates/header.tpl.php");
include("../datas/articles.php");
?>

<main class="right">
  <h2 class="right__title">Latest News</h2>
  <div class="posts">
    <!-- we use foreach loop on $les_articles array to get all the datas from all articles -->
    <?php foreach($les_articles as $key => $value) : ?>
    <article class="post">
      <a href="" class="post__category post__category--color-<?= $value["categorie"] ?>"><?= $value["categorie"] ?></a>
      <h3><?= $value["titre"] ?></h3>
      <div class="post__meta">
        <img class="post__author-icon" src="<?= $value["image"] ?>" alt="">
        <strong class="post__author"><?= $value["auteur"] ?></strong>
        <time datetime="<?= $value["date"] ?>">le <?= date('d F Y', strtotime($value["date"])) ?></time>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pacers, perferendis, saepe.</p>
      <a href="./article.php?numero=<?= $key ?>" class="post__link">Continue reading</a>
    </article>
    <?php endforeach; ?>
  </div>
</main>