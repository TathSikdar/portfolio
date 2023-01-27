// Model       -------------------------------------
const skillsList = [
    {
        skillTitle: 'Front End',
        skill: ['HTML','CSS','JavaScript']
    },
    {
        skillTitle: 'Frameworks',
        skill: ['In Progress :)']
    },
    {
        skillTitle: 'Embedded Systems',
        skill: ['ARM assembly', 'C', 'C++']
    },
    {
        skillTitle: 'CAD and Simulation',
        skill: ['Fusion 360', 'Inventor Pro', 'NI Multisim']
    },
    {
        skillTitle: 'Creative',
        skill: ['Illustrator', 
        'Photoshop', 'Premiere Pro', 'Microsoft Office Suite']
    },
    {
        skillTitle: 'Some Other Languages!',
        skill: ['Python', 'Java', 'MATLAB', 'LaTeX', 'Maple', ]
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
    skillDiv.classList.add('small-card');
    skillP.className = 'skill-text';
    skillP.classList.add('normal-text');

    skillP.innerText = skill;
    
    skillGroup.appendChild(skillDiv);
    skillDiv.appendChild(skillP);
}

// View        -------------------------------------

// Controller  -------------------------------------

function populateSkills(){
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

populateSkills();