const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        alert(`You clicked on ${skill.dataset.skill}!`);
    });
});
