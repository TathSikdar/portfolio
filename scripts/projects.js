// Model       -------------------------------------
const projectsList = [
    {
        name: 'Stand Tall',
        overview: 'OpenCV Posture Tracking Website',
        picture: 'stand-tall.png'
        
    },
    {
        name: 'Farsword',
        overview: 'Parry based Pygame',
        picture: 'farsword.png'
    },
    {
        name: 'Sunny',
        overview: 'IOT Sunrise Alarm Clock',
        picture: 'sunny.png'
    },
    {
        name: 'Illuminate',
        overview: 'Dynamic Brightness Control',
        picture: 'illuminate.png'
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

    cardTitleText.innerText = '</' + project.name + '>';
    cardOverviewText.innerText = project.overview;
    cardPicture.src = 'images/' + project.picture;

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

function expandProject(project){
    const body = document.getElementById('expanded-project');
    const titleDiv = body.querySelectorAll('.title')[0];
    const title = titleDiv.querySelectorAll('.title-text')[0];
    title.innerText = project.name;
}

// View        -------------------------------------

// Controller  -------------------------------------
function populateProjects(){
    projectsList.forEach(function(project){
        addProjectCard(project);
    });

    expandProject(projectsList[0]);
}
// Controller  -------------------------------------

populateProjects();