// Ülesanne: Rudimentary Calculator

let x = prompt('X=...');
let y = prompt('Y=...');

x = Number(x);
y = Number(y);

let kalkulaator = prompt('Sisesta tehe: a-liida, s-lahuta, m-korruta, d-jaga, e-astenda, r-jääk');
let a = x+y;
let s = x-y;
let m = x*y;
let d = x/y;
let e = x**y;
let r = x%y;

switch(kalkulaator) {
    case 'a':
        console.log('Vastus =' + a)
        break;
    case 's':
        console.log('Vastus =' + s)
        break;
    case 'm':
        console.log('Vastus =' + d)
        break;
    case 'e':
        console.log('Vastus =' + e)
        break;
    case 'r':
        console.log('Vastus =' + r)
        break;
}








