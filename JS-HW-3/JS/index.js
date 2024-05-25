// function getRandomHexColor() {
//   const hex = Math.floor(Math.random() * 16777215).toString(16);
//   return `#${hex.padStart(6, "0")}`;
// }

// const button = document.querySelector(".change-color");
// const colorSpan = document.querySelector(".color");

// button.addEventListener("click", () => {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });

// // // // task 2

// function calculate(operation) {
//   const num1 = Number(document.querySelector("num1").value);
//   const num2 = Number(document.querySelector("num2").value);
//   let result;
//   if (isNaN(num1) || isNaN(num2)) {
//     result = "Please enter valid numbers";
//   } else {
//     switch (operation) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//         break;
//     }
//   }
//   document.getElementById("result").textContent = `Result: ${result}`;
// }

//////task 3

const field = document.getElementById("field");
const ball = document.getElementById("ball");
const ballSize = 100;

field.addEventListener("click", (event) => {
  const fieldRect = field.getBoundingClientRect();
  const x = event.clientX - fieldRect.left;
  const y = event.clientY - fieldRect.top;
  const ballX = Math.max(
    Math.min(x - ballSize / 2, fieldRect.width - ballSize),
    0
  );
  const ballY = Math.max(
    Math.min(y - ballSize / 2, fieldRect.height - ballSize),
    0
  );
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
});
