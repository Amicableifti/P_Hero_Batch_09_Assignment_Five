// All FUNCTION

// Get Element BY ID
function getById(id) {
    const result = document.getElementById(id).innerText;
    return result;
}

// Get Element BY ID
function getByIdValue(id) {
    const result = document.getElementById(id).value;
    return result;
}
// Get Element

function getElById(id) {
    const result = document.getElementById(id);
    return result;
}
// Get Element BY Class
function getByClassName(id) {
    const result = document.getElementsByClassName(id);
    return result;
}

// Set Innter Text
function setInnerText(id, value) {
    document.getElementById(id).innerHTML = value;
}

// Discount Function
function discount(c) {

    let grandTotalFinal = 0;
    var inputField = document.getElementById("discount-value");
    var code = inputField.value;

    let coupon = code;
    if (coupon == "") {

        setInnerText("grand-total", grandTotal);
        return grandTotalFinal;
    }
    else if (coupon == "NEW15") {

        let Temp = grandTotal * .15;
        grandTotalFinal = grandTotal - Temp
        hideElemet("btn-sub");
        setInnerText("grand-total", grandTotalFinal);
        return grandTotalFinal;
    }

    else if (coupon == "Couple 20") {

        let Temp = grandTotal * .2;
        grandTotalFinal = grandTotal - Temp
        hideElemet("btn-sub");
        setInnerText("grand-total", grandTotalFinal);
        return grandTotalFinal;
    }
    else {

        // const pp1 = document.createElement("span");
        // pp1.innerText = "Invalid Coupon";
        // const pp1list = getElById("btn-sub");
        // pp1list.appendChild(pp1);

        setInnerText("grand-total", grandTotal);
        return grandTotal;
    }

    setInnerText("discount-value", "");
    setInnerText("grand-total", grandTotalFinal);
}

function addBackgrounfColorByID(id){
  const element = document.getElementById(id);
  element.classList.add("!bg-green-500");
}

function hideElemet(element){
    const subBtnhtml = document.getElementById(element);
        subBtnhtml.classList.add('hidden')
}

function removeElemet(element){
    const subBtnhtml = document.getElementById(element);
        subBtnhtml.classList.remove('hidden')
}

