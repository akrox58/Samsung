function removeRow(x) {
    var i=x.parentNode.parentNode.rowIndex;
    document.getElementById('tbldata').deleteRow(i); //Assuming tbldata is the name/id of the table
}
