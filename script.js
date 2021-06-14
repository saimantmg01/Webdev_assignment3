let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    let table = document.querySelector("#grid") //selects the element with gird id 
    if (numCols === 0 && numRows === 0) {       //if there is no squares 
        numCols = numCols + 1;                  //increase the num of col by one
    }
    let row = document.createElement("TR")      //create the row element
    numRows = numRows + 1;                      //increases the number of rows
    for (let i = 0; i < numCols; i++) {         //loop through the columns 
        let col = document.createElement("TD")  //creates columns for the row connected to the number of columns 
        col.onclick = function () {                     //if the box is clicked 
            col.style.backgroundColor = colorSelected;      //give it the background selected
        }
        row.appendChild(col)                    //append that col into the row

    }
    table.appendChild(row)                   //append the  row into the table
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}

