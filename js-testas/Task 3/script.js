/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    const output = document.getElementById('output');
    const message = document.getElementById('message');

    async function showUsers() {
        try {
            message.style.display = 'none';

            const response = await fetch('https://api.github.com/users');
            const users = await response.json();

            const usersContainer = document.createElement('div');
            usersContainer.id = 'usersContainer';

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'userCard';
                userCard.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
                    <p class="login">${user.login}</p>
                `;
                usersContainer.appendChild(userCard);
            });

            output.appendChild(usersContainer);
        } catch (error) {
            console.error('Failed to fetch GitHub users:', error);
        }
    }

    button.addEventListener('click', showUsers);
});
