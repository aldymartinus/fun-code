const $ = id => document.getElementById(id);
const $$ = classQuery => document.getElementsByClassName(classQuery);
let keysArr = [];
let tempKeys = [];
let indexIsAvailable = null;

window.addEventListener('load', ()=>{
    clearAndFocus("prime-number");
    clearAndFocus("array-length");
    clearAndFocus("key-input");
});

$("btn-input").addEventListener('click', (e) =>{
    e.preventDefault();

    if(isArrayFull(keysArr) === parseInt($("array-length").value)){
        confirm("Array sudah penuh! apakah mau direload?") ? location.reload() : null;
    } else if(keysArr.indexOf(parseInt($("key-input").value)) > -1) {
        fireAlert("Key sudah ada!", "key-input");
    } else if($("key-input").value.length >= 3 && $("array-length").value.length !== 0 && $("prime-number").value.length !== 0 && isPrimeValid(parseInt($("prime-number").value))) {
        proceedKey(); 
        $("array-length").value.length === 0 ? $("array-length").disabled = false : $("array-length").disabled = true;
        $("prime-number").value.length === 0 ? $("prime-number").disabled = false : $("prime-number").disabled = true;
    } else {
        alertCondition();
    }
});

const isPrimeValid = (number) => {
    for(var i = 2; i < number; i++)
    if(number % i === 0) return false;
    return number < parseInt($("array-length").value);
};

const alertCondition = () => {
    if($("key-input").value.length === 0){
        fireAlert("Key input belum diisi!", "key-input");
    } else if($("key-input").value.length < 3){
        fireAlert("Key kurang dari 3 digit", "key-input");
    } else if($("array-length").value.length === 0){
        fireAlert("Table size belum diisi!", "array-length");
    } else if($("prime-number").value.length === 0){
        fireAlert("Prime number belum diisi!", "prime-number");
    } else if(!isPrimeValid($("prime-number"))){
        fireAlert(`${$("prime-number").value} bukan prime number yang valid!`, "prime-number");
    }
};

const fireAlert = (msg, field) => {
    alert(msg);
    clearAndFocus(field);
};

const proceedKey = () => {
    let squared = (Math.pow(parseInt($("key-input").value),2))
    let median =  squared.toString().substring(getMedian(squared.toString().length),getMedian(squared.toString().length)+3);
    let relativeAddress = parseInt(median)%parseInt($("array-length").value);

    indexIsAvailable = keysArr[relativeAddress] == null ? true : false;

    renderSteps($("key-input").value, squared, median, relativeAddress);

    indexIsAvailable ? writeToArray(parseInt($("key-input").value), relativeAddress) : doubleHash(parseInt($("key-input").value), squared, median, relativeAddress);

    createTable(keysArr);
    clearAndFocus("key-input");
};

const renderSteps = (key, squared, median, relativeAddress) => {
    append('p', key, "key-container");
    append('p', squared, "squared-container");
    append('p', median, "median-container");
    append('p', relativeAddress, "address-container");
};

const doubleHash = (key, squared, median, relativeAddress) => {
    let newIndex = null;
    let count = 1;
    let hash1 = key%parseInt($("array-length").value);
    let hash2 = parseInt($("prime-number").value)-(key%parseInt($("prime-number").value));

    while(!indexIsAvailable){
        newIndex = (hash1+count*hash2)%parseInt($("array-length").value);
        keysArr[newIndex] == null ? indexIsAvailable = true : count++;     
    };

    alert(`Terdapat kolisi antara key ${$("key-input").value} dan key ${keysArr[relativeAddress]} 
Double Hashing dilakukan ${count} kali 
Kini Key ${$("key-input").value} mendapat alamat baru pada index ${newIndex}`)

    writeToArray(key, newIndex);
    renderSteps(key, squared, median, newIndex);
};

const append = (elem, text, container) => {
    const el = document.createElement(elem);
    elem === 'p' ? indexIsAvailable ? null : el.classList = "errAddr" : null;
    el.textContent = text;
    $(container).appendChild(el);
};

const writeToArray = (key, addr) => {
    keysArr[addr] = key;
};

const createTable = (arr) => {
    $("value").innerHTML = '';
    $("addr").innerHTML = '';
    arr.forEach(element => {
        append('td', arr.indexOf(element), "addr");
        append('td', element, "value")
    });
}

const isArrayFull = (arr) => {
    let count = null;
    
    arr.forEach(element => {
        element !== null ? count++ : null; 
    });
    return count;
}

const clearAndFocus = (field) =>  {
    $(field).value = "";
    $(field).focus();
};

const getMedian  = (length) => {
    if(length%2 === 0){
        return (((length/2)+((length/2)+1))/2)-2;
    } else {
        return ((length+1)/2)-2
    }
};