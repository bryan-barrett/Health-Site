// JS to dynamically change the last header navigation element depending on what page user is on

const fitness = 'fitness.html';
const nutrition = 'nutrition.html';
const navigation = document.querySelector('#main-nav ul');

let currentPage = location.href.split("/").slice(-1); 

if (currentPage == fitness){
    addMenuItem('Nutrition');
} 

else if (currentPage == nutrition) {
    addMenuItem('Fitness');
}

else if (currentPage != nutrition || currentPage != fitness) {
    addMenuItem('Landing');
}

function addMenuItem(menuName) {
    let additionalLI = document.createElement('li');
    let liText = document.createTextNode(menuName);

    additionalLI.appendChild(liText);
    navigation.appendChild(additionalLI);

    if (menuName == 'Nutrition'){
        navigation.setAttribute('style', 'pointer: click;')

        navigation.addEventListener('click', () => {
            document.location.href="nutrition.html";
        });
    }

    else if (menuName == 'Fitness'){
        navigation.addEventListener('click', () => {
            document.location.href="fitness.html";
        });
    }

    else if (menuName != 'Fitness' || menuName != 'Nutrition'){
        navigation.addEventListener('click', () => {
            document.location.href="index.html";
        });
    }
}

