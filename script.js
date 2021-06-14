let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    let table = document.querySelector("#grid") //selects the element with gird id 
    if (numCols === 0 || numRows === 0) {       //if there is no squares 
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
    if (numRows === 0) {            //if all rows has been cleared and button is pressed alert user
        alert("No more Rows")
    }
    else {
        document.querySelector("TR").remove();  //remove element tr
        numRows = numRows - 1;          //decrease the numRows
    }
    if (numRows === 0) {            //if numRows is 0
        if (numCols !== 0) {        //but numCols isnt 0
            numCols = 0             //set num cols  to 0 since all rows plus cols were removed
        }
    }
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
    let table = document.querySelectorAll("#grid TR TD")        //selected all in grid, TR and TD
    for (let i = 0; i < numRows * numCols; i++) {           //loop through the entire grid
        table[i].style.backgroundColor = colorSelected;     //set the background color to the colorSelected
    }
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    let table = document.querySelectorAll("#grid TR TD")                     //selected all in grid, TR and TD

    for (let i = 0; i < numRows * numCols; i++) {                               //loop through entire grid
        if (table[i].style.backgroundColor === "" || table[i].style.backgroundColor === "white") {  //if the background color is blank or white
            table[i].style.backgroundColor = colorSelected;                 //change it the colorSelected
        }
    }
}

