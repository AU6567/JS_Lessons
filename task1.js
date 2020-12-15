// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let x = 0;
while (x <= 100) {                            // если 100 не включать, то x < 100
    let prime_numbers = true;
    for (let j = x - 1; j > 1; j--) {
        if (x % j == 0) {
            prime_numbers = false;
            break;
        }
    }
    if (prime_numbers) {
        console.log(x);
    }
    x++;
}
