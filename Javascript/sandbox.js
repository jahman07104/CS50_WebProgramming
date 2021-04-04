// Event driven programming
// Be AWARE***  on line 25 ..document.addEventListener('DOMContentLoaded',function(){

// }) makes sure dom content is loaded before we run the event handler
// function hello() {
//     const heading = document.querySelector('h1')
//     if(heading.querySelector('h1').innerHTML === 'Hello!') {
//         heading.querySelector('h1').innerHTML = 'Goodbye!';
//     } else {
//         heading.querySelector('h1').innerHTML = 'Hello!';
//     }
// }
//  I made the function  above more efficient by using a variable to store
// the result of document.querySelector('h1')
// let counter = 0;
 if(!localStorage.getItem('counter')){
     localStorage.setItem('counter', 0);
 }

function count() {
    let counter = localStorage.getItem('counter')
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)

    if( counter % 10 === 0) {
        alert(`Count will now be ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', function(){
document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;
    //  setInterval(count, 2000)
});

// document.querySelector('form').onsubmit = function(){
//     const name = document.querySelector('#name').value;
//     alert(`Hello, ${name}!`);
// };


// document.addEventListener('DOMContentLoaded', function() {

//  change font color to red
// document.querySelector('#red').onclick = function() {
//     console.log('red')
//     document.querySelector('#heyThere').style.color = "red";
// }

// // change font color to blue
// document.querySelector('#blue').onclick = function() {
//     console.log('blue')

//     document.querySelector('#heyThere').style.color = "blue";
// }

// // change font color to green
// document.querySelector('#purple').onclick = function() {
//     console.log('purple')
//     document.querySelector('#heyThere').style.color = "purple";
// }
// })

// to consolidate all the functions above..add a data attribute in the html

// document.addEventListener('DOMContentLoaded',function(){
//     document.querySelectorAll('button').forEach(function(button) {
//         button.onclick = function() {
//             document.querySelector('#heyThere').style.color = button.dataset.color;
//         }
//     })
// })
 
// using the drop down select function below...see colors.html

// document.addEventListener('DOMContentLoaded',() => {
//     document.querySelector('select').onchange = function() {
//         document.querySelector('#heyThere').style.color = this.value;
//     }
// })

// Task list

document.addEventListener('DOMContentLoaded',() => {

    //  we should make the submit button disabled by default
    // to prevent an empty entry
    document.querySelector('#submit').disabled = true;
    //    the code above will disable the button 
    // then we need to add an event listener to make it respond
    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        } else{
            document.querySelector('#submit').disabled = true;
        }
    };


        document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
          //  the code below will clear out the input field 
        document.querySelector('#task').value = "";
        console.log(task);
        const li = document.createElement('li')
        li.innerHTML = task;
        // see html element #tasks
        document.querySelector('#tasks').append(li)
      

        // to stop form from submitting
            return false
    }
    
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = function () {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4ba9bd9b9b97aae562bbe2dfdd4e069f&format=1')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            console.log(currency)
      const rate = data.rates[currency];
    //   DO NOT USE DOT NOTATION
      if( rate !== undefined) {
        document.querySelector('#result').innerHTML = ` 1 Euro is equal to ${rate.toFixed(2)} ${currency}.`;
      } else {
        document.querySelector('#result').innerHTML = 'you entered an invalid currency.'
      }
      
        })
        .catch(error => {
console.log('Error:', error)
        });

        return false;
    }   
    
  
});