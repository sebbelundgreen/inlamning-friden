let _firstNameOnOrder = document.querySelector('#first-name');
let _lastNameOnOrder = document.querySelector('#last-name');
let _dateOnOrder = document.querySelector('#datefield');
let _guestsOnOrder = document.querySelector('#guests');
let _addBookingButton = document.querySelector('#submit-booking');
let _bookingList = document.querySelector('#booking-list');

let bookings = [];

_addBookingButton.onclick = function (evt) {
    evt.preventDefault();

    let booking = new Booktable(_firstNameOnOrder.value, _lastNameOnOrder.value, _dateOnOrder.value, _guestsOnOrder.value);

    bookings.push(booking);

    console.log(bookings);

    _bookingList.innerHTML += `${booking}`
}

_bookingList.onclick = function (evt) {
    let li = evt.target;
    li.remove();
}