var inputNumber = prompt('Введіть число');
var total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

alert(inputNumber + '! = ' + total);