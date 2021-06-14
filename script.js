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
    /*
    -> first if there is no columns at all add one by creating a row. for it must exist
    -> increment counter for numrows
    -> and numcols
    -> in normal cases
    loop and create td for assuming row have to exist always for column to be in existence.
    increment column counter
    and if clicked in series of column like row means it need to have that selected color
    //appending that extra td.
    //increment counter for numcols
    */
   let selection = document.querySelectorAll("#grid tr")
   if(numRows === 0 || numCols === 0) {
       // alert("for column to exist. there must be a row first created")
       addR();
   }
   else {  //in normal coditions
        //iterate through each row to make sure column when added stays consistent in multiple rows
        for(let i = 0; i < numRows; ++i) {
            //as it is clicked create a new column
            let add_col = document.createElement("td");
             //if column in clicked in grid changed to the selected color
            add_col.onclick = function() {
                add_col.style.backgroundColor = colorSelected;
            }
            //adding new column in the grid
            selection[i].appendChild(add_col);
        }
        numCols++; //increment the counter
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
    /*
    if there is no column. say no column exist to remove.
    if there is column in normal situation
    choose a selector which targets class grid tr td
    remove that td in each of given row.-a for loop
    decrement the counter
    */
   let selection = document.querySelectorAll("#grid tr");
    if(numCols === 0) {
        alert("No columns exist to remove");
    }
    else {
        for(let i =0; i < numRows; ++i) {
            selection[i].lastElementChild.remove();
        }
        numCols--;
    }
    if(numCols === 0) {
        if(numRows !== 0) {
            let temp = numRows;
            for(let i = 0; i < temp; ++i) {
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

//this function removes all the colors in grid  to default white.
function clearAll() {
    //select all elements in grid, tr and td
    let selection = document.querySelectorAll("#grid tr td");
    //for loop to iterate through every index in grid.
    for(let i = 0; i < (numRows * numCols); ++i) {
        //change the background color to white.
        selection[i].style.backgroundColor = white;
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

