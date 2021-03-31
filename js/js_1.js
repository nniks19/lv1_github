function ispisTablice(){
	document.getElementById("table").innerHTML+='<tr><td>'+ document.getElementById("np").value +'</td><td>'+ document.getElementById("gs").value + '</td><td>'+ document.getElementById("eb").value +'</td><td><img src="images/delete.png" onclick="deleteRow(this)"></td><td><input type="checkbox" onclick="changeColor(this)" id="polozen"></td></tr>';
}
function deleteRow(r){
	document.getElementById("table").deleteRow(r.parentNode.parentNode.rowIndex);

}
function changeColor(r){
	document.getElementById("table").rows[r.parentNode.parentNode.rowIndex].style.backgroundColor = "blue";
}