// Code your solutions in this file
const name = ['Guadalupe', 'Ollie', 'Aki'];
const eventName ="surprise";

function writeCards(name,eventName) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you,${name[i]} , for the wonderful ${eventName} gift!`);
    debugger;
  }

  return name;
}

writeCards();

function countDown(){
    let num=0;
    while(num<11){
        console.log(num++);

    }
}