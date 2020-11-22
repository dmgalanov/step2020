let calc = document.querySelector('.calculator');
let form = calc.querySelector('.form');
let inp = document.querySelector('.ggg');

function insert(num) {
    inp.value = inp.value + num;
}
function res() {
    inp.value = eval(inp.value);
}

function del() {
    inp.value = '';
}


