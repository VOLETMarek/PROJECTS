<?php
include("../templates/header.tpl.php");

// here i create this variable to memorize my article number.
// the article number will be displayed after the '=' in the URL, like this -> .../article.php?numero=2
$numero = $_GET['numero'];

// here i include my array named "les_articles", each index of this array as the URL number we want. This way we can get the content
include('../datas/articles.php');

// $article will get the corresponding article depending on the URL number
$article = $les_articles[$numero];

// here i inclde my article.tpl, and this template will use $article to get the desired content
include("../templates/article.tpl.php");
?>
