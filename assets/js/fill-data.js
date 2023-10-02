const inputName = document.querySelector('input[name="name"]');
const spanName = document.querySelector('span.card-name');
inputName.addEventListener('keyup', function () {
    spanName.innerHTML = inputName.value;
    if(inputName.value == '') {
        spanName.innerHTML = 'Jane Appleseed';
    }
});

const inputNumber = document.querySelector('input[name="number"]');
const spanNumber = document.querySelector('span.card-number');
inputNumber.addEventListener('keyup', function () {
    spanNumber.innerHTML = inputNumber.value;
    if(inputNumber.value == '') {
        spanNumber.innerHTML = '0000 0000 0000 0000';
    }
});

const inputMonth = document.querySelector('input[name="month"]');
const spanMonth = document.querySelector('span.card-date span.month');
inputMonth.addEventListener('keyup', function () {
    spanMonth.innerHTML = inputMonth.value;
    if(inputMonth.value == '') {
        spanMonth.innerHTML = '00';
    }
});

const inputYear = document.querySelector('input[name="year"]');
const spanYear = document.querySelector('span.card-date span.year');
inputYear.addEventListener('keyup', function () {
    spanYear.innerHTML = inputYear.value;
    if(inputYear.value == '') {
        spanYear.innerHTML = '00';
    }
});

const inputCvc = document.querySelector('input[name="cvc"]');
const spanCvc = document.querySelector('span.card-cvc');
inputCvc.addEventListener('keyup', function () {
    spanCvc.innerHTML = inputCvc.value;
    if(inputCvc.value == '') {
        spanCvc.innerHTML = '000';
    }
});