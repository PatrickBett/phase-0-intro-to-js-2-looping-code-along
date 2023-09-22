function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;  
    messages.push(message);
  } 
  return messages;
}


function countDown(){
    let num=0;
    while(num<11){
        console.log(num++);

    }
}