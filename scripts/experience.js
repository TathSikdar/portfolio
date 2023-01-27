// Model       -------------------------------------

const experiences = [
    {
        employer: 'Inspirely Education',
        title: 'Senior Curriculum Developer',
        description: ['Developed engaging project-based Python, Scratch, and Math curriculum, increasing customer base by 15%',
        'Collaborated with colleagues in developing benchmark lessons and identifying curriculum needs of faculty',
        'Established training documentation and tools to address needs of specific age groups'],
        startDate: 'Sept 2022',
        endDate: 'Jan 2022'
    },
    {
        employer: 'Inspirely Education',
        title: 'STEM Robotics Instructor',
        description: ['Taught engaging online classes using project-based learning',
        'Communicated regularly with parents to discuss student\'s progress and challenges'],
        startDate: 'Sept 2022',
        endDate: 'Jan 2022'
    },
    {
        employer: 'NextGen Learning',
        title: 'Lead Computer Science Instructor',
        description: ['Delivered engaging curriculum through diverse methods of classroom instruction, computer lab activities, course work, camps, and online learning systems',
        'Assessed, documented, and reported on student progress in JavaScript, Python, and Scratch courses',
        'Distributed clear, effective feedback to improve efficiency and quality of student-written programs',
        'Addressed systematic issues with camp and computer science curriculum by collaborating with colleagues'],
        startDate: 'June 2022',
        endDate: 'Sept 2022'
    },
    {
        employer: 'Kumon Institute Education',
        title: 'Math & Reading Instructor',
        description: ['Implemented peer tutoring systems to enhance comprehensive understanding of math techniques and increase',
        'Designed and managed online learning programs and study sessions',
        'Created individualized learning programs to fit each student\'s learning style',
        'Trained new employees regarding instructional techniques and company policies',
        'Efficiently marked and corrected class work and tests'],
        startDate: 'July 2017',
        endDate: 'March 2022'
    }
];

// Model       -------------------------------------

// View        -------------------------------------

function renderButtons(buttonDiv, experience){
    const button = document.createElement('button');

    button.innerHTML = experience.title;
    button.classList = 'experience-button';

    buttonDiv.appendChild(button);
}

function renderDescription(descriptionDiv, experience){
    descriptionDiv.innerHTML = null;

    const headerDiv = document.createElement('div');
    const headerP = document.createElement('p');
    const dateDiv = document.createElement('div');
    const dateP = document.createElement('p');
    const bodyDiv = document.createElement('div');
    
    headerDiv.id = 'experience-description-header';
    dateDiv.id = 'experience-description-date';
    dateP.id = 'experience-description-date-text'
    bodyDiv.id = 'experience-description-body';
    headerP.className = 'header-one'

    headerP.innerText = experience.title + ' @ ' + experience.employer;
    dateP.innerText = experience.startDate + ' - ' + experience.endDate;

    descriptionDiv.appendChild(headerDiv);
    descriptionDiv.appendChild(bodyDiv);
    headerDiv.appendChild(headerP);
    headerDiv.appendChild(dateDiv);
    dateDiv.appendChild(dateP);


    experience.description.forEach(function(entryText){
        const entry = document.createElement('div');
        const entryTextP = document.createElement('p')
        const bulletPoint = document.createElement('p');
        
        entryTextP.classList.add('normal-text');
        bulletPoint.classList.add('normal-text');
        bulletPoint.classList.add('bullet-point');
        entryTextP.id = 'experience-entry-text';
        entry.id = 'experience-entry';

        entryTextP.innerText = entryText;
        bulletPoint.innerText = '\u2862';

        entry.appendChild(bulletPoint);
        entry.appendChild(entryTextP);
        bodyDiv.appendChild(entry);
    });
}


function styleScrollBar(scrollBarBase, scroller){
    const numberOfButtons = document.querySelectorAll('.experience-button').length;
    const buttonHeight = document.querySelector('.experience-button').offsetHeight;

    scrollBarBase.style.height = buttonHeight*numberOfButtons + 'px';
    scroller.style.height = buttonHeight + 'px'
    scroller.style.top = '0px'
}

function moveScrollBar(scroller, positionFromTop){
    const numberOfButtons = document.querySelectorAll('.experience-button').length;
    const buttonHeight = document.querySelector('.experience-button').offsetHeight;

    scroller.style.top = buttonHeight*positionFromTop + 'px';
}

// View        -------------------------------------

// Controller  -------------------------------------

function populateExperience(){
    const buttonDiv = document.getElementById('experience-button-div');
    const description = document.getElementById('experience-description-div')
    const scrollBarBase = document.getElementById('experience-line');
    const scroller = document.getElementById('experience-scroll-bar');
    let currentExperience;

    experiences.forEach(function(experience){
        renderButtons(buttonDiv, experience);
    });

    renderDescription(description, experiences[currentExperience = 0]);
    
    addEventListener("resize", (event) => {
        styleScrollBar(scrollBarBase, scroller);
    });
    addEventListener("load", (event) =>{
        styleScrollBar(scrollBarBase, scroller)
    });


    for (let i = 0; i < buttonDiv.children.length; i++){
        buttonDiv.children[i].onclick = function(){
            if(currentExperience != i){
                moveScrollBar(scroller, i);
                renderDescription(description, experiences[currentExperience = i])
            }
        }
    }
}

// Controller  -------------------------------------

populateExperience();