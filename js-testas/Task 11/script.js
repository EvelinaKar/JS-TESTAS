const apiUrl = 'https://testapi.io/api/Eva/resource/skills';

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addSkillButton');
    addButton.addEventListener('click', () => {
        window.location.href = 'add.html';
    });

    fetchSkills();
});

// Fetch and display skills
function fetchSkills() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(responseObject => {
        // Access the 'data' array for the list of skills
        const skills = responseObject.data;
        const tableBody = document.getElementById('skillsTable').querySelector('tbody');
        tableBody.innerHTML = ''; // Clear existing table body
  
        // Iterate over the skills array and create table rows
        skills.forEach(skill => {
          const row = tableBody.insertRow();
          row.innerHTML = `<td>${skill.id}</td><td>${skill.name}</td><td><button data-id="${skill.id}" class="delete-btn">Delete</button></td>`;
        });
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
        alert('Error fetching skills: ' + error.message);
      });
  }
  


// Delete a skill
function deleteSkill(id) {
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(response => {
      if (response.ok) {
        alert('Skill deleted successfully');
        fetchSkills();
      } else {
        alert('Error deleting skill');
      }
    })
    .catch(error => alert('Error: ' + error));
}

document.getElementById('skillsTable').addEventListener('click', (event) => {
    if (event.target.className === 'delete-btn') {
        const skillId = event.target.getAttribute('data-id');
        deleteSkill(skillId);
    }
});

