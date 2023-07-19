<?php
$nav = [
  "Plan du site" => "../views/plan_de_site.php",
  "Contact" => "../views/contact.php",
  "Mentions légales" => "../views/mentions_legales.php"
];
?>
<head>
  <meta charset="UTF-8">
  <title>oNews</title>
  <link rel="stylesheet" href="../../css/reset.css">
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <div class="wrapper">
    <header class="left">
      <h1 class="left__title">Students News</h1>
      <div class="left__paragraph">
        <h2 class="left__subtitle"><strong class="left__subtitle-strong">Latest news</strong> from our students</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque suscipit nibh quis porttitor. Integer iaculis mi urna, a pulvinar quam adipiscing ut. Vivamus vel vestibulum mauris.
        </p>
      </div>
      <nav>
        <ul class="left__nav">
          <!-- we don't want to repeat the code, so here we use foreach to display all header links -->
          <?php foreach($nav as $key => $val) { ?>
            <li class="left__nav-item"><a href="<?= $val ?>" class="left__nav-link"><?= $key ?></a></li>
          <?php } ?>
        </ul>
      </nav>
    </header>
  </div>
</body>