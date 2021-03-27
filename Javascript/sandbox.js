// Event driven programming
// Be AWARE*** document.addEventListener('DOMContentLoaded',function(){

// }) makes sure dom content is loaded 
function hello() {
    const heading = document.querySelector('h1')
    if(heading.querySelector('h1').innerHTML === 'Hello!') {
        heading.querySelector('h1').innerHTML = 'Goodbye!';
    } else {
        heading.querySelector('h1').innerHTML = 'Hello!';
    }
}
//  I made the function  above more efficient by using a variable to store
// the result of document.querySelector('h1')
let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter
    if( counter % 10 === 0) {
        alert(`Count will now be ${counter}`)
    }
}
 document.querySelector('button').onclick = count;
