//Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
//Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//Пустая корзина должна выводить строку «Корзина пуста»;
//Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

var basket = {
    products: [
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
    ],
    countBasketPrice: function () {
        var result = 0;
        for (i in this.products) {
            result += this.products[i].quantity * this.products[i].price;
        }
        return result;
    },
    countBasketTotal: function () {
        var result = 0;
        for (i in this.products) {
            result += this.products[i].quantity;
        }
        return result;
    }
}
var $basket = document.getElementById('basket');
if (basket.products.length > 0) {
    $basket.textContent = "В корзине: " + basket.countBasketTotal() + " товаров на сумму " + basket.countBasketPrice() + " рублей.";
} else {
    $basket.textContent = "Корзина пуста";
}



//console.log(basket)
//console.log(basket.countBasketPrice());

