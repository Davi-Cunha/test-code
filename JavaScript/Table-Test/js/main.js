let changeBorderBtn = document.querySelector('#changeBorderBtn');
let deleteTableRowBtn = document.querySelector("#deleteRowBtn");
let table = document.querySelector("table");
let inputs = document.querySelectorAll(".inputs input");
let rowNumberInput = document.querySelector(".delete-input input")

changeBorderBtn.addEventListener('click', () => {
    let rowArray = [];
    inputs.forEach((inputValue) => {
        rowArray.push(inputValue.value);
    });

    let row = table.insertRow();
    rowArray.forEach((rowCell) => {
        row.innerHTML += "<td>" + rowCell + "</td>";
    });
    inputs.forEach((inputValue) => {
        inputValue.value = "";
    });
});

deleteTableRowBtn.addEventListener('click', () => {
    deleteRow(rowNumberInput.value);
});

function deleteRow(n) {
    table.deleteRow(parseInt(n) + 1);
}
