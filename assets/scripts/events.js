const button = document.querySelector('button');

// button.onclick = function() {

// }

const buttonClickHandler = () => {
  console.log('Onclick event fired!!');
};

const anotherButtonClickHandler = () => {
  alert('Onclick event fired from anotherButtonClickHandler!!');
};

// button.onclick = buttonClickHandler;

// button.onclick = anotherButtonClickHandler;

// button.addEventListener('click', () => {
//   console.log('addEventListener - button clicked!!');
// });

// setTimeout(() => {
//   button.removeEventListener('click', () => {
//     console.log('removeEventListener- button clicked!!');
//   });
// }, 2000);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 5000);

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//   button.removeEventListener('click', boundFn);
// }, 5000);

/////////////////////////////////////
/*
event object 
*/
/////////////////////////////////////
const newbuttonClickHandler = (event) => {
  console.log('Onclick event fired!!');

  console.log(event);
  event.target.disabled = true;
};

button.addEventListener('click', newbuttonClickHandler);

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', newbuttonClickHandler);
});
