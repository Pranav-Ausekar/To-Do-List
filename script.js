let inputElement = document.getElementById('myInput');
let btnElement = document.getElementById('myBtn');

let text = document.querySelector('.text');

btnElement.addEventListener('click', function () {
    let inputValue = inputElement.value;

    if (inputValue === "") {
        alert("Please Enter Task...");
    }
    else {
        // console.log(inputValue);

        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputValue} <i class="fa-solid fa-trash"></i>`;

        text.appendChild(newElement);
        inputElement.value = "";

        let deleteIcon = newElement.querySelector('i');
        deleteIcon.addEventListener('click', function () {
            // console.log('Clicked on the delete icon');
            text.removeChild(newElement);
        });
    }
});