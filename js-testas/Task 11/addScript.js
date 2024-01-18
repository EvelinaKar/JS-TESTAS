const apiUrl = 'https://testapi.io/api/Eva/resource/skills';

document.getElementById('addSkillForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const skillInput = document.getElementById('skillName');
    const skillName = skillInput.value;
    
    addSkill({ name: skillName })
        .then(() => {
            alert('Skill added successfully');
            window.location.href = 'index.html';
        })
        .catch(error => {
            alert('Failed to add skill: ' + error.message);
        });
});

document.getElementById('viewSkillsButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});

function addSkill(skill) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(skill)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}
