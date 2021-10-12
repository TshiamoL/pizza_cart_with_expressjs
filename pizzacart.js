
const smallPBtn = document.querySelector(".pBtn.small");
const medPBtn = document.querySelector(".pBtn.med");
const largePBtn = document.querySelector(".pBtn.large");

const smallPBtnBuy = document.querySelector(".pBtn.small.buy");
const medPBtnBuy = document.querySelector(".pBtn.med.buy");
const largePBtnBuy = document.querySelector(".pBtn.large.buy");

const smallMBtn = document.querySelector(".mBtn.small");
const medMBtn = document.querySelector(".mBtn.med");
const largeMBtn = document.querySelector(".mBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const medPizzaQty = document.querySelector(".medPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const medPizzaTotal = document.querySelector(".medPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

const containerBox = document.querySelector(".containerBox");
const closeBtn = document.querySelector(".close");

var width = screen.availWidth;
var height = screen.availHeight;

containerBox.style.width = width + 'px';
containerBox.style.height = height + 'px';
containerBox.style.paddingTop = height*1/3 + 'px';

var smallQty = 0;
var medQty = 0;
var largeQty = 0;
var totalCart = 0;

function BtnClick(event) {
    if (event.target.className == "pBtn small" || event.target.className == "pBtn small buy") {
        smallQty++;
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className == "pBtn med" || event.target.className == "pBtn med buy") {
        medQty++;
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className == "pBtn large" || event.target.className == "pBtn large buy") {
        largeQty++;
        largePizzaQty.innerHTML = largeQty;
    }

    if (event.target.className === "mBtn small") {
        smallQty--;
        if (smallQty < 0) {
            smallQty = 0;
        }
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className === "mBtn med") {
        medQty--;
        if (medQty < 0) {
            medQty = 0;
        }
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className === "mBtn large") {
        largeQty--;
        if (largeQty < 0) {
            largeQty = 0;
        }
        largePizzaQty.innerHTML = largeQty;
    }

    smallPizzaTotal.innerHTML = (smallQty * 39).toFixed(2);
    medPizzaTotal.innerHTML = (medQty * 89).toFixed(2);
    largePizzaTotal.innerHTML = (largeQty * 129).toFixed(2);
    totalCart = smallQty * 39.00 + medQty * 89.00 + largeQty * 129.00;
    cartTotal.innerHTML = totalCart.toFixed(2);

    if (totalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    }
}

function checkOutClick() {
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment() {
    containerBox.classList.remove('hidden');
    var paymentAmt = Number(payAmt.value);
    if (paymentAmt == totalCart) {
        containerBox.style.backgroundColor = 'green';
        message.innerHTML = "Enjoy your Pizzas";
        smallQty = 0;
        medQty = 0;
        largeQty = 0;
        totalCart = 0;

        smallPizzaQty.innerHTML = smallQty;
        medPizzaQty.innerHTML = medQty;
        largePizzaQty.innerHTML = largeQty;

        smallPizzaTotal.innerHTML = (smallQty * 39).toFixed(2);
        medPizzaTotal.innerHTML = (medQty * 89).toFixed(2);
        largePizzaTotal.innerHTML = (largeQty * 129).toFixed(2);
        totalCart = smallQty * 39.00 + medQty * 89.00 + largeQty * 129.00;
        cartTotal.innerHTML = totalCart.toFixed(2);

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else if (paymentAmt > totalCart) {
        var change = paymentAmt - totalCart;
        containerBox.style.backgroundColor = 'rgba(120, 255, 120, 0.95)';
        message.innerHTML = "Payment approved and here is your change R" + change.toFixed(2);
        smallQty = 0;
        medQty = 0;
        largeQty = 0;
        totalCart = 0;

        smallPizzaQty.innerHTML = smallQty;
        medPizzaQty.innerHTML = medQty;
        largePizzaQty.innerHTML = largeQty;

        smallPizzaTotal.innerHTML = (smallQty * 39).toFixed(2);
        medPizzaTotal.innerHTML = (medQty * 89).toFixed(2);
        largePizzaTotal.innerHTML = (largeQty * 129).toFixed(2);
        totalCart = smallQty * 39.00 + medQty * 89.00 + largeQty * 129.00;
        cartTotal.innerHTML = totalCart.toFixed(2);

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else {
        containerBox.style.backgroundColor = 'red';
        message.innerHTML = "Insufficient funds";
        setTimeout(function () {
            containerBox.classList.add('hidden');
        }, 4500);
    }
}

function close() {
    containerBox.classList.add('hidden');
}


smallPBtn.addEventListener('click', BtnClick);
smallMBtn.addEventListener('click', BtnClick);
smallPBtnBuy.addEventListener('click', BtnClick);

medPBtn.addEventListener('click', BtnClick);
medMBtn.addEventListener('click', BtnClick);
medPBtnBuy.addEventListener('click', BtnClick);

largePBtn.addEventListener('click', BtnClick);
largeMBtn.addEventListener('click', BtnClick);
largePBtnBuy.addEventListener('click', BtnClick);

checkOut.addEventListener('click', checkOutClick);

payBtn.addEventListener('click', payment);

closeBtn.addEventListener('click',close);