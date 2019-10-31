let _pizzaOrder = document.querySelector('#pizza');
let _tableOrder = document.querySelector('#table');
let _isGluten = document.querySelector('#glutenfree');
let _addOrderButton = document.querySelector('#submit-button');
let _clearOrderButton = document.querySelector('#clear-button');
let _orderList = document.querySelector('#order-list');
let _allergier = document.querySelector('#allergier');
let _beforeOrder = document.querySelector('#before');
let _drinkOrder = document.querySelector('#drink');

let orders = [];

_addOrderButton.onclick = function (evt) {
    evt.preventDefault();

    let order = new Order(_pizzaOrder.value, _tableOrder.value, _isGluten.checked, _allergier.value, _beforeOrder.value, _drinkOrder.value);

    orders.push(order);

    console.log(orders);

    _orderList.innerHTML += `${order}`
}

_orderList.onclick = function (evt) {
    let li = evt.target;
    li.remove();
}