function whatsup(listedMood) {
  const result = document.querySelector('.result');
 if (goodMood.includes(listedMood)){
    result.textContent = 'I am happy that you are in a good mood!'
  } else{result.textContent = 'I am sad for you. Here are some resources to help you out!'}
}
let goodMood = ['excited', 'happy', 'content', 'hopeful', 'jubilant', 'joyful']
//let badMood = ['sad', 'angry', 'upset', 'nervous']
const dropDown = document.getElementById('moodselect')
//console.log(dropDown)
 let result = dropDown.value
 console.log(result)
//whatsup(result, actualMood)
dropDown.addEventListener('change', (event) => {
  //const result = document.querySelector('.result');
  //result.textContent = `You like ${event.target.value}`;
  console.log(dropDown.value)
  whatsup(event.target.value)
});
//document.getElementsByClassName('moodselector'))

