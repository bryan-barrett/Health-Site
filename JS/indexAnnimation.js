// JS for index page image colour and size change on hover

const leftCol = document.querySelector('.home-left-section');
const rightCol = document.querySelector('.home-right-section');

leftCol.addEventListener('mouseenter', () =>  {  leftCol.classList.add('column-hover'); });
rightCol.addEventListener('mouseenter', () => { rightCol.classList.add('column-hover'); });
leftCol.addEventListener('mouseleave', () =>  {  
    leftCol.classList.remove('column-hover'); 
    leftCol.setAttribute('style', 'transition: 3s;')
});

rightCol.addEventListener('mouseleave', () => { 
    rightCol.classList.remove('column-hover');
    rightCol.setAttribute('style', 'transition: 3s;')
});
