let ourPeopleBtn = document.querySelector('#ourPeople');
let ourCareBtn = document.querySelector('#ourCare');
let ourImpactBtn = document.querySelector('#ourImpact');
let networkBtns = document.querySelectorAll('.network-items .btn');
let activeBtn = document.querySelectorAll('.network-items .btn.active');
let activesection = document.querySelectorAll('.network-item.active');
let ourPeopleSection = document.querySelector('.our-people');
let ourCareSection = document.querySelector('.our-care');
let ourImpactSection = document.querySelector('.our-impact');

// Click button
for (var i=0; i < networkBtns.length; i++) {
    networkBtns[i].addEventListener('click', function() {
        // set current active elements
        activeBtn = document.querySelectorAll('.network-items .btn.active');
        activesection = document.querySelectorAll('.network-item.active');

        // if this element is not active
        if(!this.classList.contains('active')) {
            // remove current active button
            activeBtn[0].classList.remove('active');
            // set this as active
            this.classList.add('active');
            // remove current active section
            activesection[0].classList.remove('active');
        }

        // set active section to match active button
        if(ourPeopleBtn.classList.contains('active')) {
            ourPeopleSection.classList.add('active');
        }

        if(ourCareBtn.classList.contains('active')) {
            ourCareSection.classList.add('active');
        }

        if(ourImpactBtn.classList.contains('active')) {
            ourImpactSection.classList.add('active');
        }
    })
}