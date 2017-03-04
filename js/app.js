function convertirCelsius(){
	var f = parseFloat(document.getElementById("farenheit").value);
		if( f != ""){
			document.getElementById("celsius").value = ((f-32)*5/9).toFixed(2);
		}
}

function convertirFarenheit(){
	var c = parseFloat(document.getElementById("celsius").value);
		if(c != ""){
			document.getElementById("farenheit").value =((c*9/5)+32).toFixed(2);
		}
}
