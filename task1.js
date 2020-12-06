'use strict'

//let tc = prompt('Введите температуру в градусах по Цельсию: ');
//let tf = (9 / 5) * tc + 32;
//alert(tf);

let Tc = prompt('Введите температуру в градусах по Цельсию: ');
while (Tc.length === 0) {
    Tc = prompt('Введите температуру в градусах по Цельсию: ');
}
Tc = Number(Tc);
console.log(Tc);
let Tf = (9 / 5) * Tc + 32;
alert(`Температура в градусах по Фаренгейту: ${Tf}`);