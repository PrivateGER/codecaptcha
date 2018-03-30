// TODO: Add more codes + solutions 
// Codes Syntax: Object in array

//TODO: CSS Box for Editor, Run Button and errors

//TODO: General visual improvment of captcha with CSS

var captchaCode = document.getElementById("captchaCode");
var errorOutput = document.getElementById("errorMessg");
var solution;

const codes = [{"code": "function main() { \n    retun 'hi!';\n}\nmain();", "solution": "hi!"}, {"code": "function main() {\n    if(num !< 10) {\n        return 'Big number'} \n    else {\n        return 'Small Number'\n    }\n}\nmain(12);", "solution": "Big number"}];


function runTest() {
	//We run the code of the editor in a trycatch so the interpreter won't halt the script
	try {
		var output = eval(captchaCode.value); // Removes newlines and runs script
		if(output === solution) {
			alert("Successfully completed!");
			document.getElementById("submit").disabled = false; //TODO: Change hardcoded ID
			document.getElementById("submit").style = "background-color: green"
		} else {
			alert("Wrong answer. Your code returns " + output); 
		}
	}
	catch(err) {
		errorOutput.innerHTML = err;
	}
}

function randIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}


function fillEditor() {
	//This function selects a random code and solution and changes the global variables
	var codeCount = codes.length;
	var codeID = randIntFromInterval(0, codeCount-1);
	captchaCode.value = codes[codeID].code;
	solution = codes[codeID].solution;
}

fillEditor();