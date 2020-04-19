// Select color input
// Select size input
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
let color = document.querySelector("#colorPicker");
// The form element for the size picker is obtained here:
let sizePickerForm = document.getElementById('sizePicker');
// When size is submitted by the user, makeGrid() is called:
sizePickerForm.addEventListener('submit', makeGrid);
// This is what happens when the sizePicker form is submitted:
function makeGrid() {
    event.preventDefault();
    // The Table element for the pixelCanvas:
    const canvasTable = document.querySelector("#pixelCanvas");
    // This part is to delet the previus table to write a new one.
    // We get the table body element to delete it, if there is any:
    var tbodyList = canvasTable.getElementsByTagName("tbody");
    // If there is a table body element, we remove it:
    if (tbodyList.length>0) {
        tbodyList[0].remove();
    }
    //We create the table using nested for loops:
    for (var i = 1; i <= height.value; i++) {
        var newRow = canvasTable.insertRow(-1);
        for (var j = 0; j < width.value; j++) {
            newRow.insertCell(j);
        }
    }
    // We add eventlisteners to every cell, so that by clicking on the Cell
    // the backgroundColor is changed to the currect selected color:
    // tdList is the list of all cells in the table
    var tdList = canvasTable.getElementsByTagName("td");
    for (var k = 0; k < tdList.length; k++) {
        tdList[k].addEventListener("click", function() {
            this.style.backgroundColor = color.value;
        });
    }
}
