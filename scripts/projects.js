// Model       -------------------------------------
const projectsList = [
    {
        projectName: 'Stand Tall',
        projectOverview: 'OpenCV Posture Tracking Website',
        projectPicture: 'stand-tall.png'
    },
    {
        projectName: 'Sunny!',
        projectOverview: 'IOT Sunrise Alarm Clock',
        projectPicture: 'sunny.png'
    },
    {
        projectName: 'Illuminate',
        projectOverview: 'Dynamic Brightness Control',
        projectPicture: 'illuminate.png'
    }
]

// Model       -------------------------------------

// View        -------------------------------------

function addProjectCard(project){
    const body = document.getElementById('projects-body');
    
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardTitleText = document.createElement('p');
    const cardOverview = document.createElement('div');
    const cardOverviewText = document.createElement('p');
    const cardPictureDiv = document.createElement('div');
    const cardPicture = document.createElement('img');

    cardTitleText.innerText = project.projectName;
    cardOverviewText.innerText = project.projectOverview;
    cardPicture.src = 'images/' + project.projectPicture;

    card.classList.add('card');
    card.classList.add('project');
    cardTitleText.classList.add('header-one');
    cardOverviewText.classList.add('normal-text');
    cardPictureDiv.classList.add('project-picture-div')
    cardPicture.classList.add('project-picture');

    body.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardOverview);
    card.appendChild(cardPictureDiv);
    cardTitle.appendChild(cardTitleText);
    cardOverview.appendChild(cardOverviewText);
    cardPictureDiv.appendChild(cardPicture);
}

// View        -------------------------------------

// Controller  -------------------------------------
function populateProjects(){
    projectsList.forEach(function(project){
        addProjectCard(project);
    });
}
// Controller  -------------------------------------

populateProjects();