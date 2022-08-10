// defining variables for the displayed card

let cardNumber = document.getElementById('displayCardNum');
let cardName = document.getElementById('displayName');
let cardDate = document.getElementById('displayDate');
let cardCVC = document.getElementById('displayCVC');

let notNumbers = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM";

let cardArray = [];
let cardArray1 = [];
let cardArray2 = [];
let cardArray3 = [];
let cardArray4 = [];

let formattedNumber = 0;

// defining variables for the input

let inputNumber = document.getElementById('number');
let inputName = document.getElementById('name');
let inputDate = document.getElementById('date');
let inputCVC = document.getElementById('CVC');
let btnCheck = document.getElementById('btnCheck');

//checkInputs

let numberTrue = false;
let nameTrue = false;
let dateTrue = false;
let CVCTrue =false;

// event listeners

inputNumber.addEventListener('change', ()=>{
    if (inputNumber.value.length != 16 ){
        alert("Card numbers must have sixteen digits.");
        numberTrue = false;
    } else{
        cardArray1 = [];
        cardArray2 = [];
        cardArray3 = [];
        cardArray4 = [];
        cardArray = [];

        cardArray1.push(inputNumber.value[0]);
        cardArray1.push(inputNumber.value[1]);
        cardArray1.push(inputNumber.value[2]);
        cardArray1.push(inputNumber.value[3]);
        
        cardArray2.push(inputNumber.value[4]);
        cardArray2.push(inputNumber.value[5]);
        cardArray2.push(inputNumber.value[6]);
        cardArray2.push(inputNumber.value[7]);

        cardArray3.push(inputNumber.value[8]);
        cardArray3.push(inputNumber.value[9]);
        cardArray3.push(inputNumber.value[10]);
        cardArray3.push(inputNumber.value[11]);

        cardArray4.push(inputNumber.value[12]);
        cardArray4.push(inputNumber.value[13]);
        cardArray4.push(inputNumber.value[14]);
        cardArray4.push(inputNumber.value[15]);




        cardArray.push(cardArray1.join(''));
        cardArray.push("&nbsp;");
        console.log(cardArray);
        cardArray.push(cardArray2.join(''));
        cardArray.push("&nbsp;");
        cardArray.push(cardArray3.join(''));
        cardArray.push("&nbsp;")
        cardArray.push(cardArray4.join(''));

        formattedNumber = cardArray.join("");
       console.log("Number:" + formattedNumber);
        cardNumber.innerHTML = formattedNumber;
        numberTrue= true;
    }
});

inputName.addEventListener('change' , ()=>{
    if (inputName.value === ""){
        alert("You must have a name.")
        nameTrue = false;
    }
    else{
        cardName.innerHTML = inputName.value.toUpperCase();
        nameTrue = true;
    }

})

inputDate.addEventListener('change' , ()=>{
    if (inputDate.value[0] != 0 ){
        console.log(inputDate.value[0]);
        if (inputDate.value[0] != 1){
            alert("That is an invalid date.")
            dateTrue = false;
        } else {
            if (inputDate.value.length != 5){
                alert("That is an invalid date.");
                dateTrue = false;
            } else if (inputDate.value[2] != "/"){
                console.log("nooo")
                alert("That is an invalid date.");
                dateTrue = false;
            }else {
                cardDate.innerHTML = inputDate.value;
                dateTrue = true;
            }
        } 
    } else if (inputDate.value.length != 5){
        alert("That is an invalid date.");
        dateTrue = false;
    } else if (inputDate.value[2] != "/"){
        console.log("nooo")
        alert("That is an invalid date.");
        dateTrue = false;
    }else {
        dateTrue = true;
        cardDate.innerHTML = inputDate.value;
    }
})

inputCVC.addEventListener('change' , ()=>{
    if (inputCVC.value.length != 3){
        alert("CVC number must have three digits.");
        CVCTrue = false;
    } else if (isNaN(inputCVC.value)){
        alert("CVC number cannot contain letters or other non-numerical symbols.");
        CVCTrue = false;
    }else{
        CVCTrue = true;
        cardCVC.innerHTML = inputCVC.value;
    }
})

btnCheck.addEventListener('click', (event) =>{
    event.preventDefault();
    if (nameTrue === true){
        if (numberTrue === true){
            if (dateTrue === true){
                if (CVCTrue === true){
                    alert("Success! We've added your card details.");
                }else {
                    alert("Missing CVC.");
                }
            }else{
                alert("Missing expiration date.");
            }
        }else{
            alert("Missing card number.")
        }
    }else{
        alert("Missing cardholder's name.")
    }
})