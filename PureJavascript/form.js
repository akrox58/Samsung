//global variables of stud and emp count - not necessary
stud=0;
emp=0;

function tryme(divi){

   var x = document.getElementById("form"); //put A in single and not double

   var info=" ";
   var i=0;

   var table = document.getElementById(divi);

   /* = if we want to create table header, we do createTHead.
   header=table.createTHead();
      or if we want many bodies, we do createTBody.
                      Since no header and only one body is required it is not done */

    //insertion into stud table
   if('students'=== divi){
    var row=table.insertRow(stud);
    rowNo = stud;
    stud+=1;
  }
  //insertion into emp table
  else{
    var row=table.insertRow(emp);
    rowNo = emp;
    emp+=1;
  }

//create new cell for that row
   var cell0=row.insertCell(0);
   var cell1=row.insertCell(1);
   var cell2=row.insertCell(2);

   //get form element name
   var name=x.elements[0].value; // var x = document.getElementById("form");
   var ids=rowNo;

   cell0.innerHTML=name;
   cell1.innerHTML=ids;
   //by displaying html command it will get reflected. we use this to send that row element. Divi is the name of the table id.
   cell2.innerHTML = "<button onClick=removeRow('" + divi + "',this)>Delete </button>\
                      <button onClick=editRow('" + divi + "',this)> Edit </button>";

}
/*
//for Toggleling without jquery.

function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}
*/

function Delete(divi) {

//after getting table id, we iterate through all rows and delete using function.
  for(var i = document.getElementById(divi).rows.length; i > 0;i--)
  {
    document.getElementById(divi).deleteRow(i -1);
  }

//resetting counter value.
    if(divi=="students")
      stud=0;
    else
      emp=0;
}


//removing each row. function.
function removeRow(divi,x) {

  //command to get rowIndex. how? parentNode is tr, the parentNode again is table ( i think. need to confirm)
    var i=x.parentNode.parentNode.rowIndex;
    document.getElementById(divi).deleteRow(i);

//reducing row counter
    if(divi=="students")
      stud-=1;
    else {
        emp-=1;
    }
}

function editRow(divi,x) {

  //get rowIndex
  //get the form values
    var i=x.parentNode.parentNode.rowIndex;
    var x = document.getElementById("form");
  //  console.log(document.getElementById(divi).rows[i].cells[0])

//edit that row's cell -> this is done manually. can also iterate accordingly.
//find out how to create labels in table row on click and edit inplace - when I have time

    document.getElementById(divi).rows[i].cells[0].innerHTML=x.elements[0].value;
    document.getElementById(divi).rows[i].cells[1].innerHTML=x.elements[1].value;

}
