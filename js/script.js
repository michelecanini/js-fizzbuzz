"use strict";

/*PROBLEMA: Scrivi un programma che stampi in console i 
numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”
al posto del numero e per i multipli di 5 stampi “Buzz”. Per
i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz."*/

for (let i = 1; i <= 100; i++) {

    let number = "";
    
    if (i % 3 == 0) number = ('Fizz');

    if (i % 5 == 0) number = ('Buzz');

    if (i % 3 == 0 && i % 5 == 0)  number = ('FizzBuzz');
    console.log(number || `${i}`);
}