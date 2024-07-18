const display = document.getElementById('js-display');
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('js-equal-btn')) {
            return;
        } else if (btn.id === 'js-delete-btn') {
            deleteFromDisplay();
        } else {
            appendToDisplay(btn.innerText);
        }
    });
});

document.getElementById('js-clear-btn').addEventListener('click', clearDisplay);
document.querySelector('.js-equal-btn').addEventListener('click', calculate);

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value === '') {
            return;
        } else if (display.value === '.') {
            throw 'error';
        } else if (display.value === 'Error') {
            throw 'error';
        }
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteFromDisplay() {
    if (display.value === 'Error') {
        display.value = '';
        return;
    }
    display.value = display.value.slice(0, -1);
}
