// С этого урока начинаем работать с функционалом интернет-магазина.
//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
//в зависимости от находящихся в ней товаров. 
//Товары в корзине хранятся в массиве. Задачи:
// - Организовать такой массив для хранения товаров в корзине;
// - Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket = [
    {
        product: 'ball',
        quantity: 2,
        price: 1500
    },
    {
        product: 'shirt',
        quantity: 11,
        price: 800
    },
]

function countBasketPrice(basket) {
    let result = 0;
    for (i in basket) {
        result += basket[i].quantity * basket[i].price;
    }
    return result;
}

console.log(countBasketPrice(basket));

