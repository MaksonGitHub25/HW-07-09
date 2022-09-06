export function checkData(firstInput, secondInput) {
    const text1 = document.querySelector(`#${firstInput.id}`).value;
    const text2 = document.querySelector(`#${secondInput.id}`).value;

    if (checkEmptyInputs(text1, text2)) {
        alert('Fields is empty!');
    } else {
        sayHello(text1, text2);
    }
}

function checkEmptyInputs(text1, text2) {
    if (text1 === '' || text2 === '') {
        return true;
    } else {
        return false;
    }
}

function sayHello(text1, text2) {
    alert(`Hello, ${text1} ${text2}. Thanks for your order 😘`);
}