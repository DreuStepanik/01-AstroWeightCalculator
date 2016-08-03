function calculatedWeight(){
    var userWeight = document.getElementById("userWeight").value;

    var select = document.getElementById('planetMultiplier');

    var options = select.options;

    var selectedOption = options[select.selectedIndex];

    var planetName = selectedOption.innerHTML;
    var planetMultiplier = selectedOption.value;
             
// The function returns the product of userWeight and planetMultiplier


	var calculatedWeight = userWeight * planetMultiplier;
	document.getElementById("calculatedWeight").innerHTML = "If you were on " + planetName + " ,you would weigh " + calculatedWeight + "lbs!"
};