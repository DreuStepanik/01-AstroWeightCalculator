function calculatedWeight(){
    var userWeight = document.getElementById("userWeight").value;
    var planetMultiplier = document.getElementById("planetMultiplier").value;              
// The function returns the product of userWeight and planetMultiplier


	var calculatedWeight = userWeight * planetMultiplier
	document.getElementById("calculatedWeight").innerHTML = calculatedWeight;
}