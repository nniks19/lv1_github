function ispisTablice(){
	document.getElementById("table").innerHTML+='<tr><td>'+ document.getElementById("np").value +'</td><td>'+ document.getElementById("gs").value + '</td><td>'+ document.getElementById("eb").value +'</td><td><img src="images/delete.png" onclick="deleteRow(this)"></td></tr>';
}
function deleteRow(r){
	document.getElementById("table").deleteRow(r.parentNode.parentNode.rowIndex);

}