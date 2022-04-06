function init(){
	function alertText(){
		var outputtext = document.getElementById("textoutput");
		var alerttext = document.getElementById("entryinput").value;
		outputtext.innerHTML = alerttext;	
		alert("Pavankumar Reddy: " + alerttext);
	}
	var entrybutton = document.getElementById("entrybutton");
	entrybutton.addEventListener("click", alertText);
}
window.addEventListener('load', init);

