/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const kg = document.getElementById('search').value;

        if (!kg || isNaN(kg) || kg < 0) {
            outputDiv.innerHTML = '<p>Please enter a valid weight in kilograms.</p>';
            return;
        }

        const pounds = kg * 2.2046;
        const grams = kg / 0.001;
        const ounces = kg * 35.274;

        outputDiv.innerHTML = `
            <p><b>Weight Conversions:</b></p>
            <p>${kg} kg = ${pounds.toFixed(2)} pounds (lb)</p>
            <p>${kg} kg = ${grams.toFixed(2)} grams (g)</p>
            <p>${kg} kg = ${ounces.toFixed(2)} ounces (oz)</p>
        `;

        outputDiv.classList.add('output-style');
    });
});
