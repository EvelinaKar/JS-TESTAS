/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapį kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    async function fetchAndDisplayCars() {
        try {
            const response = await fetch('cars.json');
            const cars = await response.json();

            const output = document.getElementById('output');

            cars.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'carCard';

                const brandName = document.createElement('h3');
                brandName.textContent = car.brand;
                carCard.appendChild(brandName);

                const modelList = document.createElement('ul');
                car.models.forEach(model => {
                    const listItem = document.createElement('li');
                    listItem.textContent = model;
                    modelList.appendChild(listItem);
                });
                carCard.appendChild(modelList);

                output.appendChild(carCard);
            });
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    }

    fetchAndDisplayCars();
});
