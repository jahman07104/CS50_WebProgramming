// playing with dates


const now = new Date()

const win95Launch = new Date(1995, 7, 24)

const demoDate = new Date();
demoDate.setMonth(0)



console.log(demoDate)
console.log(now)
console.log(win95Launch)
console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);

const status = 200;
if (status === 200) {
    console.log('OK!');
} else if (status === 400){
    console.log('Error!');
} else {

    console.log('Unknown status');
}

// ternary statement

// const status1 = 200;
// let message = '';

// if (status === 200) {
//     message = 'OK'

//     console.log(message)
// } else {
//     message = 'Error'
// }


const status1 = 300;
const message = (status1 === 200) ? 'OK!!!!' : "Error!!"

console.log(message)

