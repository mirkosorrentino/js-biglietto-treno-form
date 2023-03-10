// input
// chiedere il numero di km da percorrere e trasformarla in numero
// chiedere l'eta del passeggero e trasformarla in numero

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {

    // Prendere il valore dell'input
    const kmToDoInput = document.getElementById("km-to-do");
    const kmToDo = parseFloat(kmToDoInput.value);

    const userAgeInput = document.getElementById("user-age");
    const userAge = parseFloat(userAgeInput.value);

    console.log(kmToDo, typeof(kmToDo), userAge, typeof(userAge))

    // control
    if (isNaN(kmToDo)) {
        console.log ("ricarica la pagina e inserisci solamente dei numeri")
    }
    // elaboration
    // calcolare il prezzo pieno del biglietto
    // SE minore di 18 sconto del 20%, ALTRIMENTI SE maggiore di 65 sconto del 40%, ALTRIMENTI nessuno sconto
    
    const juniorDiscount = 0.2
    const seniorDiscount = 0.4
    
    const ticketFullPrice = 0.21 * kmToDo;
    console.log(`il prezzo del biglietto intero è ${ticketFullPrice}€`);
    
    let ticketFinalPrice = ""
    if (userAge < 18) {
        ticketFinalPrice = (ticketFullPrice * (1 - juniorDiscount));
    } else if (userAge > 65) {
        ticketFinalPrice = (ticketFullPrice * (1 - seniorDiscount))
    } else {
        ticketFinalPrice = ticketFullPrice
    }
    
    console.log (ticketFinalPrice);
    
    // output
    // prezzo con massimo due cifre decimali

    if ((isNaN(kmToDo))||(isNaN(userAge))) {
        document.getElementById("ticket-final-price").innerHTML = (`ricarica la pagina e inserisci solamente dei numeri`);
    } else if (ticketFinalPrice % 2 === 0) {
        document.getElementById("ticket-final-price").innerHTML = (`Il prezzo del tuo biglietto ferroviario è ${ticketFinalPrice}€`);
    } else {
        let ticketRoundedPrice = ticketFinalPrice.toFixed(2)
        document.getElementById("ticket-final-price").innerHTML= ticketRoundedPrice;
    }

    if (userAge < 18 && (!((isNaN(kmToDo))||(isNaN(userAge))))) {
        document.getElementById("discount").innerHTML = (`Il prezzo iniziale era di ${ticketFullPrice}€ ma hai ottenuto lo sconto under 18 del 20%`);
    } else if (userAge > 65 && (!((isNaN(kmToDo))||(isNaN(userAge))))) {
        document.getElementById("discount").innerHTML = (`Il prezzo iniziale era di ${ticketFullPrice}€ ma hai ottenuto lo sconto over 65 del 40%`);
    }

    // Clean
    kmToDoInput.value = "";
    userAgeInput.value = "";
});


// output
// prezzo con massimo due cifre decimali