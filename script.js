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
   //select an element grid tr. 
   let selection = document.querySelectorAll("#grid tr");
   //edge case => if there is no row or column at all. make at least one row.
   if(numRows === 0 || numCols === 0) {
       //call the function addR() to create a row.
       addR();
   }
   else {  //in normal coditions
        //iterate through each row present to make sure column when added stays consistent in multiple rows
        for(let i = 0; i < numRows; ++i) {
            //as add column is clicked create a new column by creating a new td element which represents column.
            let add_col = document.createElement("td");
             //if column in clicked in grid changed the color to the selected color
            add_col.onclick = function() {
                add_col.style.backgroundColor = colorSelected;
            }
            //add that td element to the the grid tr.
            selection[i].appendChild(add_col);
        }
        numCols++; //increments the column counter by one.
   }
}

//Removes a row
function removeR() {
    if (numRows === 0) {            //if all rows has been cleared and button is pressed alert user
        alert("No more Rows")
    }
    else {
        document.querySelector("#grid").lastElementChild.remove();  //remove element tr
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
   //select an element from grid tr.
   let selection = document.querySelectorAll("#grid tr");
   //if numCols is 0 that means no column exists. So throw an alert to notify the user.
    if(numCols === 0) {
        alert("No columns exist to remove");
    }
    else {  //in normal situations where there is column
        //iterates through each row to make sure removal of row is consistent.
        for(let i =0; i < numRows; ++i) {
            //removes the column in a particular row.
            selection[i].lastElementChild.remove();
        }
        numCols--; //decrements the counter.
    }
    //edge case => if numcols is 0, 
    if(numCols === 0) {
        //but numrows is not equal to 0. 
        if(numRows !== 0) {
            let temp = numRows;
            //then go through each row that exists and remove them and decrement the numRows to 0.
            for(let i = 0; i < temp; ++i) {
                //remove the row that exists by calling removeR() function which also decrement the numRows.
                removeR();
            }
        }
    }
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

//this function removes all the colors in grid by changing to default white.
function clearAll() {
    //select all elements in grid tr td
    let selection = document.querySelectorAll("#grid tr td");
    //for loop to iterate through every index in grid.
    for(let i = 0; i < (numRows * numCols); ++i) {
        //change the background color to white.
        selection[i].style.backgroundColor = "white";
    }
}

function fillU() {
    let table = document.querySelectorAll("#grid TR TD")                     //selected all in grid, TR and TD

    for (let i = 0; i < numRows * numCols; i++) {                               //loop through entire grid
        if (table[i].style.backgroundColor === "" || table[i].style.backgroundColor === "white") {  //if the background color is blank or white
            table[i].style.backgroundColor = colorSelected;                 //change it the colorSelected
        }
    }
}

