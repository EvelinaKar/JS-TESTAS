/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn__element');
    const stateDisplay = document.getElementById('btn__state');

    let count = 0;

    function updateState() {
        count++;
        stateDisplay.textContent = count;
    }

    button.addEventListener('click', updateState);
});

