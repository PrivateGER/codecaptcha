// TODO: Add more codes + solutions 
// Codes Syntax: Object in array

//TODO: CSS Box for Editor, Run Button and errors

//TODO: General visual improvment of captcha with CSS

var codeArea = document.getElementById("codeArea");
var errorOutput = document.getElementById("codeError");
var solution;

const codes = [{"code": "function main() {retun 'hi!'; } main();", "solution": "hi!"}, {"code": "function main() {if(num !< 10) {return 'Big number'} else {return 'Small Number'} } main(12);", "solution": "Big number"}];


function runTest() {
	//We run the code of the editor in a trycatch so the interpreter won't halt the script
	try {
		var output = eval(codeArea.value); //Gets the printed output of the script
	} 
	catch(err) {
		errorOutput.innerHTML = err;
	}

	if(output === solution) {
		alert("Successfully completed!");
		document.getElementById("submit").disabled = false; //TODO: Change hardcoded ID
	} else {
		alert("Wrong answer. Your code returns " + output); 
	}
}

function fillEditor() {
	//This function selects a random code and solution and changes the global variables
	var codeCount = codes.length;
	var codeID = randIntFromInterval(0, codeCount);
	codeArea.value = codes[codeID].code;
	solution = codes[codeID].solution;
}

function randIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

fillEditor();
