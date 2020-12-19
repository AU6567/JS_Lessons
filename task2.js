// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

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
    countBasketPrice() {
        let result = 0;
        for (i in this.products) {
            result += this.products[i].quantity * this.products[i].price;
        }
        return result;
    }

}

console.log(basket)
console.log(basket.countBasketPrice());

