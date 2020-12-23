<?php
/*$file = file_get_contents('http://ddred.ru/users.php');
$fileName = 'user.json';
$save = file_put_contents($fileName, $file);*/

$a = file_get_contents('user.json');
//echo "<pre>";print_r($a); echo "</pre>";
$fileArr = json_decode($a, true);
//echo "<pre>";print_r($fileArr); echo "</pre>";

$countSname = [];
foreach ($fileArr as $key => $value){
    foreach ($value as $k => $item) {
        if ($k == 'name'){
            $name = explode(' ', $item);
            $sname = $name[1];
            $countSname[$sname] += 1;
        }
    }
}
//echo "<pre>";print_r($countSname); echo "</pre>";

$sameSname = [];
foreach ($countSname as $kk => $it) {
    if ($it > 1) {
        $sameSname[] = $kk;

    }
}

echo "<pre>";print_r($sameSname); echo "</pre>";

