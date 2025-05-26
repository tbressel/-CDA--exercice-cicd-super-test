export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// let number1 = 12;
// let number2 = 456;

// if (number1 != number2) {
//   console.log("OK")
// }


// let text= 'cool';
 

// function tooMuch(number1, number2, coucou, toto, raler) {

//   if (number1) {
//     console.log("number exists")
  
//     if (number2) {
//       console.log('number2 exists')
  
//       if (number1 < number2) {
//         console.log("number 1 et inférieur à number 2")
//       }
//     }
//   }
// }


// tooMuch();


