// All FUNCTION

// Get Element BY ID
function getById(id) {
    const result = document.getElementById(id).innerText;
    return result ;
}
// Get Element

function getElById(id) {
    const result = document.getElementById(id);
    return result ;
}
// Get Element BY Class
function getByClassName(id) {
    const result = document.getElementsByClassName(id);
    return result;
}

// Set Innter Text
function setInnerText (id,value) {
    document.getElementById(id).innerHTML = value;
}