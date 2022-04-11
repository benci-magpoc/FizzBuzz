function getValues() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

        //assign fizzBuzzAlgorithm return value to fizzBuzzValues
        let fizzBuzzValues = fizzBuzzAlgorithm(firstNumber, secondNumber, startValue, endValue);
        //display the values
        displayValues(fizzBuzzValues);

    } else {
        alert("You muuse enter Integers!");
    }
}


function clearList() {
    document.getElementById("results").innerHTML = "";

}

//business logic layer - Model
function fizzBuzzAlgorithm(fizz, buzz, start, end) {

    let fbValues = [];
    let fizzBuzzCount = {
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    };

    for (let i = start; i <= end; i++) {

        if (i % fizz == 0 && i % buzz == 0) {

            fbValues.push('FizzBuzz');
            fizzBuzzCount.fizzBuzz++;

        } else if (i % fizz == 0) {

            fbValues.push('Fizz');
            fizzBuzzCount.fizz++;

        } else if (i % buzz == 0) {

            fbValues.push('Buzz');
            fizzBuzzCount.buzz++;
        } else {

            fbValues.push(i);
        }
    }
    console.log(fizzBuzzCount);
    displayFizzBuzzCount(fizzBuzzCount);
    return fbValues;
}

function displayValues(fizzBuzzDisplayed) {

    element = document.getElementById("results");

    fizzBuzzDisplayed.forEach(e => {
        let item = document.createElement("div");
        item.classList.add("col-lg-2");
        item.classList.add("col-md-6");
        item.classList.add("border");

        if (e == 'FizzBuzz') {
            item.classList.add("fizzBuzz");
        } else if (e == 'Fizz') {
            item.classList.add("fizz");
        } else if (e == 'Buzz') {
            item.classList.add('buzz');
        }
        item.innerHTML = e;
        element.appendChild(item);

    });
}

function displayFizzBuzzCount(fizzBuzzCount) {
    document.getElementById("fizzCount").innerHTML += fizzBuzzCount.fizz;
    document.getElementById("buzzCount").innerHTML += fizzBuzzCount.buzz;
    document.getElementById("fizzBuzzCount").innerHTML += fizzBuzzCount.fizzBuzz;
}