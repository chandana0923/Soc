const newDiv = document.createElement('div');
newDiv.id='newDiv';
newDiv.textContent='This is new div added by new13.js';
document.body.appendChild(newDiv);

const accessedDiv = document.getElementById('newDiv');
console.log('Accessed div:', accessedDiv);