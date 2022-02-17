function showPreview(){
	var htmlCode = document.getElementById("htmlCode");
	var cssCode = document.getElementById('cssCode');
	var jsCode = document.getElementById('jsCode');
	htmlCode = htmlCode.value;
	cssCode = cssCode.value;
	jsCode = jsCode.value;
	var frame = document.getElementById("preview-window").contentWindow.document;
	frame.open();
	frame.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>` + cssCode + `</style>
 </head>
 <body>` + htmlCode + `
 <script>` + jsCode + `</script>
 </body>
 </html>`);
	frame.close();
}

var html = document.querySelector("#htmlCode");
var css = document.querySelector("#cssCode");
var js = document.querySelector("#jsCode");

if(html){
	html.addEventListener("input", (e) => {
  showPreview();
	})
}
if(css){
	css.addEventListener("input", (e) => {
  showPreview();
})
}
if(js){
	js.addEventListener("input", (e) => {
  showPreview();
})
}

function switch_html(){
	var html = document.querySelector("#htmlCode");
	var css = document.querySelector("#cssCode");
	var js = document.querySelector("#jsCode");
	if(html){
		html.style.display = "none";
	}
	if(css){
		css.style.display = "none";
	}
	if(js){
		js.style.display = "none";
	}
	html.style.display = "block";
}
function switch_css(){
	var html = document.querySelector("#htmlCode");
	var css = document.querySelector("#cssCode");
	var js = document.querySelector("#jsCode");
	if(html){
		html.style.display = "none";
	}
	if(css){
		css.style.display = "none";
	}
	if(js){
		js.style.display = "none";
	}
	css.style.display = "block";
}

function switch_js(){
	var html = document.querySelector("#htmlCode");
	var css = document.querySelector("#cssCode");
	var js = document.querySelector("#jsCode");
	if(html){
		html.style.display = "none";
	}
	if(css){
		css.style.display = "none";
	}
	if(js){
		js.style.display = "none";
	}
	js.style.display = "block";
}