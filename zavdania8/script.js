let a = +prompt('Введіть число'); 
let b = +prompt('Введіть степінь'); 
let result = 1;


if (b < 0) {
    for (let i = b; i < 0; i++) {
      result /= a;
    }
} else {
    for (let i = 1; i <= b; i++) {
      result *= a;
    }
}
document.write(`<h2>${result}<h2>`);
        