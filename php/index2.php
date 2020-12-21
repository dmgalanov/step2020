<?php

for($i=0; $i<10; $i++) {
    $arr[] = rand(10,100);
}
$rev = array_reverse($arr);
?>

<p>
<?php foreach ($arr as $key => $value):?>
<span><?=$value?></span>
<?php endforeach;?>
</p>

<p>
<?php foreach ($rev as $key => $value):?>
<span><?=$value?></span>
<?php endforeach;?>
</p>

<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/img';

$bannerPath = [];
$x = scandir($path);

foreach ($x as $item) {
    if ($item !== '.' && $item !== '..') {
        $bannerPath[] = $item;
    }
}

$randomIndex = rand(0, count($bannerPath) - 1);
$currentBanner = $bannerPath[$randomIndex];
?>

<img src="img/<?=$currentBanner?>">

//задача 3 ---------------------
<?php

for($a=0; $a<5; $a++) {
    $arrr[] = rand(10,100);
}

for($j=0; $j<5; $j++) {
    $array[] = $arrr;
}

echo "<pre>";print_r($array); echo "</pre>";

?>

