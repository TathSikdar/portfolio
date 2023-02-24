// Model       -------------------------------------
const projectsList = [
    {
        name: 'Stand Tall',
        overview: 'OpenCV Posture Tracking Website',
        picture: 'stand-tall.png',
        embed: 'none',
        descriptionTop: [],
        descriptionBottom: ['Coming Soon'] 
        // description: 'Stand Tall is a posture analysis website that provides real-time tracking and personalized feedback to users. While it is still a work in progress, the website has been built using Flask and OpenCV to provide basic posture tracking functionality. The backend of the website is built using Flask, a lightweight Python web framework, and OpenCV, an open-source computer vision library. The front-end of the website is designed using HTML, CSS, and JavaScript, providing users with a basic interface.',
    },
    {
        name: 'Farsword',
        overview: 'Parry based Pygame',
        picture: 'farsword.png',
        embed: 'farsword-game.html',
        descriptionTop: [],
        descriptionBottom: ['If a red danger sign apears, the attack is UNBLOCKABLE and must be DODGED',
                            'All other attacks can be deflected by RIGHT CLICKING']
        // description: 'Farsword is parry based combat side scroller with inspiration from souls-like games. Sprite art was created using League of Legend 3D models, Pixelator engine, and a LOT of fixing in photoshop. The music comes from Nier: Automata and sound effects from Sekiro and League of Legends.',
        // extraText: "Gameplay instructions:<br> 1. If a red danger sign apears, the attack is UNBLOCKABLE and must be DODGED<br>2. All other attacks can be deflected by RIGHT CLICKING<br>"
    },
    {
        name: 'Sunny',
        overview: 'IOT Sunrise Alarm Clock',
        picture: 'sunny.png',
        embed: 'none',
        descriptionTop: [],
        descriptionBottom: ['Coming Soon']
    },
    {
        name: 'Illuminate',
        overview: 'Dynamic Brightness Control',
        picture: 'illuminate.png',
        embed: 'none',
        descriptionTop: [],
        descriptionBottom: ['Coming Soon']
    },
    {
        name: 'Yonder',
        overview: 'All Terrain Drone',
        picture: 'yonder.png',
        embed: 'none',
        descriptionTop: [],
        descriptionBottom: ['Coming Soon']
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
    const descriptionTop = document.getElementById('project-description-top');
    const projectFrame = document.getElementById('embedded-project');
    const overlay = document.getElementById('overlay');
    const titleDiv = body.querySelectorAll('.title')[0];
    const title = titleDiv.querySelectorAll('.title-text')[0];

    title.innerText = '</' + project.name + '>';

    fillBottomDescription(project);
    
    // project specifics
    if (project.name == 'Farsword') {
        projectFrame.src = 'projects/' + project.embed;
        projectFrame.style.aspectRatio = 16/9;
        projectFrame.style.width = "70vw";
        projectFrame.style.height = "auto";
        projectFrame.style.maxWidth = "720px";
    }
    else {
        projectFrame.style.height = 0;
        projectFrame.style.width = 0;
    }

    // display popup and darken background
    body.style.display = 'flex';
    overlay.style.display = 'flex';
}

function closeProject() {
    const body = document.getElementById('expanded-project');
    const projectFrame = document.getElementById('embedded-project');
    const descriptionTop = document.getElementById('project-description-top');
    const descriptionBottom = document.getElementById('project-description-bottom');
    const overlay = document.getElementById('overlay');

    projectFrame.src = "";
    descriptionTop.innerHTML = "";
    descriptionBottom.innerHTML = "";
    body.style.display = 'none';
    overlay.style.display = 'none';
}

function fillBottomDescription(project) {

    const descriptionBottom = document.getElementById('project-description-bottom');
    
    project.descriptionBottom.forEach((entryText) => {
        const entry = document.createElement('div');
        const entryTextP = document.createElement('p')
        const bulletPoint = document.createElement('p');
        
        entryTextP.classList.add('normal-text');
        bulletPoint.classList.add('normal-text');
        bulletPoint.classList.add('bullet-point');
        entryTextP.classList.add('project-entry-text');
        entry.classList.add('project-entry');

        entryTextP.innerText = entryText;
        bulletPoint.innerText = '\u2862';

        entry.appendChild(bulletPoint);
        entry.appendChild(entryTextP);
        descriptionBottom.appendChild(entry);
    });
}

// View        -------------------------------------

// Controller  -------------------------------------
function populateProjects(){
    projectsList.forEach(function(project){
        addProjectCard(project);
    });
}

function projectClicked(){
    let body = document.getElementById('projects-body');
    
    for(let i=0; i<projectsList.length; i++){
        body.children[i].onclick = ()=>{
            expandProject(projectsList[i]);
        }
    }
}

function closeClicked() {
    const xButton = document.getElementById('close-button');
    const overlay = document.getElementById('overlay');
    xButton.onclick = ()=>{
        closeProject();
    }
    overlay.onclick = ()=>{
        closeProject();
    }
}

// Controller  -------------------------------------

populateProjects();
projectClicked();
closeClicked();