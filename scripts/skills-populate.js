// Model       -------------------------------------
const skillsList = [
    {
        skillTitle: 'Languages',
        skill: ['HTML','CSS','JavaScript', 'ARM assembly', 'C', 'C++', 'Python', 
        'Java', 'MATLAB', 'LaTeX', 'Maple', 'Git']
    },
    {
        skillTitle: 'Frameworks',
        skill: ['In Progress :)']
    },
    {
        skillTitle: 'Software',
        skill: ['Autodesk Fusion 360', 'Autodesk Inventor Pro', 'NI Multisim', 'Adobe Illustrator', 
        'Adobe Photoshop', 'Adobe Premiere Pro', 'Microsoft Office Suite']
    }
];

// Model       -------------------------------------

// View        -------------------------------------

function renderTitle(skillsBody,title){
    const skillGroup = document.createElement('div');
    const titleDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const skillsDiv = document.createElement('div');

    skillGroup.className = 'skill-group';
    titleDiv.className = 'skill-title-div';
    titleP.className = 'header-one';
    skillsDiv.className = 'skills';

    titleP.innerText = title;

    skillsBody.appendChild(skillGroup);
    skillGroup.appendChild(titleDiv);
    titleDiv.appendChild(titleP);
    skillGroup.appendChild(skillsDiv);

    return skillsDiv;
}

function renderSkill(skillGroup, skill){
    const skillDiv = document.createElement('div');
    const skillP = document.createElement('p');
    skillDiv.className = 'skill';
    skillDiv.classList.add('card');
    skillP.className = 'skill-text';
    skillP.classList.add('normal-text');

    skillP.innerText = skill;
    
    skillGroup.appendChild(skillDiv);
    skillDiv.appendChild(skillP);
}

// View        -------------------------------------

// Controller  -------------------------------------

function populate(){
    const skillsBody = document.getElementById('skills-body');

    skillsList.forEach(function(skillDict){
        const title = skillDict.skillTitle;
        const skills = skillDict.skill;
        const skillGroup = renderTitle(skillsBody, title);

        skills.forEach(function(skill){
            renderSkill(skillGroup, skill);
        });
    });

}

// Controller  -------------------------------------

populate();