//Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var product = [20, 40, 90];
var service = [12, 22, 33];
var abonPay = [225, 340, 550];
function countBasketPrice(product, service, abonPay) {

    return product + service + abonPay;

}
console.log(countBasketPrice(...product))
console.log(countBasketPrice(...service))
console.log(countBasketPrice(...abonPay))
