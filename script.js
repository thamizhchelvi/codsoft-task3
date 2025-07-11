const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
      input += value;
    }
  });
});

clear.addEventListener('click', () => {
  input = '';
  display.textContent = '0';
});

equal.addEventListener('click', () => {
  try {
    input = eval(input).toString();
    display.textContent = input;
  } catch {
    display.textContent = 'Error';
    input = '';
  }
});
