// TODO: Add more codes + solutions
// Codes Syntax: Object in array

//TODO: CSS Box for Editor, Run Button and errors

//TODO: General visual improvment of captcha with CSS

var captchaCode = document.getElementById("captchaCode");
var errorOutput = document.getElementById("errorMessg");
var darkTheme = false;
var theme = document.getElementById("sty");
var solution;

// codes consists of a dict with keys code, soluton each holding the said values and another list with language

const codes = [{"code": "function main() { \n    retun 'hi!';\n}\nmain();", "solution": "hi!"},
{"code": "function main() {\n    if(num !< 10) {\n        return 'Big number'} \n    else {\n        return 'Small Number'\n    }\n}\nmain(12);", "solution": "Big number"},
{"code": "function randIntFromInterval(min, max) {\n    return Matth.flooor(Math.random()*(max-miin+1)+min);\n}\nfunction main() {\n    var ranInt = randIntFromInterval(1, 1);\n    return randInt;\n}\nmain();", "solution": 1},
{"code": "function getUsername(user) {\n    return user[name];\n}\n \nfunction getTel() {\n    return user[tel];\n}\nuser = {'name': 'Daniel', 'Tel': '+23 54536536536'};\ngetTel(user);\n", "solution": "+23 54536536536"},
{"code": "function init() {\n    var name = 'Dan';\n    var age = 21;\n}\n \n function getName() {\n    return name;\n}\n \ninit();\ngetName();\n", "solution": "Dan"},
{"code": "#include <stdio.h>\n\nint main(void) {\n  printf(hello)\n  return 0\n}", "solution": "hello"}];

const lang = ["Javascript","Javascript","Javascript", "Javascript", "Javascript", "C++"];

function httpGETAsync(url, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
			callback(xmlHttp.responseText);
		}
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function runJS(code) {
	return eval(code);
}

function runRuby(code) {
	var url = "http://opalrb.com/try/?code:" + encodeURIComponent(code);
		httpGETAsync(url, function(response) {
		var output = response.substring(response.lastIndexOf("<pre>")+1, response.lastIndexOf("</pre>"));
		return output;
	});
}

function runCpp(code) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.judge0.com", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	var body={"source_code": code,"language_id": 4}
	function processRequest(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
         var response = JSON.parse(xhr.responseText);
         alert(response.compile_output + response.message);
     }
	}
	xhr.send(body);
	xhr.onreadystatechange = processRequest;

}

function runTest() {
	//We run the code of the editor in a trycatch so the interpreter won't halt the script
	try {
		var output;
		var langArr = document.getElementById("language-name").innerHTML.split(" ");
		var language = langArr[2];

		if(language === "Javascript") {
			output = runJS(captchaCode.value);
		}
		else if(language === "Ruby") {
			output = runRuby(captchaCode.value); //TODO: See TODO file
		}
		else if(language="C++") {
			output = runCpp(captchaCode.value);
		}

		if(output === solution) {
			errorOutput.innerHTML = "";
			document.getElementById("submit").disabled = false; //TODO: Change hardcoded ID
			document.getElementById("submit").className = "submit notDisabledSubmit";
		} else {
			errorOutput.innerHTML = "Wrong answer. Your code returns " + output;
		}
	}
	catch(err) {
		errorOutput.innerHTML = err;
	}
}

function randIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

deCount = codes.length;
	var codeID = randIntFromInterval(0, codeCount-1);
    document.getElementById("language-name").innerHTML="Language : " + lang[codeID];
		document.getElementById("errorMessg").innerHTML="";
		document.getElementById("submit").disabled = true;
		document.getElementById("submit").className = "submit disabledSubmit";
	captchaCode.value = codes[codeID].code;
	solution = codes[codeID].solution;
}

fillEditor();


// Dark theme
function changeTheme(){
	if(!darkTheme) {
		theme.href = "dark_theme.css";
	//	theme.innerText = "Light theme";
	document.getElementById("chtheme").innerHTML="Light theme";
		darkTheme = true;
	} else {
		theme.href = "light_theme.css";
//		theme.innerText = "Dark theme";
		document.getElementById("chtheme").innerHTML="Dark theme";
		darkTheme = false;
	}
}
