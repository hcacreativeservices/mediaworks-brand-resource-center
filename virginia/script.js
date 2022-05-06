let ourPeopleBtn = document.querySelector('#ourPeople');
let ourCareBtn = document.querySelector('#ourCare');
let ourImpactBtn = document.querySelector('#ourImpact');

let ourPeopleSection = document.querySelector('.our-people');
let ourCareSection = document.querySelector('.our-care');
let ourImpactSection = document.querySelector('.our-impact');

// Click button

ourPeopleBtn.onclick = () => {
    // if button is not active
    if(!ourPeopleBtn.classList.contains('active')) {
        // check other buttons for active and remove
        if(ourCareBtn.classList.contains('active')) {
            ourCareBtn.classList.remove('active');
        } else if(ourImpactBtn.classList.contains('active')) {
            ourImpactBtn.classList.remove('active');
        }

        // add active class
        ourPeopleBtn.classList.add('active');

        // remove active class from below section and add to matching section
        if(!ourPeopleSection.classList.contains('active')) {
            if(ourCareSection.classList.contains('active')) {
                ourCareSection.classList.remove('active');
            } else if(ourImpactSection.classList.contains('active')) {
                ourImpactSection.classList.remove('active');
            }

            ourPeopleSection.classList.add('active');
        }
    }
}

ourCareBtn.onclick = () => {
    if(!ourCareBtn.classList.contains('active')) {

        // check other buttons for active and remove
        if(ourPeopleBtn.classList.contains('active')) {
            ourPeopleBtn.classList.remove('active');
        } else if(ourImpactBtn.classList.contains('active')) {
            ourImpactBtn.classList.remove('active');
        }

        ourCareBtn.classList.add('active');

        // remove active class from below section and add to matching section
        if(!ourCareSection.classList.contains('active')) {
            if(ourPeopleSection.classList.contains('active')) {
                ourPeopleSection.classList.remove('active');
            } else if(ourImpactSection.classList.contains('active')) {
                ourImpactSection.classList.remove('active');
            }

            ourCareSection.classList.add('active');
        }
    }
}

ourImpactBtn.onclick = () => {
    if(!ourImpactBtn.classList.contains('active')) {

        // check other buttons for active and remove
        if(ourCareBtn.classList.contains('active')) {
            ourCareBtn.classList.remove('active');
        } else if(ourPeopleBtn.classList.contains('active')) {
            ourPeopleBtn.classList.remove('active');
        }

        ourImpactBtn.classList.add('active');

        // remove active class from below section and add to matching section
        if(!ourImpactSection.classList.contains('active')) {
            if(ourCareSection.classList.contains('active')) {
                ourCareSection.classList.remove('active');
            } else if(ourPeopleSection.classList.contains('active')) {
                ourPeopleSection.classList.remove('active');
            }

            ourImpactSection.classList.add('active');
        }
    }
}


// If active, do nothing

// If not active, remove active from other button and add to this one...

// ...then do the same for matching section